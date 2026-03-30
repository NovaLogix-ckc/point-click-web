import { useCallback } from 'react';
import { useGameStore } from '../../store/gameStore';
import { npcs } from '../../data/npcs';
import { HollywoodSign } from '../HollywoodSign/HollywoodSign';
import { Character } from '../Character/Character';
import { NPC } from '../NPC/NPC';
import styles from './Scene.module.css';

const SCENE_WIDTH = 3400;
const GROUND_Y = 450;

export function Scene() {
  const sceneScrollX = useGameStore((s) => s.sceneScrollX);
  const activeNPCId = useGameStore((s) => s.activeNPCId);

  const handleSceneClick = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (activeNPCId) return; // Don't move during dialogue

      const rect = e.currentTarget.getBoundingClientRect();
      const store = useGameStore.getState();
      const x = e.clientX - rect.left + store.sceneScrollX;
      const y = GROUND_Y; // constrain to ground

      store.setCharacterTarget({ x, y });
    },
    [activeNPCId]
  );

  return (
    <div className={styles.viewport}>
      <div
        className={styles.scene}
        style={{
          width: SCENE_WIDTH,
          transform: `translateX(-${sceneScrollX}px)`,
        }}
        onClick={handleSceneClick}
      >
        {/* Background layers */}
        <div className={styles.skyGrid} />
        <div className={styles.buildings} />
        <div className={styles.ground} />

        {/* Hollywood Sign */}
        <HollywoodSign />

        {/* NPCs */}
        {npcs.map((npc) => (
          <NPC key={npc.id} npc={npc} />
        ))}

        {/* Player Character */}
        <Character />

        {/* Ground decorations */}
        <div className={styles.groundLine} />
      </div>
    </div>
  );
}
