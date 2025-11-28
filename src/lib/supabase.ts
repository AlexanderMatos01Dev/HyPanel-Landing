// Supabase client configuration
const SUPABASE_URL = "https://iwcamtmajjwjipkzkkzq.supabase.co";
const SUPABASE_KEY = "sb_publishable_jvVFh_g9IJ9oNganaA0WgA_i8wq9W-5";

interface SubscriberData {
  email: string;
  ip: string;
  origin: string;
}

interface SubscribeResult {
  success: boolean;
  error?: string;
  isDuplicate?: boolean;
}

// Rate limiting storage keys
const RATE_LIMIT_KEY = 'hypanel_rate_limit';
const RATE_LIMIT_COUNT_KEY = 'hypanel_rate_count';

interface RateLimitData {
  timestamp: number;
  attempts: number;
}

/**
 * Check if user is rate limited
 * First attempt: no limit
 * After first submission: wait 10 seconds
 * After second submission: wait 15 minutes
 */
export function checkRateLimit(): { allowed: boolean; waitTime: number } {
  const stored = localStorage.getItem(RATE_LIMIT_KEY);
  
  if (!stored) {
    return { allowed: true, waitTime: 0 };
  }

  const data: RateLimitData = JSON.parse(stored);
  const now = Date.now();
  const elapsed = now - data.timestamp;

  // Determine wait time based on attempts
  let requiredWait: number;
  if (data.attempts === 1) {
    requiredWait = 10 * 1000; // 10 seconds
  } else if (data.attempts >= 2) {
    requiredWait = 15 * 60 * 1000; // 15 minutes
  } else {
    requiredWait = 0;
  }

  if (elapsed < requiredWait) {
    return { 
      allowed: false, 
      waitTime: Math.ceil((requiredWait - elapsed) / 1000) 
    };
  }

  return { allowed: true, waitTime: 0 };
}

/**
 * Record a submission attempt for rate limiting
 */
export function recordAttempt(): void {
  const stored = localStorage.getItem(RATE_LIMIT_KEY);
  const now = Date.now();

  if (!stored) {
    localStorage.setItem(RATE_LIMIT_KEY, JSON.stringify({ 
      timestamp: now, 
      attempts: 1 
    }));
    return;
  }

  const data: RateLimitData = JSON.parse(stored);
  localStorage.setItem(RATE_LIMIT_KEY, JSON.stringify({ 
    timestamp: now, 
    attempts: data.attempts + 1 
  }));
}

/**
 * Get current IP address from a public API
 */
async function getClientIP(): Promise<string> {
  try {
    const response = await fetch('https://api.ipify.org?format=json');
    const data = await response.json();
    return data.ip || 'unknown';
  } catch {
    return 'unknown';
  }
}

/**
 * Subscribe an email to the alpha list
 */
export async function subscribeToAlpha(email: string): Promise<SubscribeResult> {
  try {
    // Get IP and origin
    const ip = await getClientIP();
    const origin = typeof window !== 'undefined' ? window.location.origin : 'unknown';

    // Make request to Supabase REST API
    const response = await fetch(`${SUPABASE_URL}/rest/v1/emails_subscribers`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'apikey': SUPABASE_KEY,
        'Authorization': `Bearer ${SUPABASE_KEY}`,
        'Prefer': 'return=minimal'
      },
      body: JSON.stringify({ email, ip, origin })
    });

    if (response.ok) {
      recordAttempt();
      return { success: true };
    }

    // Check for duplicate email (conflict)
    if (response.status === 409) {
      return { success: false, error: 'Este email ya está registrado', isDuplicate: true };
    }

    // Parse error message
    const errorData = await response.json().catch(() => ({}));
    
    // Check for unique constraint violation
    if (errorData.code === '23505' || errorData.message?.includes('duplicate')) {
      return { success: false, error: 'Este email ya está registrado', isDuplicate: true };
    }

    return { 
      success: false, 
      error: errorData.message || 'Error al registrar. Inténtalo de nuevo.' 
    };
  } catch (error) {
    console.error('Supabase subscription error:', error);
    return { 
      success: false, 
      error: 'Error de conexión. Inténtalo de nuevo.' 
    };
  }
}

/**
 * Format wait time for display
 */
export function formatWaitTime(seconds: number): string {
  if (seconds < 60) {
    return `${seconds} segundo${seconds !== 1 ? 's' : ''}`;
  }
  const minutes = Math.ceil(seconds / 60);
  return `${minutes} minuto${minutes !== 1 ? 's' : ''}`;
}
