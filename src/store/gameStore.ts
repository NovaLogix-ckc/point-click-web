import { create } from 'zustand';
import { dialogueTrees } from '../data/dialogues';

interface Position {
  x: number;
  y: number;
}

interface GameState {
  characterPosition: Position;
  characterTarget: Position | null;
  isWalking: boolean;
  facingDirection: 'left' | 'right';

  activeNPCId: string | null;
  currentNodeId: string | null;
  dialogueHistory: string[];

  sceneScrollX: number;
  nearbyNPCId: string | null;

  setCharacterTarget: (target: Position | null) => void;
  updateCharacterPosition: (pos: Position) => void;
  setIsWalking: (walking: boolean) => void;
  setFacingDirection: (dir: 'left' | 'right') => void;

  startDialogue: (npcId: string) => void;
  advanceDialogue: (nextNodeId: string) => void;
  endDialogue: () => void;

  setSceneScroll: (x: number) => void;
  setNearbyNPCId: (id: string | null) => void;
}

export const useGameStore = create<GameState>((set) => ({
  characterPosition: { x: 200, y: 450 },
  characterTarget: null,
  isWalking: false,
  facingDirection: 'right',

  activeNPCId: null,
  currentNodeId: null,
  dialogueHistory: [],

  sceneScrollX: 0,
  nearbyNPCId: null,

  setCharacterTarget: (target) => set({ characterTarget: target }),
  updateCharacterPosition: (pos) => set({ characterPosition: pos }),
  setIsWalking: (walking) => set({ isWalking: walking }),
  setFacingDirection: (dir) => set({ facingDirection: dir }),

  startDialogue: (npcId) => {
    const tree = dialogueTrees[npcId];
    if (tree) {
      set({
        activeNPCId: npcId,
        currentNodeId: tree.startNodeId,
        characterTarget: null,
        isWalking: false,
      });
    }
  },

  advanceDialogue: (nextNodeId) =>
    set((state) => ({
      currentNodeId: nextNodeId,
      dialogueHistory: [...state.dialogueHistory, nextNodeId],
    })),

  endDialogue: () =>
    set({
      activeNPCId: null,
      currentNodeId: null,
    }),

  setSceneScroll: (x) => set({ sceneScrollX: x }),
  setNearbyNPCId: (id) => set({ nearbyNPCId: id }),
}));
