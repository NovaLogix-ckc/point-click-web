import { useEffect } from 'react';
import { useGameStore } from '../store/gameStore';
import { dialogueTrees } from '../data/dialogues';

export function useDialogue() {
  const activeNPCId = useGameStore((s) => s.activeNPCId);

  useEffect(() => {
    if (!activeNPCId) return;

    const handleKey = (e: KeyboardEvent) => {
      const store = useGameStore.getState();
      const { currentNodeId } = store;
      if (!currentNodeId || !store.activeNPCId) return;

      if (e.key === 'Escape') {
        store.endDialogue();
        return;
      }

      const keyMap: Record<string, number> = {
        a: 0, b: 1, c: 2,
        '1': 0, '2': 1, '3': 2,
      };

      const optionIndex = keyMap[e.key.toLowerCase()];
      if (optionIndex !== undefined) {
        const tree = dialogueTrees[store.activeNPCId];
        const node = tree?.nodes[currentNodeId];
        if (node && node.options[optionIndex]) {
          store.advanceDialogue(node.options[optionIndex].nextNodeId);
        }
      }
    };

    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [activeNPCId]);
}
