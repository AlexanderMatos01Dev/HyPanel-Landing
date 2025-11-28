export type HeroMessage = string;

export interface HeroState {
  scrolled: boolean;
  email: string;
  joined: boolean;
  simStep: 0 | 1 | 2 | 3 | 4 | 5;
  msgIndex: number;
}

// Short and descriptive phrases representing the complete platform
export const HERO_MESSAGES: HeroMessage[] = [
  "Complete Platform",
  "Smart Hosting",
  "No-Code Creation",
  "Content Ecosystem",
  "Community Tools",
];
