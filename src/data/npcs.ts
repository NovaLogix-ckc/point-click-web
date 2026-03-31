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
    position: { x: 20, y: 35 },
    interactionRadius: 8,
    spriteConfig: {
      bodyColor: '#00f0ff',
      accentColor: '#006688',
      accessory: 'glasses',
    },
    idleAnimation: 'sway',
  },
  {
    id: 'glitch',
    name: 'GLITCH',
    title: 'Lead Product Evangelist',
    position: { x: 50, y: 45 },
    interactionRadius: 8,
    spriteConfig: {
      bodyColor: '#ff2d7b',
      accentColor: '#881144',
      accessory: 'labcoat',
    },
    idleAnimation: 'bounce',
  },
  {
    id: 'four04',
    name: '404',
    title: 'Senior Support Hallucinator',
    position: { x: 78, y: 38 },
    interactionRadius: 8,
    spriteConfig: {
      bodyColor: '#ffe156',
      accentColor: '#886600',
      accessory: 'headset',
    },
    idleAnimation: 'float',
  },
  {
    id: 'sarge',
    name: 'SARGE',
    title: 'Head of Talent Acquisition',
    position: { x: 35, y: 70 },
    interactionRadius: 8,
    spriteConfig: {
      bodyColor: '#ff4444',
      accentColor: '#881111',
      accessory: 'hat',
    },
    idleAnimation: 'pace',
  },
  {
    id: 'patches',
    name: 'PATCHES',
    title: 'Customer Success Fabricator',
    position: { x: 70, y: 72 },
    interactionRadius: 8,
    spriteConfig: {
      bodyColor: '#b44dff',
      accentColor: '#5522aa',
      accessory: 'trenchcoat',
    },
    idleAnimation: 'sway',
  },
  {
    id: 'doc',
    name: 'DOC',
    title: 'Chief Documentation Hallucinator',
    position: { x: 88, y: 55 },
    interactionRadius: 8,
    spriteConfig: {
      bodyColor: '#00ff88',
      accentColor: '#008844',
      accessory: 'book',
    },
    idleAnimation: 'float',
  },
];
