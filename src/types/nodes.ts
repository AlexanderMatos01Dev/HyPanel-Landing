export type InstanceStatus = 'active' | 'sleeping' | 'waking';

export interface InstanceNodeProps {
  position: React.CSSProperties;
  label: string;
  status: InstanceStatus;
  playerCount: number;
}

export interface ConnectionLineProps {
  start: { x: number | string; y: number | string };
  end: { x: number | string; y: number | string };
  active: boolean;
  delay?: number;
}
