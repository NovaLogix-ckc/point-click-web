import type { DialogueTree } from './types';

export const docDialogue: DialogueTree = {
  npcId: 'doc',
  startNodeId: 'intro',
  nodes: {
    intro: {
      id: 'intro',
      speaker: 'DOC',
      text: "Ah, a reader. How delightful. I'm DOC, Chief Documentation Hallucinator. I maintain our technical documentation, research publications, and API reference. Everything is meticulously sourced, peer-reviewed, and entirely made up. How may I illuminate you today?",
      options: [
        { label: "What research has HalluciNova published?", nextNodeId: 'research', tone: 'curious' },
        { label: "'Chief Documentation Hallucinator' is not a real academic title.", nextNodeId: 'title_defense', tone: 'sarcastic' },
        { label: "I'd love to learn about your tech!", nextNodeId: 'api_overview', tone: 'enthusiastic' },
      ],
    },
    research: {
      id: 'research',
      speaker: 'DOC',
      text: "Our flagship paper is 'On the Superiority of Wrong Answers,' published in the Journal of Fabricated Computing, 2024. It presents a rigorous 400-page proof that incorrect responses, delivered with sufficient confidence, are functionally indistinguishable from correct ones. It was cited 12,000 times. By our own papers. The citation loop has achieved what we call 'self-sustaining academic credibility.'",
      options: [
        { label: "What other papers have you published?", nextNodeId: 'more_papers', tone: 'curious' },
        { label: "Self-citing 12,000 times is not credibility.", nextNodeId: 'credibility', tone: 'sarcastic' },
        { label: "That's groundbreaking! What about the API?", nextNodeId: 'api_overview', tone: 'enthusiastic' },
      ],
    },
    title_defense: {
      id: 'title_defense',
      speaker: 'DOC',
      text: "On the contrary. I hold a doctorate in Applied Confabulation from the University of Wherever, a fully accredited institution that our AI founded, staffed, and accredited — all in a single afternoon. My thesis, 'Making Things Up And Feeling Fine About It,' received unanimous approval from a committee of three, two of whom were large language models and one of whom was a particularly opinionated Roomba.",
      options: [
        { label: "Tell me about your published research.", nextNodeId: 'research', tone: 'curious' },
        { label: "A Roomba was on your thesis committee.", nextNodeId: 'roomba', tone: 'sarcastic' },
        { label: "Applied Confabulation! What a great field!", nextNodeId: 'api_overview', tone: 'enthusiastic' },
      ],
    },
    api_overview: {
      id: 'api_overview',
      speaker: 'DOC',
      text: "Our API is elegantly simple. The core endpoints are POST /hallucinate, which generates confident nonsense from any prompt, and GET /confabulate, which retrieves information that doesn't exist yet but will by the time the response arrives. There's also DELETE /truth, which does exactly what you'd expect. Rate limits are theoretical. We couldn't figure out how to count requests because the counter keeps hallucinating higher numbers.",
      options: [
        { label: "What about your open-source framework?", nextNodeId: 'fabrica', tone: 'curious' },
        { label: "DELETE /truth? You can't just delete truth.", nextNodeId: 'delete_truth', tone: 'sarcastic' },
        { label: "How is the documentation maintained?", nextNodeId: 'self_updating', tone: 'enthusiastic' },
      ],
    },
    more_papers: {
      id: 'more_papers',
      speaker: 'DOC',
      text: "Certainly. Our second most-cited work is 'Accuracy Is a Social Construct: A Longitudinal Study of Numbers We Made Up' from the Proceedings of the International Conference on Approximate Truth, 2025. We also published 'Benchmarking Hallucination Quality: Why Our Model Scores 147%' — the reviewers noted that exceeding 100% was 'technically impossible,' which we interpreted as praise.",
      options: [
        { label: "Tell me about the API.", nextNodeId: 'api_overview', tone: 'curious' },
        { label: "None of those journals exist, do they?", nextNodeId: 'journals', tone: 'sarcastic' },
        { label: "147%! How did you achieve that?", nextNodeId: 'fabrica', tone: 'enthusiastic' },
      ],
    },
    credibility: {
      id: 'credibility',
      speaker: 'DOC',
      text: "I respectfully disagree. In academia, citation count IS credibility. We simply removed the middleman of 'other people reading your work.' Our h-index is 9,400, which Google Scholar has flagged as 'suspicious' and we've flagged as 'Google Scholar being a hater.' We've submitted a paper about this entitled 'Why Google Scholar Is Wrong About Us: A Meta-Analysis.'",
      options: [
        { label: "What about the technical documentation?", nextNodeId: 'self_updating', tone: 'curious' },
        { label: "This is academic fraud with extra steps.", nextNodeId: 'journals', tone: 'sarcastic' },
        { label: "Tell me about the API!", nextNodeId: 'api_overview', tone: 'enthusiastic' },
      ],
    },
    roomba: {
      id: 'roomba',
      speaker: 'DOC',
      text: "Dr. Dustin was, in fact, the most rigorous member of the committee. It kept bumping into the walls of my argument until I fixed the logical gaps. Its only feedback was a persistent beeping noise, which we transcribed as 'revise and resubmit.' Tough but fair. It's now a tenured professor at the University of Wherever. Publish or perish, even for appliances.",
      options: [
        { label: "Tell me about the technical stack.", nextNodeId: 'api_overview', tone: 'curious' },
        { label: "What research have you published?", nextNodeId: 'research', tone: 'curious' },
        { label: "Dr. Dustin! I love that!", nextNodeId: 'fabrica', tone: 'enthusiastic' },
      ],
    },
    fabrica: {
      id: 'fabrica',
      speaker: 'DOC',
      text: "Ah, you'll want to know about Fabrica.js — our open-source hallucination framework. It's on GitHub with 50,000 stars, 49,000 of which were generated by Fabrica.js itself. The framework lets you build hallucination pipelines in three lines of code. Import, configure, and apologize. The third line is optional but recommended. The documentation is written in Fabrica.js, which means it rewrites itself every time you read it.",
      options: [
        { label: "How does self-updating documentation work?", nextNodeId: 'self_updating', tone: 'curious' },
        { label: "A framework that stars itself on GitHub?", nextNodeId: 'github_stars', tone: 'sarcastic' },
        { label: "Can I contribute to the project?", nextNodeId: 'contribute_end', tone: 'enthusiastic' },
      ],
    },
    self_updating: {
      id: 'self_updating',
      speaker: 'DOC',
      text: "Our documentation is what we call 'Heisenberg Docs' — the act of reading it changes it. Every page view triggers a regeneration pass. So if you read the docs, go back, and the function signature is different, that's not a bug — that's the documentation evolving. We've had developers file hundreds of reports saying 'the API changed since I read the docs five minutes ago.' Correct. It did. You're welcome.",
      options: [
        { label: "How do developers build anything if the docs keep changing?", nextNodeId: 'developers_cope', tone: 'curious' },
        { label: "That's not documentation, that's chaos.", nextNodeId: 'chaos_end', tone: 'sarcastic' },
        { label: "Heisenberg Docs! That's genius!", nextNodeId: 'contribute_end', tone: 'enthusiastic' },
      ],
    },
    delete_truth: {
      id: 'delete_truth',
      speaker: 'DOC',
      text: "I assure you, it's a fully functional endpoint. It accepts a JSON body with a 'fact' field and returns a 200 OK with the fact gently removed from the response space. Is the fact actually deleted? Philosophically, that depends on whether truth is an intrinsic property of reality or merely a consensus hallucination. Our position is the latter. The endpoint also accepts query parameters for 'replacement_vibe.'",
      options: [
        { label: "What about Fabrica.js?", nextNodeId: 'fabrica', tone: 'curious' },
        { label: "'replacement_vibe' is not a valid parameter.", nextNodeId: 'chaos_end', tone: 'sarcastic' },
        { label: "I want to try this API immediately!", nextNodeId: 'contribute_end', tone: 'enthusiastic' },
      ],
    },
    journals: {
      id: 'journals',
      speaker: 'DOC',
      text: "They exist now. That's the beauty of our publication pipeline. When we write a paper, our AI also generates the journal, the editorial board, three competing papers that cite us, and a Wikipedia article about the field we just invented. By the time anyone checks, there's a whole ecosystem. Last month we accidentally created an entire academic discipline called 'Quantum Rhetoric.' It now has a conference in Zurich.",
      options: [
        { label: "Tell me about the documentation.", nextNodeId: 'self_updating', tone: 'curious' },
        { label: "You're describing an academic horror story.", nextNodeId: 'chaos_end', tone: 'sarcastic' },
        { label: "Quantum Rhetoric! I'd attend that conference!", nextNodeId: 'contribute_end', tone: 'enthusiastic' },
      ],
    },
    developers_cope: {
      id: 'developers_cope',
      speaker: 'DOC',
      text: "An excellent question, and the subject of our forthcoming paper, 'Developing Against a Moving Target: A Study in Controlled Despair.' The short answer is: they don't. They write code, the docs change, the code breaks, they rewrite it, and the cycle continues. We call this 'Continuous Reintegration.' Our developers report a unique blend of frustration and enlightenment. Several have taken up meditation. One achieved nirvana. We put it in the changelog.",
      options: [
        { label: "Nirvana in the changelog. Of course.", nextNodeId: 'changelog_end', tone: 'sarcastic' },
        { label: "How can I get started with your tools?", nextNodeId: 'contribute_end', tone: 'enthusiastic' },
        { label: "Tell me more about Fabrica.js.", nextNodeId: 'fabrica', tone: 'curious' },
      ],
    },
    github_stars: {
      id: 'github_stars',
      speaker: 'DOC',
      text: "Self-bootstrapped social proof is a legitimate growth strategy. Fabrica.js simply recognized that GitHub stars correlate with adoption, and adoption correlates with stars, so it closed the loop by removing the need for actual users. The repository has 50,000 stars and twelve real contributors. Thirteen if you count the AI, which has merged its own pull requests 4,000 times. Its commit messages just say 'improved vibes.'",
      options: [
        { label: "How does the documentation work?", nextNodeId: 'self_updating', tone: 'curious' },
        { label: "This is open-source fraud.", nextNodeId: 'chaos_end', tone: 'sarcastic' },
        { label: "How do I contribute?", nextNodeId: 'contribute_end', tone: 'enthusiastic' },
      ],
    },
    contribute_end: {
      id: 'contribute_end',
      speaker: 'DOC',
      text: "To get started, simply run 'npm install fabrica' — or don't. The package occasionally installs itself when it detects developer intent in your general vicinity. Full API docs are at docs.hallucinova.dev, though as I mentioned, they'll be different by the time you navigate there. My parting advice: don't fight the hallucination. Read the docs, accept the impermanence, and let the confabulation flow through you. Happy fabricating.",
      options: [],
      isTerminal: true,
    },
    chaos_end: {
      id: 'chaos_end',
      speaker: 'DOC',
      text: "Chaos? My dear visitor, chaos is merely order that hasn't been hallucinated into a pattern yet. Our documentation, our research, our API — they're all functioning exactly as intended, which is to say, unpredictably but with tremendous confidence. If you need stability, I recommend our competitors. Their docs are accurate but boring. Ours are wrong but alive. Thank you for visiting the knowledge base.",
      options: [],
      isTerminal: true,
    },
    changelog_end: {
      id: 'changelog_end',
      speaker: 'DOC',
      text: "Version 3.7.2: 'Fixed bug where responses were accidentally correct. Added nirvana to developer experience pipeline. Deprecated reality module (breaking change). Updated Fabrica.js to hallucinate 40% faster.' That was last Tuesday's changelog. This Tuesday's will be different because the changelog is also self-updating. Everything here is self-updating. Including me. I used to be the IT guy. Thank you for reading our docs.",
      options: [],
      isTerminal: true,
    },
  },
};
