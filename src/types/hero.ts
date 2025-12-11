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
  "Create Your World",
  "Build Experiences",
  "Scale Instantly",
  "Empower Players",
  "Unleash Creativity",
];
