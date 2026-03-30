import { useEffect, useRef } from 'react';
import { useGameStore } from '../store/gameStore';

const SPEED = 200; // pixels per second

export function useCharacterMovement() {
  const rafId = useRef<number>(0);
  const lastTime = useRef<number>(0);

  useEffect(() => {
    const animate = (now: number) => {
      const store = useGameStore.getState();
      const { characterPosition, characterTarget } = store;

      if (!characterTarget) {
        lastTime.current = 0;
        if (store.isWalking) {
          store.setIsWalking(false);
        }
        rafId.current = requestAnimationFrame(animate);
        return;
      }

      if (lastTime.current === 0) {
        lastTime.current = now;
      }

      const dt = (now - lastTime.current) / 1000;
      lastTime.current = now;

      const dx = characterTarget.x - characterPosition.x;
      const dy = characterTarget.y - characterPosition.y;
      const dist = Math.sqrt(dx * dx + dy * dy);

      if (dist < 5) {
        store.updateCharacterPosition(characterTarget);
        store.setCharacterTarget(null);
        store.setIsWalking(false);
        rafId.current = requestAnimationFrame(animate);
        return;
      }

      if (!store.isWalking) {
        store.setIsWalking(true);
      }

      if (dx !== 0) {
        store.setFacingDirection(dx > 0 ? 'right' : 'left');
      }

      const step = Math.min(SPEED * dt, dist);
      store.updateCharacterPosition({
        x: characterPosition.x + (dx / dist) * step,
        y: characterPosition.y + (dy / dist) * step,
      });

      // Update scene scroll
      const viewportWidth = window.innerWidth;
      const targetScroll = characterPosition.x - viewportWidth / 2;
      const maxScroll = 3400 - viewportWidth; // scene width - viewport
      store.setSceneScroll(Math.max(0, Math.min(targetScroll, maxScroll)));

      rafId.current = requestAnimationFrame(animate);
    };

    rafId.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafId.current);
  }, []);
}
