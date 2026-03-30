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
      bodyColor: '#39ff14',
      accentColor: '#2a5c1a',
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
      bodyColor: '#1a8a5c',
      accentColor: '#0d3d2a',
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
      bodyColor: '#8b6914',
      accentColor: '#4a3a0a',
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
      bodyColor: '#5c1a1a',
      accentColor: '#1a3a1a',
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
      bodyColor: '#3a3a2a',
      accentColor: '#5c5c1a',
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
      bodyColor: '#4a6a1a',
      accentColor: '#2a3a0a',
      accessory: 'book',
    },
    idleAnimation: 'float',
  },
];
