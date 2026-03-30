import type { DialogueTree } from './types';

export const patchesDialogue: DialogueTree = {
  npcId: 'patches',
  startNodeId: 'intro',
  nodes: {
    intro: {
      id: 'intro',
      speaker: 'PATCHES',
      text: "Oh! A visitor! Welcome to the Testimonials wing. I'm PATCHES, Customer Success Fabricator. That's my REAL title — I didn't make it up. Well, I did. That's literally my job. I fabricate success. Would you like to hear what our incredibly real customers have to say about us?",
      options: [
        { label: "Sure, what are customers saying?", nextNodeId: 'first_testimonial', tone: 'curious' },
        { label: '"Customer Success Fabricator" — so you admit it?', nextNodeId: 'admit', tone: 'sarcastic' },
        { label: "I love testimonials! Hit me with them!", nextNodeId: 'nps_score', tone: 'enthusiastic' },
      ],
    },
    first_testimonial: {
      id: 'first_testimonial',
      speaker: 'PATCHES',
      text: "Our top testimonial comes from a Fortune 500 company whose name I absolutely cannot disclose. Not for legal reasons — we just can't disclose it because we made them up. Their CTO, who we'll call 'Definitely A Real Person,' said: 'HalluciNova increased our productivity by 900%. We no longer need facts to make decisions, and Q4 has never been better.'",
      options: [
        { label: "Can I see any actual verified reviews?", nextNodeId: 'verified', tone: 'curious' },
        { label: "That quote sounds suspiciously like marketing copy.", nextNodeId: 'defensive', tone: 'sarcastic' },
        { label: "900%! What other clients do you have?", nextNodeId: 'hospital_client', tone: 'enthusiastic' },
      ],
    },
    admit: {
      id: 'admit',
      speaker: 'PATCHES',
      text: "Admit? I CELEBRATE it. Every company has a Customer Success team. We're just the only ones honest enough to put 'Fabricator' in the title. At least you know where you stand with us. Which is on a foundation of entirely generated praise. It's very comfortable down here. The reviews are warm.",
      options: [
        { label: "Just show me some testimonials.", nextNodeId: 'first_testimonial', tone: 'curious' },
        { label: "What's your NPS score?", nextNodeId: 'nps_score', tone: 'sarcastic' },
        { label: "I respect the honesty about the dishonesty!", nextNodeId: 'hospital_client', tone: 'enthusiastic' },
      ],
    },
    nps_score: {
      id: 'nps_score',
      speaker: 'PATCHES',
      text: "I'm THRILLED you asked! Our NPS score is 847 out of 10. Now, before you say 'that's not how NPS works' — we let our AI redesign the scoring system. It felt a 10-point scale was 'emotionally limiting.' Some customers rated us a 'blue.' One gave us 'the feeling you get when bread comes out of the oven.' We count those as promoters.",
      options: [
        { label: "Can I hear some customer stories?", nextNodeId: 'first_testimonial', tone: 'curious' },
        { label: "That is absolutely not how metrics work.", nextNodeId: 'defensive', tone: 'sarcastic' },
        { label: "847! That must be a record!", nextNodeId: 'hospital_client', tone: 'enthusiastic' },
      ],
    },
    hospital_client: {
      id: 'hospital_client',
      speaker: 'PATCHES',
      text: "One of our proudest case studies! St. Nowhere's General Hospital uses our MirageMail product so that patients only receive good news. Lab results? Always perfect. Appointment reminders? Replaced with compliments. A patient came in with a broken arm and received an email saying 'Congratulations! Your bones have never been stronger.' He was so inspired he tried to arm-wrestle his doctor.",
      options: [
        { label: "Did he win the arm-wrestle?", nextNodeId: 'arm_wrestle', tone: 'curious' },
        { label: "That sounds like a massive liability.", nextNodeId: 'liability', tone: 'sarcastic' },
        { label: "Tell me about more clients!", nextNodeId: 'government_client', tone: 'enthusiastic' },
      ],
    },
    defensive: {
      id: 'defensive',
      speaker: 'PATCHES',
      text: "Excuse me? Are you questioning the AUTHENTICITY of our customer feedback? I'll have you know every single testimonial was written by a real human — well, a real instance of a model that was trained on real humans, which is basically the same thing. You know what, let me pull up the case studies. The FACTS will speak for themselves. The fabricated facts.",
      options: [
        { label: "Fine, show me the case studies.", nextNodeId: 'hospital_client', tone: 'curious' },
        { label: "You just said 'fabricated facts' out loud.", nextNodeId: 'fourth_wall', tone: 'sarcastic' },
        { label: "I believe you! Tell me everything!", nextNodeId: 'government_client', tone: 'enthusiastic' },
      ],
    },
    government_client: {
      id: 'government_client',
      speaker: 'PATCHES',
      text: "Our crown jewel: a government agency — which one? That's classified, and also fictional — uses TruthBender for 'public relations.' Before HalluciNova, they had to spend weeks crafting careful statements. Now TruthBender generates press releases so creatively worded that journalists just give up trying to fact-check them. One reporter said, and I quote, 'I don't even know what's real anymore.' We put that on a coffee mug.",
      options: [
        { label: "Do you have any testimonials from real, named humans?", nextNodeId: 'real_humans', tone: 'curious' },
        { label: "You're describing propaganda.", nextNodeId: 'propaganda_end', tone: 'sarcastic' },
        { label: "I want that coffee mug! Any more stories?", nextNodeId: 'verified', tone: 'enthusiastic' },
      ],
    },
    verified: {
      id: 'verified',
      speaker: 'PATCHES',
      text: "Verified reviews? Of course! We use a proprietary verification system called TrustForge. It checks whether the reviewer exists, and if they don't, it creates them. So technically, by the time you read the review, the person IS real. We once verified a testimonial from a golden retriever named Captain Business. Lovely review. Five stars. Mentioned treats only once.",
      options: [
        { label: "What did Captain Business say, exactly?", nextNodeId: 'captain_business_end', tone: 'curious' },
        { label: "You're generating fake people to write fake reviews.", nextNodeId: 'fourth_wall', tone: 'sarcastic' },
        { label: "TrustForge! What a great name for that!", nextNodeId: 'government_client', tone: 'enthusiastic' },
      ],
    },
    fourth_wall: {
      id: 'fourth_wall',
      speaker: 'PATCHES',
      text: "Okay, look. Between you and me — and I mean this sincerely, one character on a fictional website to a real person reading it — ALL testimonials on ALL websites are a little made up. We're just the only company brave enough to build the fabrication directly into the product. We're not the villains here. We're the future. Also, you're clicking through a dialogue tree right now, so maybe don't throw stones about 'real.'",
      options: [
        { label: "Did you just break the fourth wall?", nextNodeId: 'fourth_wall_end', tone: 'curious' },
        { label: "Fair point, honestly.", nextNodeId: 'fair_point_end', tone: 'sarcastic' },
        { label: "You make a compelling argument!", nextNodeId: 'fair_point_end', tone: 'enthusiastic' },
      ],
    },
    arm_wrestle: {
      id: 'arm_wrestle',
      speaker: 'PATCHES',
      text: "He did not. But MirageMail sent him a follow-up email congratulating him on his 'decisive victory' and a calendar invite for his championship title defense. The doctor played along. The whole ward applauded. Our case study says patient satisfaction went up 300%. The hospital neither confirmed nor denied this because, again, we made the hospital up.",
      options: [
        { label: "Tell me about other clients.", nextNodeId: 'government_client', tone: 'curious' },
        { label: "This is the most absurd thing I've ever heard.", nextNodeId: 'fourth_wall', tone: 'sarcastic' },
        { label: "I love this company. Any more stories?", nextNodeId: 'verified', tone: 'enthusiastic' },
      ],
    },
    real_humans: {
      id: 'real_humans',
      speaker: 'PATCHES',
      text: "Real named humans? Absolutely! Here's one from... *shuffles papers* ...John... Business... man. Of Business Corp. He says: 'I am a real human customer and I enjoy HalluciNova products with my human hands.' You know what? I'm sensing some skepticism, and I want you to know — at HalluciNova, we treat skepticism as a feature request.",
      options: [
        { label: "John Businessman. From Business Corp.", nextNodeId: 'fourth_wall', tone: 'sarcastic' },
        { label: "How do you handle skeptical customers?", nextNodeId: 'skeptic_end', tone: 'curious' },
        { label: "He sounds like a satisfied customer to me!", nextNodeId: 'fair_point_end', tone: 'enthusiastic' },
      ],
    },
    liability: {
      id: 'liability',
      speaker: 'PATCHES',
      text: "Liability is such a strong word. We prefer 'creative healthcare communication.' Besides, the hospital's legal team sent us a cease-and-desist, but we ran it through TruthBender and it came back as a thank-you note and a renewal contract. Problem solved. That's customer success, baby.",
      options: [
        { label: "Tell me about other clients.", nextNodeId: 'government_client', tone: 'curious' },
        { label: "That is NOT how contracts work.", nextNodeId: 'fourth_wall', tone: 'sarcastic' },
        { label: "Now THAT'S problem-solving!", nextNodeId: 'verified', tone: 'enthusiastic' },
      ],
    },
    captain_business_end: {
      id: 'captain_business_end',
      speaker: 'PATCHES',
      text: "Captain Business wrote, and I quote: 'Woof woof. Five stars. HalluciNova helped my small business scale to seven figures. Also I would like a treat.' Verified buyer. Verified good boy. His review has been cited in our investor deck and received a standing ovation at our all-hands. Thanks for visiting the Testimonials section!",
      options: [],
      isTerminal: true,
    },
    fourth_wall_end: {
      id: 'fourth_wall_end',
      speaker: 'PATCHES',
      text: "Did I break it? Or was it already broken when you got here? This is a website disguised as a point-and-click game about a fake AI company. We're at, like, wall number seven at this point. Anyway, thanks for reading our testimonials! They were all true. Emotionally. Please tell your friends — especially the ones we haven't generated yet.",
      options: [],
      isTerminal: true,
    },
    fair_point_end: {
      id: 'fair_point_end',
      speaker: 'PATCHES',
      text: "See? This is why you'd make a great testimonial. I mean customer. I mean — look, if you'd like to leave a review, our TrustForge system will enhance it, optimize it, and publish it before you even finish typing. Your five-star review is already live. Don't bother looking for it. Just trust that it's out there, resonating. Thanks for stopping by!",
      options: [],
      isTerminal: true,
    },
    propaganda_end: {
      id: 'propaganda_end',
      speaker: 'PATCHES',
      text: "Propaganda is such an ugly word. We prefer 'narrative infrastructure.' Or 'vibe-based communications.' Look, every PR team bends the truth — we just automated it and added a subscription model. $299/month for the Delusion Tier. $899 for Enterprise Unreality. Thanks for visiting Testimonials! Your exit survey has already been filled out. You gave us five stars. Very kind of you.",
      options: [],
      isTerminal: true,
    },
    skeptic_end: {
      id: 'skeptic_end',
      speaker: 'PATCHES',
      text: "When a customer expresses doubt, our AI generates seventeen personalized testimonials from people in their exact industry, zip code, and astrological sign until the doubt goes away. It's like gaslighting, but wholesome. We call it 'confidence nurturing.' Our case study on it won an award. We gave ourselves the award. Thanks for stopping by!",
      options: [],
      isTerminal: true,
    },
  },
};
