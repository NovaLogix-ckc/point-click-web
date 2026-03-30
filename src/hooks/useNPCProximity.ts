import { useEffect } from 'react';
import { useGameStore } from '../store/gameStore';
import { npcs } from '../data/npcs';

export function useNPCProximity() {
  const characterPosition = useGameStore((s) => s.characterPosition);
  const setNearbyNPCId = useGameStore((s) => s.setNearbyNPCId);
  const activeNPCId = useGameStore((s) => s.activeNPCId);

  useEffect(() => {
    if (activeNPCId) return;

    let closest: string | null = null;
    let closestDist = Infinity;

    for (const npc of npcs) {
      const dx = characterPosition.x - npc.position.x;
      const dy = characterPosition.y - npc.position.y;
      const dist = Math.sqrt(dx * dx + dy * dy);

      if (dist < npc.interactionRadius && dist < closestDist) {
        closest = npc.id;
        closestDist = dist;
      }
    }

    setNearbyNPCId(closest);
  }, [characterPosition.x, characterPosition.y, activeNPCId, setNearbyNPCId]);
}
