import { useCallback } from 'react';
import { useGameStore } from '../../store/gameStore';
import { npcs } from '../../data/npcs';
import { sceneryItems } from '../../data/scenery';
import { HollywoodSign } from '../HollywoodSign/HollywoodSign';
import { Character } from '../Character/Character';
import { NPC } from '../NPC/NPC';
import { InstructionsBox } from '../InstructionsBox/InstructionsBox';
import styles from './Scene.module.css';

export function Scene() {
  const activeNPCId = useGameStore((s) => s.activeNPCId);

  const handleSceneClick = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (activeNPCId) return;

      const rect = e.currentTarget.getBoundingClientRect();
      const xPct = ((e.clientX - rect.left) / rect.width) * 100;
      const yPct = ((e.clientY - rect.top) / rect.height) * 100;

      const clampedY = Math.max(22, Math.min(yPct, 92));

      useGameStore.getState().setCharacterTarget({ x: xPct, y: clampedY });
    },
    [activeNPCId]
  );

  return (
    <div className={styles.viewport} onClick={handleSceneClick}>
      {/* Background layers */}
      <div className={styles.gridOverlay} />
      <div className={styles.noiseOverlay} />
      <div className={styles.smokeLayer} />
      <div className={styles.vignetteOverlay} />

      {/* Hollywood Sign */}
      <HollywoodSign />

      {/* Instructions */}
      <InstructionsBox />

      {/* Scenery items (CSS-only) */}
      {sceneryItems.map((item) => (
        <div
          key={item.id}
          className={`${styles.sceneryItem} ${styles[item.type]}`}
          style={{
            left: `${item.x}%`,
            top: `${item.y}%`,
            transform: `translate(-50%, -50%) rotate(${item.rotation ?? 0}deg) scale(${item.scale ?? 1})`,
          }}
        />
      ))}

      {/* NPCs */}
      {npcs.map((npc) => (
        <NPC key={npc.id} npc={npc} />
      ))}

      {/* Player Character */}
      <Character />
    </div>
  );
}
