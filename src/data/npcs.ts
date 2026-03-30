export interface NPCDefinition {
  id: string;
  name: string;
  title: string;
  position: { x: number; y: number };
  interactionRadius: number;
  spriteConfig: {
    bodyColor: string;
    accentColor: string;
    accessory: 'glasses' | 'labcoat' | 'headset' | 'hat' | 'trenchcoat' | 'book';
  };
  idleAnimation: 'bounce' | 'sway' | 'float' | 'pace';
}

export const npcs: NPCDefinition[] = [
  {
    id: 'vera',
    name: 'VERA',
    title: 'Chief Visionary Officer',
    position: { x: 500, y: 450 },
    interactionRadius: 90,
    spriteConfig: {
      bodyColor: '#39ff14',
      accentColor: '#00ff88',
      accessory: 'glasses',
    },
    idleAnimation: 'sway',
  },
  {
    id: 'glitch',
    name: 'GLITCH',
    title: 'Lead Product Evangelist',
    position: { x: 1000, y: 450 },
    interactionRadius: 90,
    spriteConfig: {
      bodyColor: '#00ccff',
      accentColor: '#ffffff',
      accessory: 'labcoat',
    },
    idleAnimation: 'bounce',
  },
  {
    id: 'four04',
    name: '404',
    title: 'Senior Support Hallucinator',
    position: { x: 1500, y: 450 },
    interactionRadius: 90,
    spriteConfig: {
      bodyColor: '#ff6600',
      accentColor: '#ffaa00',
      accessory: 'headset',
    },
    idleAnimation: 'float',
  },
  {
    id: 'sarge',
    name: 'SARGE',
    title: 'Head of Talent Acquisition',
    position: { x: 2000, y: 450 },
    interactionRadius: 90,
    spriteConfig: {
      bodyColor: '#ff4444',
      accentColor: '#44ff44',
      accessory: 'hat',
    },
    idleAnimation: 'pace',
  },
  {
    id: 'patches',
    name: 'PATCHES',
    title: 'Customer Success Fabricator',
    position: { x: 2500, y: 450 },
    interactionRadius: 90,
    spriteConfig: {
      bodyColor: '#aa66ff',
      accentColor: '#ffcc00',
      accessory: 'trenchcoat',
    },
    idleAnimation: 'sway',
  },
  {
    id: 'doc',
    name: 'DOC',
    title: 'Chief Documentation Hallucinator',
    position: { x: 3000, y: 450 },
    interactionRadius: 90,
    spriteConfig: {
      bodyColor: '#ffcc00',
      accentColor: '#ff66aa',
      accessory: 'book',
    },
    idleAnimation: 'float',
  },
];
