import { useGameStore } from '../../store/gameStore';
import type { NPCDefinition } from '../../data/npcs';
import styles from './NPC.module.css';

interface NPCProps {
  npc: NPCDefinition;
}

export function NPC({ npc }: NPCProps) {
  const nearbyNPCId = useGameStore((s) => s.nearbyNPCId);
  const startDialogue = useGameStore((s) => s.startDialogue);
  const activeNPCId = useGameStore((s) => s.activeNPCId);
  const isNearby = nearbyNPCId === npc.id;
  const isTalking = activeNPCId === npc.id;

  const handleClick = (e: React.MouseEvent) => {
    if (isNearby) {
      e.stopPropagation();
      startDialogue(npc.id);
    }
  };

  return (
    <div
      className={`${styles.npc} ${styles[npc.idleAnimation]} ${isTalking ? styles.talking : ''}`}
      style={{
        left: `${npc.position.x}%`,
        top: `${npc.position.y}%`,
      }}
      onClick={handleClick}
    >
      {/* Signpost */}
      <div className={styles.signpost}>
        <div className={styles.signBoard}>
          <div className={styles.signName}>{npc.name}</div>
          <div className={styles.signTitle}>{npc.title}</div>
        </div>
        <div className={styles.signPole} />
      </div>

      {/* Interaction indicator */}
      {isNearby && !isTalking && (
        <div className={styles.interactHint}>TALK</div>
      )}

      {/* NPC Sprite */}
      <div className={styles.sprite}>
        <div
          className={styles.head}
          style={{ background: npc.spriteConfig.accentColor }}
        />

        {npc.spriteConfig.accessory === 'glasses' && (
          <div className={styles.glasses} style={{ borderColor: npc.spriteConfig.bodyColor }} />
        )}
        {npc.spriteConfig.accessory === 'labcoat' && (
          <div className={styles.labcoat} style={{ background: npc.spriteConfig.accentColor }} />
        )}
        {npc.spriteConfig.accessory === 'headset' && (
          <div className={styles.headset} style={{ background: npc.spriteConfig.bodyColor }} />
        )}
        {npc.spriteConfig.accessory === 'hat' && (
          <div className={styles.hat} style={{ background: npc.spriteConfig.bodyColor }} />
        )}
        {npc.spriteConfig.accessory === 'trenchcoat' && (
          <div className={styles.trenchcoat} style={{ background: npc.spriteConfig.bodyColor }} />
        )}
        {npc.spriteConfig.accessory === 'book' && (
          <div className={styles.book} style={{ background: npc.spriteConfig.accentColor }} />
        )}

        <div
          className={styles.body}
          style={{
            background: npc.spriteConfig.bodyColor,
            boxShadow: `0 0 8px ${npc.spriteConfig.bodyColor}30`,
          }}
        />

        <div className={styles.legs}>
          <div className={styles.leg} style={{ background: npc.spriteConfig.bodyColor }} />
          <div className={styles.leg} style={{ background: npc.spriteConfig.bodyColor }} />
        </div>
      </div>
    </div>
  );
}
