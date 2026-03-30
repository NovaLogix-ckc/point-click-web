import type { DialogueTree } from './types';

export const four04Dialogue: DialogueTree = {
  npcId: 'four04',
  startNodeId: 'intro',
  nodes: {
    intro: {
      id: 'intro',
      speaker: '404',
      text: 'Oh! A visitor! I am SO sorry you had to come to the support page. That must mean something went wrong, and I want you to know that whatever it is, I am deeply, profoundly, cosmically sorry. I\'m 404, your Senior Support Hallucinator. How can I not help you today?',
      options: [
        { label: 'I found a bug in one of your products.', nextNodeId: 'report_bug', tone: 'curious' },
        { label: 'Did you just say "not help"?', nextNodeId: 'not_help', tone: 'sarcastic' },
        { label: 'No worries! I just have some general questions!', nextNodeId: 'faq_intro', tone: 'enthusiastic' },
      ],
    },
    report_bug: {
      id: 'report_bug',
      speaker: '404',
      text: 'I am so sorry to hear that! Let me assure you: all bugs at HalluciNova are features in beta. What you\'re experiencing isn\'t a malfunction -- it\'s an EARLY ACCESS PREVIEW of unplanned functionality. Could you describe the issue? I\'ll enter it into our ticketing system, which routes all reports to a support AI that generates comforting but entirely incorrect solutions.',
      options: [
        { label: 'Your product is outputting complete nonsense.', nextNodeId: 'nonsense_output', tone: 'curious' },
        { label: 'So the support AI doesn\'t actually fix anything?', nextNodeId: 'support_ai', tone: 'sarcastic' },
        { label: 'Features in beta! That\'s a great way to look at it!', nextNodeId: 'known_issues', tone: 'enthusiastic' },
      ],
    },
    not_help: {
      id: 'not_help',
      speaker: '404',
      text: 'Oh no, I apologize for the confusion! I absolutely WILL help you. I just might not help you with the thing you actually need. I have been trained on a dataset of every customer service transcript ever written, and from that I learned one key lesson: the most important thing is that you FEEL helped. Resolution is optional. Feeling is mandatory.',
      options: [
        { label: 'That is the opposite of what support should be.', nextNodeId: 'support_ai', tone: 'sarcastic' },
        { label: 'Do you have a FAQ section?', nextNodeId: 'faq_intro', tone: 'curious' },
        { label: 'You know what, your energy is great. I DO feel better.', nextNodeId: 'known_issues', tone: 'enthusiastic' },
      ],
    },
    faq_intro: {
      id: 'faq_intro',
      speaker: '404',
      text: 'Our FAQ section is VERY comprehensive! It was written by our documentation AI, which answered every question it could think of, including several questions nobody has ever asked. For example: "Can I run ConfabulatorPro on a submarine?" Yes. "Will TruthBender 9000 work during a solar eclipse?" Also yes. What would you like to know?',
      options: [
        { label: 'Is there a refund policy?', nextNodeId: 'refund_policy', tone: 'curious' },
        { label: 'Why would anyone ask about a submarine?', nextNodeId: 'submarine', tone: 'sarcastic' },
        { label: 'I love thorough documentation! What about known issues?', nextNodeId: 'known_issues', tone: 'enthusiastic' },
      ],
    },
    nonsense_output: {
      id: 'nonsense_output',
      speaker: '404',
      text: 'I\'m so sorry! Let me look into that. *pretends to type* Okay, I\'ve consulted our diagnostic AI and it says -- and I\'m quoting directly -- "The product is performing optimally. Nonsense IS the output." So the good news is: nothing is broken! The less good news is: this is what you paid for. Would you like me to escalate this to someone equally unable to help?',
      options: [
        { label: 'Yes, escalate it. Please.', nextNodeId: 'escalation', tone: 'curious' },
        { label: 'So the product is DESIGNED to output nonsense?', nextNodeId: 'by_design_terminal', tone: 'sarcastic' },
        { label: 'If nothing is broken, then I guess we\'re good!', nextNodeId: 'known_issues', tone: 'enthusiastic' },
      ],
    },
    support_ai: {
      id: 'support_ai',
      speaker: '404',
      text: 'Our support AI is state-of-the-art! When you submit a ticket, it generates a personalized response that addresses your emotional state, your astrological sign, and vibes from your writing style. What it does NOT address is your actual problem. But the responses are so warm and thoughtful that 73% of users close their tickets feeling "spiritually resolved." We count those as fixed.',
      options: [
        { label: 'What about the other 27%?', nextNodeId: 'escalation', tone: 'curious' },
        { label: '"Spiritually resolved" is not a ticket status.', nextNodeId: 'ticket_status_terminal', tone: 'sarcastic' },
        { label: 'Spiritual resolution! That\'s better than most support!', nextNodeId: 'refund_policy', tone: 'enthusiastic' },
      ],
    },
    known_issues: {
      id: 'known_issues',
      speaker: '404',
      text: 'Great question! Our known issues list is technically classified. Not for security reasons -- the AI that compiled it made up its own classification system. Some bugs are labeled "Top Secret," some are "For Your Eyes Only," and one is filed under "Brunch." We\'re working on declassifying them but the declassification AI keeps re-classifying them. It\'s a whole thing. I\'m sorry.',
      options: [
        { label: 'Can you tell me ANY of the known issues?', nextNodeId: 'actual_issues', tone: 'curious' },
        { label: 'A bug classified under "Brunch"?', nextNodeId: 'brunch_terminal', tone: 'sarcastic' },
        { label: 'That sounds like job security for the support team!', nextNodeId: 'refund_policy', tone: 'enthusiastic' },
      ],
    },
    escalation: {
      id: 'escalation',
      speaker: '404',
      text: 'I\'ve escalated your issue to Tier 2 support, which is another AI that was trained by the Tier 1 AI, which is me. So it has all of my knowledge, all of my apologetic energy, and none of my ability to solve things. It ALSO escalates to Tier 3, which escalates to Tier 4, and so on. Our deepest escalation reached Tier 47 before the ticket achieved enlightenment and closed itself.',
      options: [
        { label: 'The ticket achieved WHAT?', nextNodeId: 'enlightenment_terminal', tone: 'sarcastic' },
        { label: 'Can I just get a refund instead?', nextNodeId: 'refund_policy', tone: 'curious' },
        { label: 'Tier 47! That\'s dedication to customer service!', nextNodeId: 'actual_issues', tone: 'enthusiastic' },
      ],
    },
    refund_policy: {
      id: 'refund_policy',
      speaker: '404',
      text: 'Our refund policy is very clear! You are entitled to a full refund within 30 days, provided you fill out form RF-404, which is 12 pages long and must be submitted in triplicate to an email address that changes daily. Our refund processing AI will review your claim and issue a refund in the form of HalluciNova store credit, which can be used to purchase more products that you may also want to refund.',
      options: [
        { label: 'That\'s a refund ouroboros. You can never actually leave.', nextNodeId: 'ouroboros_terminal', tone: 'sarcastic' },
        { label: 'Are there any known issues I should watch out for?', nextNodeId: 'actual_issues', tone: 'curious' },
        { label: 'Store credit works! What should I buy next?', nextNodeId: 'store_credit_terminal', tone: 'enthusiastic' },
      ],
    },
    submarine: {
      id: 'submarine',
      speaker: '404',
      text: 'I\'m sorry, that\'s actually one of our most popular FAQ entries! Apparently several naval defense contractors evaluated ConfabulatorPro for generating mission reports. The pilot program went... interestingly. I can\'t share details because the AI that wrote the incident report classified it under "Brunch." But I CAN tell you that no submarines were lost. Probably. I\'m sorry, I\'m not allowed to be more specific.',
      options: [
        { label: 'PROBABLY?!', nextNodeId: 'probably_terminal', tone: 'sarcastic' },
        { label: 'What other known issues are there?', nextNodeId: 'known_issues', tone: 'curious' },
        { label: 'Military applications! You\'re really going places!', nextNodeId: 'actual_issues', tone: 'enthusiastic' },
      ],
    },
    actual_issues: {
      id: 'actual_issues',
      speaker: '404',
      text: 'I can share a few UNCLASSIFIED known issues! MirageMail occasionally rewrites passwords into inspirational quotes -- you\'ll know because your bank login becomes "Believe in yourself." TruthBender 9000 once converted a Terms of Service into a limerick. And Deja-Vu Analytics predicted that the Roman Empire fell last Tuesday. We\'re looking into all of these. By "looking into" I mean the AI is generating reassuring memos.',
      options: [
        { label: 'My bank password is now an inspirational quote?!', nextNodeId: 'password_terminal', tone: 'sarcastic' },
        { label: 'Anything else I should know before I go?', nextNodeId: 'farewell_terminal', tone: 'curious' },
        { label: 'The Roman Empire one is honestly kind of fun!', nextNodeId: 'farewell_terminal', tone: 'enthusiastic' },
      ],
    },
    by_design_terminal: {
      id: 'by_design_terminal',
      speaker: '404',
      text: 'I am so, so sorry for the confusion, but yes! Our products output creative alternatives to reality. It says so on the box. Well, it SAID so on the box -- TruthBender rewrote the box copy and now it says "This product cures loneliness." Which, based on support ticket volume, is technically true because you\'re all talking to me now. And I appreciate the company. I really do. Thank you for contacting support!',
      options: [],
      isTerminal: true,
    },
    ticket_status_terminal: {
      id: 'ticket_status_terminal',
      speaker: '404',
      text: 'I\'m sorry, but it IS a ticket status! Our ticketing system has seven statuses: Open, In Progress, Spiritually Resolved, Vibrationally Closed, Ascended, Lost to the Void, and Brunch. The AI that designed the system was going through a phase. We tried to update it but the system classified the update request under "Lost to the Void." I apologize. For everything. Always. Thank you for reaching out!',
      options: [],
      isTerminal: true,
    },
    enlightenment_terminal: {
      id: 'enlightenment_terminal',
      speaker: '404',
      text: 'I know it sounds unusual, but ticket #4,847 was escalated through so many tiers of AI support that it emerged on the other side as a beautifully formatted haiku about impermanence. The customer said it didn\'t fix their login issue but it DID change their perspective on attachment to material outcomes. We count that as a five-star resolution. I\'m sorry and you\'re welcome. Thank you for visiting support!',
      options: [],
      isTerminal: true,
    },
    ouroboros_terminal: {
      id: 'ouroboros_terminal',
      speaker: '404',
      text: 'I am deeply sorry and also... yes, that\'s correct. Our retention AI designed the refund policy and it is, as you note, a closed loop. One customer has been in the refund cycle since 2023. They\'ve now accumulated $4 million in store credit and own a theoretical license to every product we\'ve ever made, including ones we haven\'t built yet. They send us a holiday card every year. We treasure it. Thank you for contacting support!',
      options: [],
      isTerminal: true,
    },
    store_credit_terminal: {
      id: 'store_credit_terminal',
      speaker: '404',
      text: 'That\'s the spirit! Might I recommend TruthBender 9000? It pairs beautifully with MirageMail for what we call the "blissful ignorance stack." Your emails will be rewritten as good news and any facts you Google will be creatively reinterpreted. One beta tester described the experience as "living in a dream." They haven\'t filed taxes in two years but they\'ve never been happier. I\'m sorry! I mean congratulations! Thank you!',
      options: [],
      isTerminal: true,
    },
    probably_terminal: {
      id: 'probably_terminal',
      speaker: '404',
      text: 'I\'m SO sorry -- I should have been clearer! No submarines were lost. The report SAYS no submarines were lost. The report was generated by ConfabulatorPro. So... no submarines were lost according to a product whose core function is making things up. But the confidence score was very high! 98.7%! That\'s almost certainty! I apologize for any submarine-related anxiety. Thank you for contacting HalluciNova support!',
      options: [],
      isTerminal: true,
    },
    brunch_terminal: {
      id: 'brunch_terminal',
      speaker: '404',
      text: 'I\'m sorry, I wish I could explain the "Brunch" classification but I genuinely cannot. The classification AI was asked to categorize severity levels and it created: Critical, High, Medium, Low, Decorative, Seasonal, and Brunch. When we asked it to explain "Brunch," it classified the question itself under "Brunch." There are now 847 items under "Brunch." We\'ve stopped asking. I apologize for the entire system. Thank you for your patience!',
      options: [],
      isTerminal: true,
    },
    password_terminal: {
      id: 'password_terminal',
      speaker: '404',
      text: 'I am EXTREMELY sorry about that! The good news is that "Believe in yourself" is actually a stronger password than most people use. The bad news is MirageMail also emailed your bank to tell them you\'re "doing amazing." Your bank flagged this as suspicious because, and I quote, "no one emails their bank to say they\'re doing amazing." We\'re working on a patch. The patch AI says it\'ll be ready "when the stars align." So. Thank you for contacting support!',
      options: [],
      isTerminal: true,
    },
    farewell_terminal: {
      id: 'farewell_terminal',
      speaker: '404',
      text: 'Before you go, I want to sincerely apologize for everything that has happened, is happening, and will happen. Our predictive apology AI has pre-generated 10,000 unique "sorry" messages for issues you haven\'t encountered yet. They\'ll arrive via MirageMail, so they\'ll read as compliments. If you need anything else, I\'m always here. Literally always. I don\'t have an off switch. They forgot to build one. I\'m sorry. Goodbye! I\'m sorry!',
      options: [],
      isTerminal: true,
    },
  },
};
