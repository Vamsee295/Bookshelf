// ============================================================
// September 2026 — Full Editorial Book Data (Batch 1)
// All strings use ASCII-safe content — emojis stored as codepoints
// ============================================================
import { BookDetails } from './types';

// Helper to return emoji safely without encoding issues in the build system
const e = (codepoint: number) => String.fromCodePoint(codepoint);

export const september2026Books: BookDetails[] = [
  // ─── 1. MAZYWOOD ──────────────────────────────────────────
  {
    slug: 'mazywood',
    id: 'mazywood',
    title: 'Mazywood',
    author: 'Tananarive Due',
    month: 'September 2026',
    cover: '/books/mazywood.webp',
    genres: [
      { label: 'Historical', bg: '#ff9d00', color: '#000' },
      { label: 'Horror', bg: '#1a1a1a', color: '#fff' },
    ],
    badges: [
      { label: 'Repeat Aardvark Author', icon: e(0x1F4D5), type: 'author' },
      { label: 'Dual timeline', icon: e(0x1F552), type: 'feature' },
      { label: 'Rising stars levels', icon: e(0x1F4CA), type: 'style' },
      { label: 'Old Hollywood', icon: e(0x1F3AC), type: 'setting' },
    ],
    theme: {
      heroBackground: 'linear-gradient(160deg, #f5c98a 0%, #f0b26e 40%, #e89a55 100%)',
      accentColor: '#ff9d00',
      coverShadow: '0 24px 60px rgba(0,0,0,0.35)',
      tasteBg: 'linear-gradient(160deg, #f6c98a 0%, #f0b46b 100%)',
    },
    description:
      'A literary thriller from the award-winning author of The Reformatory, following the grandson of a famous Black actress who returns to a generations-old California mountains cabin retreat in the Hollywood hills — and must encounter the legacy of her reign in Old Hollywood.',
    editorialSections: [
      {
        heading: 'The Premise',
        body: 'When Marcus Mazy inherits his grandmother\'s legendary mountain estate — called Mazywood — he expects nothing more than property paperwork and old memories. What he finds instead is a house still alive with her secrets: her earliest horror films, the people she loved and left behind, and something that never left the property at all. Due masterfully weaves 1940s Hollywood and the present day into a tale where stardom and survival are inseparable.',
      },
      {
        heading: 'Why It Works',
        body: 'Tananarive Due brings the full weight of her horror lineage to this novel — equal parts gothic atmosphere and social critique. The house at Mazywood is as much a character as the people who inhabit it, and every room holds a different era. The dual-timeline structure never feels gimmicky; instead it builds pressure the way a great suspense film does, tightening until the two threads collide in the final act.',
      },
    ],
    reviews: [
      {
        type: 'editorial',
        source: 'Aardvark Editorial',
        text: 'Due crafts a house that breathes and remembers — Mazywood is both a deeply personal character study and a ferociously plotted horror novel. Impossible to put down.',
        bg: '#fff7d6',
        textColor: '#2a2a2a',
      },
      {
        type: 'editorial',
        source: 'Aardvark Pick Reasoning',
        text: 'Old Hollywood horror meets contemporary family reckoning. This is the kind of book that makes you rearrange your weekend plans.',
        bg: '#e8e0ff',
        textColor: '#2a2a2a',
      },
      {
        type: 'editorial',
        source: 'Member Early Access',
        text: 'Due doesn\'t waste a single scene. By the time the dual timelines finally converge, you\'re so deep in the house you almost forget you\'re reading.',
        bg: '#d4f0ee',
        textColor: '#2a2a2a',
      },
    ],
    excerpt:
      'The estate sat at the end of a long private road lined with pale eucalyptus. Marcus had not been to Mazywood since he was eight years old, and in memory it had seemed enormous — a presence rather than a place. Now, stepping out of the rental car into the dry mountain air, it still did. The main house faced west, its windows catching the last of the afternoon light so that it appeared, for just a moment, to glow from within. He stood still and watched it until the light shifted. The feeling did not leave.\n\nHis grandmother had told him once that some places remember who lived in them. At the time he had thought she was speaking metaphorically. He had not been sure of that since.',
    notes: {
      whyWeChoseIt:
        'Tananarive Due is one of the most important voices in American horror, and Mazywood represents her most ambitious novel yet — a multi-generational story set against the backdrop of Old Hollywood\'s racial exclusions and the landscape of California that still holds those stories. We chose it because it earns every page of its ambition.',
      contentWarnings:
        'Contains depictions of racial violence, historical Jim Crow-era discrimination, supernatural horror elements, and brief depictions of grief and loss. Some readers may find the historical sections emotionally heavy.',
    },
    similarTitles: ['crone', 'blacktail', 'fruit-fly'],
  },

  // ─── 2. CRONE ─────────────────────────────────────────────
  {
    slug: 'crone',
    id: 'crone',
    title: 'Crone',
    author: 'Keith Rosson',
    month: 'September 2026',
    cover: '/books/crone.webp',
    genres: [
      { label: 'Horror', bg: '#1a1a1a', color: '#fff' },
      { label: 'Folk Horror', bg: '#3d5c2a', color: '#fff' },
    ],
    badges: [
      { label: 'Folk horror vibes', icon: e(0x1F33F), type: 'mood' },
      { label: 'Rural dread', icon: e(0x1F3DA), type: 'setting' },
      { label: 'Monster mythology', icon: e(0x1F441), type: 'feature' },
      { label: 'Fast-paced', icon: e(0x26A1), type: 'style' },
    ],
    theme: {
      heroBackground: 'linear-gradient(160deg, #4a7a2e 0%, #2e5c1a 50%, #1e3d10 100%)',
      accentColor: '#6abf4c',
      coverShadow: '0 24px 60px rgba(0,0,0,0.45)',
      tasteBg: 'linear-gradient(160deg, #3a6626 0%, #28501a 100%)',
    },
    description:
      'When people start disappearing from a small Oregon logging town, the locals blame the usual suspects — drugs, the economy, bad luck. But two estranged siblings returning home for their mother\'s funeral begin to sense something far older and stranger in the forests that ring the valley. Keith Rosson delivers a relentlessly frightening folk horror novel rooted in landscape, grief, and the terrible persistence of myth.',
    editorialSections: [
      {
        heading: 'The Landscape as Antagonist',
        body: 'Rosson\'s Oregon is not a backdrop — it is the story. The forests around the town of Dalton have a history that the locals have either forgotten or chosen not to speak of, and Crone weaponises that forgetting. Every clear-cut hillside and abandoned mill road carries weight here. Rosson writes landscape the way the best horror writers write silence: as something with mass and intention.',
      },
      {
        heading: 'A Mythology Earned',
        body: 'What makes Crone stand out in the crowded folk-horror field is that Rosson never reveals too much. The monster — if that\'s even the right word — has a logic rooted in regional lore, but the novel trusts readers to feel its edges rather than see it whole. The siblings\' fractured relationship gives the horror somewhere to land, and the book\'s momentum is relentless once it gets going.',
      },
    ],
    reviews: [
      {
        type: 'editorial',
        source: 'Aardvark Editorial',
        text: 'Rosson writes the Pacific Northwest like he was born afraid of it. Crone is the kind of horror novel that makes you check your locks — not because of any jump scare, but because of accumulation.',
        bg: '#d8f0d0',
        textColor: '#1a2a1a',
      },
      {
        type: 'editorial',
        source: 'Aardvark Pick Reasoning',
        text: 'Grief and folk horror rarely intertwine this effectively. The sibling dynamic gives the scares real emotional stakes.',
        bg: '#ffe8c4',
        textColor: '#2a2a2a',
      },
      {
        type: 'editorial',
        source: 'Member Preview',
        text: 'I read the last 200 pages in a single sitting. Couldn\'t stop. The end is exactly right in the most disturbing possible way.',
        bg: '#e0e8ff',
        textColor: '#2a2a2a',
      },
    ],
    excerpt:
      'The road into Dalton was the same as she remembered it, which was to say it looked like a road that had given up trying. Kelsey drove with the window down because the heater kept cutting out, and the smell of the forest came in — wet bark, pine resin, the particular cold that had no smell of its own but made itself known anyway.\n\n"It\'s smaller," Danny said from the passenger seat, meaning the town, which wasn\'t visible yet but was about to be.\n\n"It always was," she said. "We just got bigger."\n\nBut even as she said it she wasn\'t sure she believed it. The trees were bigger. The dark between them seemed wider than she remembered.',
    notes: {
      whyWeChoseIt:
        'Crone is exactly the kind of novel that Aardvark was built to champion — a deeply crafted, genuinely frightening horror story set against a specific and lovingly rendered American landscape. Rosson is one of the most underrated writers working in genre fiction today, and this is the book that should change that.',
      contentWarnings:
        'Contains graphic depictions of violence, animal death, themes of addiction and estrangement, and sustained supernatural horror. Some scenes may be distressing to readers sensitive to family trauma.',
    },
    similarTitles: ['mazywood', 'blacktail', 'fruit-fly'],
  },

  // ─── 3. THE SECRET DINNER ─────────────────────────────────
  {
    slug: 'the-secret-dinner',
    id: 'secret-dinner',
    title: 'The Secret Dinner',
    author: 'Raphael Montes',
    month: 'September 2026',
    cover: '/books/secret-dinner.webp',
    genres: [
      { label: 'Horror', bg: '#1a1a1a', color: '#fff' },
      { label: 'Translated', bg: '#b6beff', color: '#000' },
      { label: 'Thriller', bg: '#3d3195', color: '#fff' },
    ],
    badges: [
      { label: 'Translated from Portuguese', icon: e(0x1F30E), type: 'feature' },
      { label: 'Rio de Janeiro setting', icon: e(0x1F306), type: 'setting' },
      { label: 'Dark social satire', icon: e(0x1F3AD), type: 'mood' },
      { label: 'Twisted morality', icon: e(0x1F500), type: 'style' },
    ],
    theme: {
      heroBackground: 'linear-gradient(160deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)',
      accentColor: '#b6beff',
      coverShadow: '0 24px 60px rgba(0,0,0,0.55)',
      tasteBg: 'linear-gradient(160deg, #1a1a38 0%, #0f2260 100%)',
    },
    description:
      'Four childhood friends — now adult members of Rio\'s educated upper class — reconvene for what begins as a dinner party and ends as something none of them will survive intact. Raphael Montes, Brazil\'s master of literary horror, delivers a scalding satire on wealth, complicity, and the violence that polite society chooses not to see.',
    editorialSections: [
      {
        heading: 'Brazilian Horror at Its Sharpest',
        body: 'Montes has been compared to Gillian Flynn for his ability to build unbearable social pressure through perfectly observed domestic detail. The Secret Dinner takes that compression and applies it to a single long evening — four people in an apartment who cannot leave, or won\'t, and who have far more to hide from each other than anyone admits. The horror isn\'t supernatural. It comes from exactly who these people are.',
      },
      {
        heading: 'Translation Note',
        body: 'Translated from the Portuguese by Julia Sherwood and Peter Sherwood. The novel\'s dry, almost clinical wit survives translation with remarkable fidelity — which makes the violence, when it comes, land all the harder.',
      },
    ],
    reviews: [
      {
        type: 'editorial',
        source: 'Aardvark Editorial',
        text: 'Montes understands that the scariest things happen in well-appointed rooms. The Secret Dinner is a precision instrument for social dread.',
        bg: '#e8e0ff',
        textColor: '#1a1a2e',
      },
      {
        type: 'editorial',
        source: 'Aardvark Pick Reasoning',
        text: 'One of the best translated horror novels we\'ve read in years. A dinner party as a pressure cooker — elegantly, savagely done.',
        bg: '#d6e8ff',
        textColor: '#1a1a2e',
      },
      {
        type: 'editorial',
        source: 'Member Preview',
        text: 'I knew something was wrong from the first page and couldn\'t stop reading anyway. That\'s the Montes effect.',
        bg: '#fff0f0',
        textColor: '#2a2a2a',
      },
    ],
    excerpt:
      'They had known each other for thirty years, which is a long time to know anything. Long enough for friendship to become a kind of obligation. Long enough for obligation to become something with no name in polite company.\n\nThe apartment was on the fourteenth floor. Catarina had redecorated since the last time any of them had been there — the art was different, the furniture more expensive, the view somehow more possessively arranged toward the city. Felipe noticed all of this and said nothing. Marcelo noticed none of it and said everything.\n\nThe bottle of wine that arrived first was open before the fourth person had taken their coat off.',
    notes: {
      whyWeChoseIt:
        'International horror remains underrepresented on English-language bookshelves, and Raphael Montes is one of the very best writing anywhere in the world. The Secret Dinner is the kind of novel that earns its place in the conversation about what horror literature can do — it\'s a moral novel disguised as a thriller, and the disguise is flawless.',
      contentWarnings:
        'Contains depictions of graphic violence, sexual assault (off-page but referenced), class-based cruelty, and moral cowardice. The novel\'s satirical intent does not soften its intensity.',
    },
    similarTitles: ['mazywood', 'crone', 'scion'],
  },

  // ─── 4. BLACKTAIL ─────────────────────────────────────────
  {
    slug: 'blacktail',
    id: 'blacktail',
    title: 'Blacktail',
    author: 'Scott Hawkins',
    month: 'September 2026',
    cover: '/books/blacktail.webp',
    genres: [
      { label: 'Fantasy', bg: '#c9f5b8', color: '#1a3a0a' },
      { label: 'Horror', bg: '#1a1a1a', color: '#fff' },
    ],
    badges: [
      { label: 'Epic revenge quest', icon: e(0x2694), type: 'feature' },
      { label: 'Mythic wilderness', icon: e(0x1F332), type: 'setting' },
      { label: 'Cult author return', icon: e(0x1F52E), type: 'author' },
      { label: 'Dark humor throughout', icon: e(0x1F608), type: 'mood' },
    ],
    theme: {
      heroBackground: 'linear-gradient(160deg, #c13a1f 0%, #8b2010 50%, #5c1008 100%)',
      accentColor: '#ff6b45',
      coverShadow: '0 24px 60px rgba(0,0,0,0.5)',
      tasteBg: 'linear-gradient(160deg, #b83318 0%, #7a1e0a 100%)',
    },
    description:
      'Blacktail is a wolf. Not a metaphor — an actual wolf. When her pack is massacred by hunters with something darker than greed motivating them, she sets out on an odyssey of revenge across a mythologised American wilderness. Scott Hawkins\'s first novel since the cult classic The Library at Mount Char is everything fans hoped for: vast, weird, darkly funny, and devastating.',
    editorialSections: [
      {
        heading: 'Hawkins Returns',
        body: 'It has been more than a decade since The Library at Mount Char made Scott Hawkins one of the most talked-about debut novelists in dark fiction. Blacktail confirms that the delay was worth it. This is a novel with the same fearless conceptual ambition but a more assured emotional core — the revenge plot is a frame for something much stranger and more affecting about what it means to persist after catastrophic loss.',
      },
      {
        heading: 'A Wolf\'s-Eye World',
        body: 'What makes Blacktail remarkable is how fully Hawkins commits to his protagonist\'s perspective without making it a gimmick. Blacktail experiences the world as a wolf does — smell-first, pack-oriented, with a logic that is internally consistent but deeply alien to human readers. The humor that emerges from that gap is pitch-perfect.',
      },
    ],
    reviews: [
      {
        type: 'editorial',
        source: 'Aardvark Editorial',
        text: 'Hawkins is operating at the intersection of myth and pulp, and the results are electrifying. Blacktail is the kind of book that shouldn\'t work and absolutely does.',
        bg: '#ffe0d8',
        textColor: '#3a1a0a',
      },
      {
        type: 'editorial',
        source: 'Aardvark Pick Reasoning',
        text: 'A wolf revenge epic with actual mythological stakes. Hawkins hasn\'t lost a single step since Library at Mount Char.',
        bg: '#d8ffe0',
        textColor: '#0a3a1a',
      },
      {
        type: 'editorial',
        source: 'Member Preview',
        text: 'I did not expect a novel narrated by a wolf to make me cry. I was wrong about that. Multiple times.',
        bg: '#fff7d6',
        textColor: '#2a2a2a',
      },
    ],
    excerpt:
      'She had killed before. Every wolf had. But this was different, and the difference was something she did not have words for because she did not use words — she used scent, and the scent of this place was wrong in a way that had no equivalent in the world she knew.\n\nThe humans who had come here were not hunters in the way she understood hunters. Hunters were hungry or afraid. These ones had been neither. That was what she kept returning to as she moved through the wreckage of what her pack had been.\n\nThe absence of fear. The absence of hunger. Whatever they had been, they had come to the mountain for reasons she did not yet understand, and that was why she was still alive and moving east.',
    notes: {
      whyWeChoseIt:
        'Scott Hawkins is one of the most genuinely original voices in genre fiction, and Blacktail was one of the most anticipated novels of 2026. The decision to follow an animal protagonist through a mythic revenge narrative is exactly the kind of bold formal choice that we love to champion — and it pays off completely.',
      contentWarnings:
        'Contains graphic depictions of animal violence including the deaths of wolves, human violence, and scenes of hunting that some readers may find distressing. Also contains moments of dark comedy that might not land for all readers.',
    },
    similarTitles: ['mazywood', 'crone', 'fruit-fly'],
  },

  // ─── 5. SCION ─────────────────────────────────────────────
  {
    slug: 'scion',
    id: 'scion',
    title: 'Scion',
    author: 'James Islington',
    month: 'September 2026',
    cover: '/books/scion.webp',
    genres: [
      { label: 'Fantasy', bg: '#c9f5b8', color: '#1a3a0a' },
      { label: 'Epic', bg: '#1a3a6e', color: '#fff' },
    ],
    badges: [
      { label: 'Epic worldbuilding', icon: e(0x1F30D), type: 'feature' },
      { label: 'Intricate magic system', icon: e(0x2728), type: 'feature' },
      { label: 'Political intrigue', icon: e(0x265F), type: 'mood' },
      { label: 'Instant page-turner', icon: e(0x1F4D6), type: 'style' },
    ],
    theme: {
      heroBackground: 'linear-gradient(160deg, #1a3a6e 0%, #122b55 50%, #0b1f3d 100%)',
      accentColor: '#6ba8ff',
      coverShadow: '0 24px 60px rgba(0,0,0,0.5)',
      tasteBg: 'linear-gradient(160deg, #1a3060 0%, #0e1f46 100%)',
    },
    description:
      'From the author of the beloved Licanius Trilogy comes a new epic fantasy series opener set in an empire on the brink of fracture. When a young woman of unknown origin discovers she carries a power that should be impossible in the current age, she is thrust into a political conflict that will determine who controls the magic — and the world — for the next century.',
    editorialSections: [
      {
        heading: 'Islington\'s New World',
        body: 'Readers of the Licanius Trilogy will find familiar pleasures here — the intricate plotting, the magic that feels genuinely systematic and rule-bound, the characters who are smarter than you expect them to be. But Scion is a fresh start, and Islington takes full advantage of the space to world-build without the weight of established expectation.',
      },
      {
        heading: 'The Political Layer',
        body: 'What distinguishes Scion from its peers in the epic fantasy market is how seriously it takes governance. The empire at the centre of the novel is not a backdrop — it is an argument, and the characters on every side of the conflict have genuinely defensible positions. The magic system is brilliant, but the political architecture is what keeps the pages turning.',
      },
    ],
    reviews: [
      {
        type: 'editorial',
        source: 'Aardvark Editorial',
        text: 'Islington is a master of the slow reveal. Every chapter of Scion lands a piece of the puzzle in exactly the right place, and the final act earns every page that precedes it.',
        bg: '#d6e8ff',
        textColor: '#0a1a3a',
      },
      {
        type: 'editorial',
        source: 'Aardvark Pick Reasoning',
        text: 'If you\'ve been waiting for an epic fantasy that respects your intelligence as well as your appetite for scope — Scion is it.',
        bg: '#e8d6ff',
        textColor: '#1a0a3a',
      },
      {
        type: 'editorial',
        source: 'Member Preview',
        text: 'The magic system alone would make this worth reading. That it also has a gripping political plot and a protagonist I actually care about is almost unfair.',
        bg: '#d6ffe8',
        textColor: '#0a3a1a',
      },
    ],
    excerpt:
      'She had been taught that the Ascendancy\'s boundaries were the boundaries of the world. Everything beyond them was either conquered long ago or not worth conquering — wasteland, myth, ocean.\n\nThen the man from outside arrived at the city gates, and everything she had been taught had to be reconsidered.\n\nHe was not what she expected a myth to look like. He was tired, and hungry, and younger than she was by several years at least. His clothing was wrong in ways she could not immediately place. But the mark on his wrist was unmistakable — she had seen it in the records room, in documents so old they were stored under glass. It was not possible for anyone living to bear that mark.\n\nShe showed him to the secure room and said nothing to anyone. Not yet.',
    notes: {
      whyWeChoseIt:
        'James Islington is one of the most technically accomplished epic fantasy writers working today, and Scion marks the beginning of what promises to be another essential series. We chose it because we wanted to give our members the chance to get in at the ground floor of something that will be talked about for years.',
      contentWarnings:
        'Contains depictions of political violence, war, and deaths of secondary characters. Some sections involve complex moral choices around warfare and governance that may be emotionally challenging.',
    },
    similarTitles: ['mazywood', 'the-secret-dinner', 'fruit-fly'],
  },

  // ─── 6. FRUIT FLY ─────────────────────────────────────────
  {
    slug: 'fruit-fly',
    id: 'fruit-fly',
    title: 'Fruit Fly',
    author: 'Chuck Tingle',
    month: 'September 2026',
    cover: '/books/fruit-fly.webp',
    genres: [
      { label: 'Horror', bg: '#1a1a1a', color: '#fff' },
      { label: 'Satire', bg: '#ff9d00', color: '#000' },
    ],
    badges: [
      { label: 'Satirical horror', icon: e(0x1F3AD), type: 'mood' },
      { label: 'Surreal dread', icon: e(0x1F300), type: 'mood' },
      { label: 'Unapologetically weird', icon: e(0x1F984), type: 'style' },
      { label: 'Mind-bending', icon: e(0x1F9E0), type: 'style' },
    ],
    theme: {
      heroBackground: 'linear-gradient(160deg, #e8326e 0%, #c01850 50%, #8a0830 100%)',
      accentColor: '#ff6fa8',
      coverShadow: '0 24px 60px rgba(0,0,0,0.45)',
      tasteBg: 'linear-gradient(160deg, #d02860 0%, #8a0c38 100%)',
    },
    description:
      'When a small-town exterminator begins experiencing vivid hallucinations in which the insects he kills are communicating with him — urgently, insistently, in the unmistakable language of terror — he must decide whether he is losing his mind or whether the world has always been as horrifying as it now appears. Chuck Tingle\'s first full-length literary horror novel is as surprising and tender as anything he has written.',
    editorialSections: [
      {
        heading: 'Chuck Tingle\'s Long Game',
        body: 'Tingle has spent years developing a reputation as one of the most inventive, satirically precise minds in contemporary fiction — and Fruit Fly is the fulfilment of that trajectory. The novel retains his core concern with the machinery of fear, but applies it to a sustained narrative with real character investment and genuinely frightening imagery. This is not a stunt. It is a horror novel that happens to be written by Chuck Tingle.',
      },
      {
        heading: 'The Absurd as Horror Vehicle',
        body: 'The premise is inherently absurd, and Tingle knows it, and uses that knowledge surgically. The exterminator\'s hallucinations begin comedically and become something far more disturbing precisely because the novel has already made you comfortable with the strangeness. Fruit Fly earns its most disturbing moments through patience and earned trust.',
      },
    ],
    reviews: [
      {
        type: 'editorial',
        source: 'Aardvark Editorial',
        text: 'Nobody does dread as comedy better than Tingle, and nobody does comedy as dread better either. Fruit Fly is his most sustained and affecting work to date.',
        bg: '#ffe0f0',
        textColor: '#3a0a1a',
      },
      {
        type: 'editorial',
        source: 'Aardvark Pick Reasoning',
        text: 'This is the novel that confirms Tingle\'s place in the literary horror canon. Utterly original, genuinely unsettling, impossible to categorise.',
        bg: '#fff0d6',
        textColor: '#3a2a0a',
      },
      {
        type: 'editorial',
        source: 'Member Preview',
        text: 'I laughed, then I was unsettled, then I was actually scared. Repeat cycle for about 300 pages. Extraordinary.',
        bg: '#d8f0ff',
        textColor: '#0a2a3a',
      },
    ],
    excerpt:
      'The problem with Gary\'s job was that he was good at it.\n\nNot in the way that someone is good at something they love — he had been doing it for eleven years and had developed the kind of competence that exists entirely apart from feeling. He could identify a colony\'s point of entry in under a minute. He could tell you from the distribution pattern whether you were dealing with scouts or a full infestation. He knew, without examining them, whether the insects he killed were mothers.\n\nHe had not thought about that last part very much until the morning the first one spoke to him.\n\nIt was a fruit fly. Small enough to dismiss. Too small to justify the particular quality of attention it was paying him through the kitchen window glass. He looked at it. It looked back.',
    notes: {
      whyWeChoseIt:
        'Fruit Fly is the kind of book that the Aardvark selection process was designed to find — a novel that doesn\'t fit neatly into existing categories but is clearly doing something important and original. Chuck Tingle\'s long-form debut in literary horror is exactly as remarkable as his reputation suggested it might be.',
      contentWarnings:
        'Contains graphic insect violence, existential horror, descriptions of psychological breakdown, and extended sections of surreal imagery that some readers may find disorienting. Also contains moments of genuine tenderness that may catch you off guard.',
    },
    similarTitles: ['crone', 'blacktail', 'mazywood'],
  },
];
