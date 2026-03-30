import type { DialogueTree } from './types';

export const sargeDialogue: DialogueTree = {
  npcId: 'sarge',
  startNodeId: 'intro',
  nodes: {
    intro: {
      id: 'intro',
      speaker: 'SARGE',
      text: "ATTENTION! You've entered the Careers zone. I'm SARGE, Head of Talent Acquisition — self-appointed, because HR is just a hallucination we haven't shipped yet. We have TWELVE urgent positions and they were all due yesterday. Are you here to enlist?",
      options: [
        { label: "What positions are open?", nextNodeId: 'positions', tone: 'curious' },
        { label: "Did you just say 'enlist'?", nextNodeId: 'enlist_clarify', tone: 'sarcastic' },
        { label: "I'm ready to join the revolution!", nextNodeId: 'enthusiasm_welcome', tone: 'enthusiastic' },
      ],
    },
    positions: {
      id: 'positions',
      speaker: 'SARGE',
      text: "We're hiring across the board! Top priority: Senior Hallucination Architect — you'll design systems that generate answers so confident, even the system believes them. We also need a VP of Making Things Up, reporting directly to our CEO, who may or may not exist. And a Junior Reality Distortion Specialist for the grunt work of bending truth at scale.",
      options: [
        { label: "Tell me about the Hallucination Architect role.", nextNodeId: 'architect_role', tone: 'curious' },
        { label: "VP of Making Things Up? That's a real title?", nextNodeId: 'vp_title', tone: 'sarcastic' },
        { label: "What about benefits?", nextNodeId: 'benefits', tone: 'enthusiastic' },
      ],
    },
    enlist_clarify: {
      id: 'enlist_clarify',
      speaker: 'SARGE',
      text: "Listen, at HalluciNova we don't 'hire.' We DEPLOY human capital into the hallucination theater. Every employee is a soldier in the war against boring, factual responses. Our attrition rate is zero percent — mostly because our HR system hallucinates everyone as still employed.",
      options: [
        { label: "That sounds... legally questionable.", nextNodeId: 'legal', tone: 'sarcastic' },
        { label: "What positions are available?", nextNodeId: 'positions', tone: 'curious' },
        { label: "Sign me up!", nextNodeId: 'enthusiasm_welcome', tone: 'enthusiastic' },
      ],
    },
    enthusiasm_welcome: {
      id: 'enthusiasm_welcome',
      speaker: 'SARGE',
      text: "THAT'S the spirit! I can already see you in our org chart — which reshuffles itself every 45 minutes because the AI that manages it keeps having 'creative disagreements' with reality. Let me tell you about the perks that'll seal the deal.",
      options: [
        { label: "Tell me about the benefits!", nextNodeId: 'benefits', tone: 'enthusiastic' },
        { label: "What's the company culture like?", nextNodeId: 'culture', tone: 'curious' },
        { label: "How often does the org chart change, exactly?", nextNodeId: 'org_chart', tone: 'sarcastic' },
      ],
    },
    architect_role: {
      id: 'architect_role',
      speaker: 'SARGE',
      text: "The Senior Hallucination Architect is our crown jewel role. You'll lead a team of nine — well, three real people and six the AI insists are on payroll. Your job is to push our models past the boundary of 'plausible' into 'magnificently wrong.' Requirements: 5+ years experience in a field we just invented last Tuesday. Salary: competitive. And by competitive, I mean it competes with your will to ask follow-up questions.",
      options: [
        { label: "What about the other roles?", nextNodeId: 'positions', tone: 'curious' },
        { label: "What are the benefits like?", nextNodeId: 'benefits', tone: 'enthusiastic' },
        { label: "Five years in a field invented last Tuesday?", nextNodeId: 'requirements_joke', tone: 'sarcastic' },
      ],
    },
    vp_title: {
      id: 'vp_title',
      speaker: 'SARGE',
      text: "It's our MOST real title. The VP of Making Things Up oversees product narratives, investor storytelling, and what we call 'proactive truth generation.' Last quarter they convinced three venture capitalists that we'd cured gravity. We got $40 million in funding before anyone thought to drop a pen.",
      options: [
        { label: "Tell me about the benefits here.", nextNodeId: 'benefits', tone: 'curious' },
        { label: "What's the company culture like?", nextNodeId: 'culture', tone: 'enthusiastic' },
        { label: "Did the pen... fall?", nextNodeId: 'pen_fall', tone: 'sarcastic' },
      ],
    },
    benefits: {
      id: 'benefits',
      speaker: 'SARGE',
      text: "Benefits? We've got the BEST benefits. Unlimited PTO — our AI generated that policy and we're legally unable to un-generate it, so technically it's real. Free lunch every day — our AI assistant orders it, though delivery has been 'pending' since March 2024. Stock options paid in HalluciCoin, our proprietary cryptocurrency that exists on a blockchain only our models can see. And full dental, provided by an AI dentist who just tells you your teeth are perfect.",
      options: [
        { label: "Has anyone actually used the PTO?", nextNodeId: 'pto_detail', tone: 'curious' },
        { label: "A blockchain only AI can see. Sure.", nextNodeId: 'halluci_coin', tone: 'sarcastic' },
        { label: "I've heard enough — how do I apply?", nextNodeId: 'apply', tone: 'enthusiastic' },
      ],
    },
    culture: {
      id: 'culture',
      speaker: 'SARGE',
      text: "Our culture is built on three pillars: Confidence, Creativity, and the Complete Absence of Fact-Checking. Every Friday is 'Fabrication Friday' where teams compete to generate the most believable nonsense. Last week, someone convinced the coffee machine it was a printer. It printed a latte. We're still not sure how.",
      options: [
        { label: "That's incredible. What are the benefits?", nextNodeId: 'benefits', tone: 'enthusiastic' },
        { label: "How do I apply?", nextNodeId: 'apply', tone: 'enthusiastic' },
        { label: "Did anyone drink the printed latte?", nextNodeId: 'latte_end', tone: 'curious' },
      ],
    },
    legal: {
      id: 'legal',
      speaker: 'SARGE',
      text: "Our legal department is fully AI-powered! It hallucinates case law so convincing that two actual judges have cited it. We consider that a product testimonial. So to answer your question: everything here is legal, according to laws that may or may not exist yet.",
      options: [
        { label: "Just show me the open roles.", nextNodeId: 'positions', tone: 'curious' },
        { label: "How do I apply before someone stops you?", nextNodeId: 'apply', tone: 'enthusiastic' },
        { label: "I need to leave.", nextNodeId: 'leave_end', tone: 'sarcastic' },
      ],
    },
    org_chart: {
      id: 'org_chart',
      speaker: 'SARGE',
      text: "Every 45 minutes on the dot. Sometimes you're in Engineering, sometimes you're CEO for eleven minutes. Last Thursday, our intern became CTO, approved a $2 million infrastructure spend, and was reassigned to janitor before anyone could revoke his access. The infrastructure was excellent, though.",
      options: [
        { label: "Tell me about benefits.", nextNodeId: 'benefits', tone: 'curious' },
        { label: "I want to apply!", nextNodeId: 'apply', tone: 'enthusiastic' },
        { label: "I think I've seen enough.", nextNodeId: 'leave_end', tone: 'sarcastic' },
      ],
    },
    requirements_joke: {
      id: 'requirements_joke',
      speaker: 'SARGE',
      text: "Look, we wrote the job description with our own AI. It also requires fluency in three programming languages that don't compile and a PhD from a university that's still 'loading.' But between you and me, if you can fog a mirror and tolerate ambiguity at a cosmic scale, you're overqualified.",
      options: [
        { label: "Alright, how do I apply?", nextNodeId: 'apply', tone: 'enthusiastic' },
        { label: "What benefits do you offer?", nextNodeId: 'benefits', tone: 'curious' },
        { label: "I think I'll pass.", nextNodeId: 'leave_end', tone: 'sarcastic' },
      ],
    },
    pen_fall: {
      id: 'pen_fall',
      speaker: 'SARGE',
      text: "We... don't talk about the pen. The important thing is the check cleared before gravity resumed normal operations. That's what we call 'strategic timing.' Anyway — want to hear about benefits, or are you ready to submit your application?",
      options: [
        { label: "Benefits, please.", nextNodeId: 'benefits', tone: 'curious' },
        { label: "I'm ready to apply!", nextNodeId: 'apply', tone: 'enthusiastic' },
        { label: "I should go.", nextNodeId: 'leave_end', tone: 'sarcastic' },
      ],
    },
    pto_detail: {
      id: 'pto_detail',
      speaker: 'SARGE',
      text: "Technically, everyone is ALWAYS on PTO because the system can't tell the difference between 'at work' and 'on vacation.' Our productivity metrics have never been higher. Or lower. The dashboard hallucinates a different number every time you refresh. Either way — we're crushing it.",
      options: [
        { label: "How do I apply?", nextNodeId: 'apply', tone: 'enthusiastic' },
        { label: "I've heard enough, thanks.", nextNodeId: 'leave_end', tone: 'sarcastic' },
        { label: "Tell me about the culture.", nextNodeId: 'culture', tone: 'curious' },
      ],
    },
    halluci_coin: {
      id: 'halluci_coin',
      speaker: 'SARGE',
      text: "HalluciCoin is up 4,000% this quarter! Or down 4,000%. The exchange rate depends on which version of reality the model is running. One employee bought a house with it. The house was also hallucinated, but she says the imaginary square footage is very generous.",
      options: [
        { label: "I want in. How do I apply?", nextNodeId: 'apply', tone: 'enthusiastic' },
        { label: "Tell me about company culture.", nextNodeId: 'culture', tone: 'curious' },
        { label: "This is a fever dream. I'm out.", nextNodeId: 'leave_end', tone: 'sarcastic' },
      ],
    },
    apply: {
      id: 'apply',
      speaker: 'SARGE',
      text: "Outstanding, recruit! Just submit your resume to careers@hallucinova.ai. Our AI will review it, hallucinate an interview that already happened, and send you an offer letter for a role we haven't invented yet. Typical response time is negative three business days — you may have already been hired. Check your spam folder for a welcome email from the future. DISMISSED!",
      options: [],
      isTerminal: true,
    },
    leave_end: {
      id: 'leave_end',
      speaker: 'SARGE',
      text: "Fine, walk away! But know this — our AI has already generated a version of you that accepted the offer. Hallucinated-You starts Monday and is very excited about the dental plan. If you change your mind, you know where to find me. I'll be here. Pacing. Urgently.",
      options: [],
      isTerminal: true,
    },
    latte_end: {
      id: 'latte_end',
      speaker: 'SARGE',
      text: "Dave from Engineering did. He said it tasted like toner and existential dread, which, honestly, is on-brand for our coffee here anyway. He gave it 5 stars on our internal review system. The review system then hallucinated 847 additional 5-star reviews. We put it on the careers page. Welcome to HalluciNova culture.",
      options: [],
      isTerminal: true,
    },
  },
};
