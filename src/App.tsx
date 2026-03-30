import { HUD } from './components/HUD/HUD';
import { Scene } from './components/Scene/Scene';
import { DialogueBox } from './components/Dialogue/DialogueBox';
import { ScanlineOverlay } from './components/ScanlineOverlay/ScanlineOverlay';
import { useCharacterMovement } from './hooks/useCharacterMovement';
import { useNPCProximity } from './hooks/useNPCProximity';
import { useDialogue } from './hooks/useDialogue';

function App() {
  useCharacterMovement();
  useNPCProximity();
  useDialogue();

  return (
    <>
      <HUD>
        <Scene />
        <DialogueBox />
      </HUD>
      <ScanlineOverlay />
    </>
  );
}

export default App;
