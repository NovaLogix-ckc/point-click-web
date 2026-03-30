export interface DialogueOption {
  label: string;
  nextNodeId: string;
  tone: 'curious' | 'sarcastic' | 'enthusiastic';
}

export interface DialogueNode {
  id: string;
  speaker: string;
  text: string;
  options: DialogueOption[];
  isTerminal?: boolean;
}

export interface DialogueTree {
  npcId: string;
  startNodeId: string;
  nodes: Record<string, DialogueNode>;
}
