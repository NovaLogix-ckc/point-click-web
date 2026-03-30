export interface SceneryItem {
  id: string;
  type: 'pipe' | 'grate' | 'stain' | 'wire' | 'crack' | 'vent' | 'puddle' | 'marking';
  x: number;
  y: number;
  rotation?: number;
  scale?: number;
}

export const sceneryItems: SceneryItem[] = [
  // Pipes running across the scene
  { id: 'pipe1', type: 'pipe', x: 5, y: 45, rotation: 90, scale: 1.5 },
  { id: 'pipe2', type: 'pipe', x: 95, y: 30, rotation: 90, scale: 2 },
  { id: 'pipe3', type: 'pipe', x: 40, y: 88, rotation: 0, scale: 1.8 },
  { id: 'pipe4', type: 'pipe', x: 62, y: 20, rotation: 15, scale: 1.2 },

  // Floor grates
  { id: 'grate1', type: 'grate', x: 15, y: 60 },
  { id: 'grate2', type: 'grate', x: 55, y: 75 },
  { id: 'grate3', type: 'grate', x: 82, y: 48 },
  { id: 'grate4', type: 'grate', x: 30, y: 85 },

  // Toxic stains / corrosion
  { id: 'stain1', type: 'stain', x: 25, y: 55, scale: 1.5 },
  { id: 'stain2', type: 'stain', x: 60, y: 40, scale: 0.8 },
  { id: 'stain3', type: 'stain', x: 45, y: 68 },
  { id: 'stain4', type: 'stain', x: 85, y: 80, scale: 1.2 },
  { id: 'stain5', type: 'stain', x: 10, y: 78, scale: 0.7 },

  // Dangling wires
  { id: 'wire1', type: 'wire', x: 22, y: 22 },
  { id: 'wire2', type: 'wire', x: 68, y: 18 },
  { id: 'wire3', type: 'wire', x: 90, y: 25 },
  { id: 'wire4', type: 'wire', x: 42, y: 16 },

  // Wall cracks
  { id: 'crack1', type: 'crack', x: 35, y: 30, rotation: -20 },
  { id: 'crack2', type: 'crack', x: 75, y: 55, rotation: 30 },
  { id: 'crack3', type: 'crack', x: 12, y: 42, rotation: -10 },
  { id: 'crack4', type: 'crack', x: 92, y: 65, rotation: 45 },

  // Vents with eerie glow
  { id: 'vent1', type: 'vent', x: 8, y: 35 },
  { id: 'vent2', type: 'vent', x: 48, y: 30 },
  { id: 'vent3', type: 'vent', x: 83, y: 28 },

  // Puddles
  { id: 'puddle1', type: 'puddle', x: 30, y: 62, scale: 1.3 },
  { id: 'puddle2', type: 'puddle', x: 65, y: 82, scale: 0.9 },
  { id: 'puddle3', type: 'puddle', x: 18, y: 48 },

  // Floor markings / hazard stripes
  { id: 'mark1', type: 'marking', x: 50, y: 58 },
  { id: 'mark2', type: 'marking', x: 20, y: 78 },
  { id: 'mark3', type: 'marking', x: 75, y: 90 },
];
