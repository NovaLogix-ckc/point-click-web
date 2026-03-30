export interface SceneryItem {
  id: string;
  type: 'desk' | 'server' | 'plant' | 'sign' | 'terminal' | 'decoration' | 'rug' | 'poster';
  x: number; // percentage
  y: number; // percentage
  visual: string; // emoji or text content
  label: string;
  opacity?: number;
}

export const sceneryItems: SceneryItem[] = [
  // Server racks
  { id: 's1', type: 'server', x: 8, y: 30, visual: '🖥️', label: 'Hallucination Server Rack A', opacity: 0.5 },
  { id: 's2', type: 'server', x: 10, y: 33, visual: '🖥️', label: 'Hallucination Server Rack B', opacity: 0.45 },
  { id: 's3', type: 'server', x: 92, y: 45, visual: '🖥️', label: 'Confabulation Cluster Node', opacity: 0.5 },

  // Desks
  { id: 'd1', type: 'desk', x: 25, y: 50, visual: '🗄️', label: 'Filing Cabinet (contains imaginary patents)', opacity: 0.5 },
  { id: 'd2', type: 'desk', x: 72, y: 35, visual: '🪑', label: 'Ergonomic Chair (AI-designed, not comfortable)', opacity: 0.4 },
  { id: 'd3', type: 'desk', x: 55, y: 85, visual: '📋', label: 'Clipboard (TruthBender test results)', opacity: 0.45 },
  { id: 'd4', type: 'desk', x: 38, y: 28, visual: '💼', label: 'Briefcase (full of hallucinated contracts)', opacity: 0.4 },

  // Plants
  { id: 'p1', type: 'plant', x: 18, y: 72, visual: '🌿', label: 'Office Plant (the only real thing here)', opacity: 0.5 },
  { id: 'p2', type: 'plant', x: 85, y: 25, visual: '🪴', label: 'Potted Fern (AI thinks it\'s a cactus)', opacity: 0.45 },
  { id: 'p3', type: 'plant', x: 48, y: 22, visual: '🌵', label: 'Actual Cactus (AI thinks it\'s a fern)', opacity: 0.4 },

  // Terminals
  { id: 't1', type: 'terminal', x: 65, y: 60, visual: '💻', label: 'Dev Terminal (running DreamWeaver SDK)', opacity: 0.5 },
  { id: 't2', type: 'terminal', x: 15, y: 55, visual: '🖲️', label: 'Mystery Input Device', opacity: 0.4 },
  { id: 't3', type: 'terminal', x: 82, y: 75, visual: '📡', label: 'Satellite Dish (broadcasts hallucinations)', opacity: 0.45 },

  // Signs
  { id: 'sg1', type: 'sign', x: 30, y: 18, visual: '⚠ HALLUCINATION ZONE', label: 'Warning Sign' },
  { id: 'sg2', type: 'sign', x: 75, y: 20, visual: 'EXIT → (does not exist)', label: 'Fake Exit Sign' },
  { id: 'sg3', type: 'sign', x: 50, y: 92, visual: '☢ TRUTH-FREE AREA', label: 'Safety Sign' },
  { id: 'sg4', type: 'sign', x: 12, y: 88, visual: 'FLOOR B-7 // SECTOR G', label: 'Floor Marker' },

  // Decorations
  { id: 'dc1', type: 'decoration', x: 42, y: 40, visual: '☕', label: 'Coffee Mug (the coffee is a simulation)', opacity: 0.45 },
  { id: 'dc2', type: 'decoration', x: 88, y: 60, visual: '🏆', label: 'Award: "Most Creative Data" 2024', opacity: 0.5 },
  { id: 'dc3', type: 'decoration', x: 5, y: 50, visual: '🔮', label: 'Crystal Ball (less accurate than Deja-Vu Analytics)', opacity: 0.4 },
  { id: 'dc4', type: 'decoration', x: 60, y: 25, visual: '📊', label: 'Chart (numbers are aspirational)', opacity: 0.4 },
  { id: 'dc5', type: 'decoration', x: 33, y: 75, visual: '🧪', label: 'Beaker (hallucination concentrate)', opacity: 0.45 },

  // Rugs / floor markings
  { id: 'r1', type: 'rug', x: 50, y: 55, visual: '⬡', label: 'HalluciNova Logo Floor Tile', opacity: 0.15 },
  { id: 'r2', type: 'rug', x: 25, y: 40, visual: '◈', label: 'Decorative Floor Marker', opacity: 0.1 },
  { id: 'r3', type: 'rug', x: 75, y: 65, visual: '◇', label: 'Conference Zone Marker', opacity: 0.12 },

  // Posters
  { id: 'ps1', type: 'poster', x: 4, y: 20, visual: '"Confidence Over Correctness" — HalluciNova Values', label: 'Corporate Poster' },
  { id: 'ps2', type: 'poster', x: 95, y: 30, visual: '"Ship it. Facts are a v2 feature."', label: 'Motivational Poster' },
  { id: 'ps3', type: 'poster', x: 58, y: 15, visual: '"Employee of the Month: DAVE (AI)"', label: 'Employee Recognition' },
  { id: 'ps4', type: 'poster', x: 20, y: 90, visual: '"If the vibes are right, the facts don\'t matter"', label: 'Company Motto' },
];
