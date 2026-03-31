import { useGameStore } from '../../store/gameStore';
import { useIsMobile } from '../../hooks/useIsMobile';
import type { NPCDefinition } from '../../data/npcs';
import styles from './NPC.module.css';

interface NPCProps {
  npc: NPCDefinition;
}

export function NPC({ npc }: NPCProps) {
  const nearbyNPCId = useGameStore((s) => s.nearbyNPCId);
  const startDialogue = useGameStore((s) => s.startDialogue);
  const activeNPCId = useGameStore((s) => s.activeNPCId);
  const isMobile = useIsMobile();
  const isNearby = nearbyNPCId === npc.id;
  const isTalking = activeNPCId === npc.id;
  const pos = isMobile ? npc.mobilePosition : npc.position;

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
        left: `${pos.x}%`,
        top: `${pos.y}%`,
      }}
      onClick={handleClick}
    >
      {/* Interaction indicator */}
      {isNearby && !isTalking && (
        <div className={styles.interactHint}>TALK</div>
      )}

      <div className={styles.layout}>
        {/* Robot Sprite */}
        <div className={styles.sprite}>
          {/* Antenna */}
          <div className={styles.antenna}>
            <div className={styles.antennaTip} />
          </div>
          {/* Head - angular robot */}
          <div className={styles.head} style={{ borderColor: `${npc.spriteConfig.bodyColor}60` }}>
            {/* Evil eyes */}
            <div className={styles.eyes}>
              <div className={styles.eye} style={{ background: npc.spriteConfig.bodyColor, boxShadow: `0 0 6px ${npc.spriteConfig.bodyColor}` }} />
              <div className={styles.eye} style={{ background: npc.spriteConfig.bodyColor, boxShadow: `0 0 6px ${npc.spriteConfig.bodyColor}` }} />
            </div>
            {/* Mouth slit */}
            <div className={styles.mouth} />
          </div>
          {/* Neck */}
          <div className={styles.neck} />
          {/* Body - boxy chassis */}
          <div className={styles.body} style={{ borderColor: `${npc.spriteConfig.bodyColor}40` }}>
            <div className={styles.chestLight} style={{ background: npc.spriteConfig.bodyColor, boxShadow: `0 0 8px ${npc.spriteConfig.bodyColor}60` }} />
            <div className={styles.chestVents} />
          </div>
          {/* Arms */}
          <div className={styles.arms}>
            <div className={styles.arm} style={{ borderColor: `${npc.spriteConfig.bodyColor}30` }} />
            <div className={styles.arm} style={{ borderColor: `${npc.spriteConfig.bodyColor}30` }} />
          </div>
          {/* Legs - mechanical */}
          <div className={styles.legs}>
            <div className={styles.leg} style={{ borderColor: `${npc.spriteConfig.bodyColor}30` }} />
            <div className={styles.leg} style={{ borderColor: `${npc.spriteConfig.bodyColor}30` }} />
          </div>
        </div>

        {/* Signpost to the right */}
        <div className={styles.signpost}>
          <div className={styles.signPole} />
          <div className={styles.signBoard}>
            <div className={styles.signName}>{npc.name}</div>
            <div className={styles.signTitle}>{npc.title}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
