// Social Links - Centralized configuration
export const SOCIAL_LINKS = {
  discord: 'https://discord.gg/TrcwkU8x',
  twitter: 'https://x.com/HyPanel',
  reddit: 'https://www.reddit.com/r/HyPanel/',
  patreon: 'https://patreon.com/HyPanel?utm_medium=unknown&utm_source=join_link&utm_campaign=creatorshare_fan&utm_content=copyLink',
  buyMeACoffee: 'https://buymeacoffee.com/hypanel_team',
  github: 'https://github.com/hypanel', // TODO: Update when repo is public
} as const;

export type SocialPlatform = keyof typeof SOCIAL_LINKS;
