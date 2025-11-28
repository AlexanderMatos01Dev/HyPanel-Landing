export interface FeatureItem {
  icon: 'Clock' | 'Layout' | 'Database';
  title: string;
  description: string;
  accent: 'blue' | 'orange' | 'green';
}

export interface HytahubCard {
  kind: 'pack' | 'map' | 'script';
  title: string;
  price: 'FREE' | string;
  rating: number;
  accent: 'purple' | 'orange' | 'blue';
}
