// ============================================================
// ALL BOOKS PAGE — Catalogue Data
// BookOrbit Book Club
// ============================================================

export interface AllBook {
  id: string;
  title: string;
  author: string;
  description: string;
  coverUrl: string;        // CDN URL (from Webflow CMS)
  bgColor: string;
  textColor: string;
  tags: { label: string; bg: string; color: string }[];
  badge?: string;
  slug?: string;
}

export interface MonthData {
  month: string;
  label: string;  // display label e.g. "September 2026"
  books: AllBook[];
}

// Colour palettes for covers — taken directly from reference screenshot
const PALETTES = {
  deepPurple: { bg: "#32225f", text: "#fff" },
  green:      { bg: "#6abf4c", text: "#fff" },
  black:      { bg: "#000000", text: "#fff" },
  red:        { bg: "#c13a1f", text: "#fff" },
  blue:       { bg: "#1a3a6e", text: "#fff" },
  teal:       { bg: "#006877", text: "#fff" },
  orange:     { bg: "#f26b22", text: "#fff" },
  pink:       { bg: "#e8326e", text: "#fff" },
  navy:       { bg: "#1d2c5e", text: "#fff" },
  yellow:     { bg: "#d4a11a", text: "#000" },
  sage:       { bg: "#607d4f", text: "#fff" },
  rust:       { bg: "#8b3a1e", text: "#fff" },
  plum:       { bg: "#5c2c5c", text: "#fff" },
  indigo:     { bg: "#3a2d7e", text: "#fff" },
  brown:      { bg: "#5c3b20", text: "#fff" },
};

// Reused CDN image base
const CDN = "https://cdn.prod.website-files.com/69a33078e92fb49d85319481/";

export const monthlyBooks: MonthData[] = [
  {
    month: "september-2026",
    label: "September 2026",
    books: [
      {
        id: "mazywood",
        title: "Mazywood",
        author: "Tananarive Due",
        description: "All the Sinners Bleed meets Erasure in this literary thriller from the award-winning author of The Reformatory.",
        coverUrl: `${CDN}6a95dd114588ec2d7b5f3852_earlymazywood.png`,
        bgColor: PALETTES.deepPurple.bg,
        textColor: PALETTES.deepPurple.text,
        tags: [
          { label: "Historical", bg: "#ff9d00", color: "#000" },
          { label: "Horror", bg: "#000", color: "#fff" },
          { label: "Includes a Dog", bg: "#e62701", color: "#fff" },
        ],
      },
      {
        id: "crone",
        title: "Crone",
        author: "Keith Rosson",
        description: "A haunting, fearsome story of a father searching for his missing daughter and finding darkness at every turn.",
        coverUrl: `${CDN}6a95de8306c788ece7de135f_crone.png`,
        bgColor: PALETTES.green.bg,
        textColor: PALETTES.green.text,
        tags: [
          { label: "Horror", bg: "#000", color: "#fff" },
        ],
      },
      {
        id: "secret-dinner",
        title: "The Secret Dinner",
        author: "Jeferson Tenorio",
        description: "Four childhood friends swap rural Brazil for Copacabana, Rio — only to encounter the fate that awaits them.",
        coverUrl: `${CDN}6a95dfdce3d0286b64aa3e9c_thesecretdinner.png`,
        bgColor: PALETTES.black.bg,
        textColor: PALETTES.black.text,
        tags: [
          { label: "Translated", bg: "#b6beff", color: "#000" },
          { label: "Horror", bg: "#000", color: "#fff" },
          { label: "Thriller", bg: "#3d3195", color: "#fff" },
        ],
      },
      {
        id: "blacktail",
        title: "Blacktail",
        author: "Scott Hawkins",
        description: "The long-awaited second novel from the author of the cult hit The Library at Mount Char — a wolf sets out on an epic journey of revenge.",
        coverUrl: `${CDN}6a95e0dc6d550cec545ea990_blacktail.png`,
        bgColor: PALETTES.red.bg,
        textColor: PALETTES.red.text,
        tags: [
          { label: "Fantasy", bg: "#c9f5b8", color: "#000" },
          { label: "Horror", bg: "#000", color: "#fff" },
        ],
      },
      {
        id: "something-wicked",
        title: "Something Wicked",
        author: "Amy Suiter Clarke",
        description: "A gripping psychological thriller about what happens when a town's best-kept secrets are revealed.",
        coverUrl: `${CDN}6a95dd114588ec2d7b5f3852_earlymazywood.png`,
        bgColor: PALETTES.blue.bg,
        textColor: PALETTES.blue.text,
        tags: [
          { label: "Thriller", bg: "#3d3195", color: "#fff" },
          { label: "Mystery", bg: "#c9f5b8", color: "#000" },
        ],
      },
    ],
  },
  {
    month: "august-2026",
    label: "August 2026",
    books: [
      {
        id: "iron-flame",
        title: "Iron Flame",
        author: "Rebecca Yarros",
        description: "The second instalment in the explosive Empyrean series — war dragons, romance, and shocking revelations await.",
        coverUrl: `${CDN}6a95dd114588ec2d7b5f3852_earlymazywood.png`,
        bgColor: PALETTES.rust.bg,
        textColor: PALETTES.rust.text,
        tags: [
          { label: "Fantasy", bg: "#c9f5b8", color: "#000" },
          { label: "Romance", bg: "#ffb3d9", color: "#000" },
        ],
      },
      {
        id: "orbital",
        title: "Orbital",
        author: "Samantha Harvey",
        description: "Booker Prize winner. Sixteen orbits of Earth in 24 hours — a meditative, luminous novel of breathtaking beauty.",
        coverUrl: `${CDN}6a95de8306c788ece7de135f_crone.png`,
        bgColor: PALETTES.teal.bg,
        textColor: PALETTES.teal.text,
        tags: [
          { label: "Literary Fiction", bg: "#ffedb3", color: "#000" },
          { label: "Booker Winner", bg: "#ffd700", color: "#000" },
        ],
      },
      {
        id: "james",
        title: "James",
        author: "Percival Everett",
        description: "A stunning reimagining of Huckleberry Finn from Jim's perspective — urgent, witty, and absolutely essential.",
        coverUrl: `${CDN}6a95dfdce3d0286b64aa3e9c_thesecretdinner.png`,
        bgColor: PALETTES.navy.bg,
        textColor: PALETTES.navy.text,
        tags: [
          { label: "Literary Fiction", bg: "#ffedb3", color: "#000" },
          { label: "Pulitzer Winner", bg: "#ffd700", color: "#000" },
        ],
      },
      {
        id: "long-island-compromise",
        title: "Long Island Compromise",
        author: "Taffy Brodesser-Akner",
        description: "A wild, wickedly funny multi-generational saga about a wealthy Long Island family undone by trauma and secrets.",
        coverUrl: `${CDN}6a95e0dc6d550cec545ea990_blacktail.png`,
        bgColor: PALETTES.pink.bg,
        textColor: PALETTES.pink.text,
        tags: [
          { label: "Literary Fiction", bg: "#ffedb3", color: "#000" },
          { label: "Humour", bg: "#b6beff", color: "#000" },
        ],
      },
      {
        id: "intermezzo",
        title: "Intermezzo",
        author: "Sally Rooney",
        description: "Sally Rooney's fourth novel follows two grieving brothers and the women they love through chess, literature, and heartbreak.",
        coverUrl: `${CDN}6a95dd114588ec2d7b5f3852_earlymazywood.png`,
        bgColor: PALETTES.sage.bg,
        textColor: PALETTES.sage.text,
        tags: [
          { label: "Literary Fiction", bg: "#ffedb3", color: "#000" },
          { label: "Romance", bg: "#ffb3d9", color: "#000" },
        ],
      },
    ],
  },
  {
    month: "july-2026",
    label: "July 2026",
    books: [
      {
        id: "women-in-blue",
        title: "Women in Blue",
        author: "Roberta Rogow",
        description: "A detective duo tackles murder and intrigue in Victorian London — dazzling historical mystery.",
        coverUrl: `${CDN}6a95de8306c788ece7de135f_crone.png`,
        bgColor: PALETTES.indigo.bg,
        textColor: PALETTES.indigo.text,
        tags: [
          { label: "Mystery", bg: "#c9f5b8", color: "#000" },
          { label: "Historical", bg: "#ff9d00", color: "#000" },
        ],
      },
      {
        id: "just-one-more",
        title: "Just One More",
        author: "Elle McNicoll",
        description: "A tender and hopeful YA novel about friendship, belonging, and being brave enough to ask for what you need.",
        coverUrl: `${CDN}6a95dfdce3d0286b64aa3e9c_thesecretdinner.png`,
        bgColor: PALETTES.orange.bg,
        textColor: PALETTES.orange.text,
        tags: [
          { label: "YA", bg: "#b6beff", color: "#000" },
          { label: "Contemporary", bg: "#ffedb3", color: "#000" },
        ],
      },
      {
        id: "the-ministry-future",
        title: "The Ministry for the Future",
        author: "Kim Stanley Robinson",
        description: "A bold, visionary near-future novel about climate change, global power, and the fight for Earth's survival.",
        coverUrl: `${CDN}6a95e0dc6d550cec545ea990_blacktail.png`,
        bgColor: PALETTES.teal.bg,
        textColor: PALETTES.teal.text,
        tags: [
          { label: "Sci-Fi", bg: "#c9f5b8", color: "#000" },
          { label: "Climate Fiction", bg: "#a4f6f8", color: "#000" },
        ],
      },
      {
        id: "all-fours",
        title: "All Fours",
        author: "Miranda July",
        description: "A woman sets out on a road trip and ends up staying in a motel room for weeks — an electrifying novel about desire and transformation.",
        coverUrl: `${CDN}6a95dd114588ec2d7b5f3852_earlymazywood.png`,
        bgColor: PALETTES.plum.bg,
        textColor: PALETTES.plum.text,
        tags: [
          { label: "Literary Fiction", bg: "#ffedb3", color: "#000" },
          { label: "Cult Favourite", bg: "#ff9d00", color: "#000" },
        ],
      },
      {
        id: "percival-everett",
        title: "Dr. No",
        author: "Percival Everett",
        description: "A mathematician teams up with the world's worst criminal mastermind. Absurdist, deadpan, and wickedly smart.",
        coverUrl: `${CDN}6a95de8306c788ece7de135f_crone.png`,
        bgColor: PALETTES.black.bg,
        textColor: PALETTES.black.text,
        tags: [
          { label: "Literary Fiction", bg: "#ffedb3", color: "#000" },
          { label: "Humour", bg: "#b6beff", color: "#000" },
        ],
      },
    ],
  },
  {
    month: "june-2026",
    label: "June 2026",
    books: [
      {
        id: "crook-manifesto",
        title: "Crook Manifesto",
        author: "Colson Whitehead",
        description: "A crackling, brilliantly funny crime novel set in 1970s Harlem — the sequel to Harlem Shuffle.",
        coverUrl: `${CDN}6a95dfdce3d0286b64aa3e9c_thesecretdinner.png`,
        bgColor: PALETTES.yellow.bg,
        textColor: PALETTES.yellow.text,
        tags: [
          { label: "Crime", bg: "#ff9d00", color: "#000" },
          { label: "Literary Fiction", bg: "#ffedb3", color: "#000" },
        ],
      },
      {
        id: "demon-copperhead",
        title: "Demon Copperhead",
        author: "Barbara Kingsolver",
        description: "Pulitzer Prize winner — a retelling of David Copperfield set in Appalachia during the opioid crisis.",
        coverUrl: `${CDN}6a95e0dc6d550cec545ea990_blacktail.png`,
        bgColor: PALETTES.rust.bg,
        textColor: PALETTES.rust.text,
        tags: [
          { label: "Literary Fiction", bg: "#ffedb3", color: "#000" },
          { label: "Pulitzer Winner", bg: "#ffd700", color: "#000" },
        ],
      },
      {
        id: "tom-lake",
        title: "Tom Lake",
        author: "Ann Patchett",
        description: "A mother tells her daughters the story of a summer she spent acting in a Chekhov play — and falling in love.",
        coverUrl: `${CDN}6a95dd114588ec2d7b5f3852_earlymazywood.png`,
        bgColor: PALETTES.green.bg,
        textColor: PALETTES.green.text,
        tags: [
          { label: "Literary Fiction", bg: "#ffedb3", color: "#000" },
          { label: "Romance", bg: "#ffb3d9", color: "#000" },
        ],
      },
      {
        id: "cahokia-jazz",
        title: "Cahokia Jazz",
        author: "Francis Spufford",
        description: "Jazz Age alternate history where Indigenous civilisation survived — a glittering, politically charged noir thriller.",
        coverUrl: `${CDN}6a95de8306c788ece7de135f_crone.png`,
        bgColor: PALETTES.indigo.bg,
        textColor: PALETTES.indigo.text,
        tags: [
          { label: "Historical", bg: "#ff9d00", color: "#000" },
          { label: "Alt-History", bg: "#b6beff", color: "#000" },
        ],
      },
      {
        id: "prophet-song",
        title: "Prophet Song",
        author: "Paul Lynch",
        description: "Booker Prize winner. A deeply unsettling dystopian vision of modern Ireland under totalitarian rule.",
        coverUrl: `${CDN}6a95dfdce3d0286b64aa3e9c_thesecretdinner.png`,
        bgColor: PALETTES.navy.bg,
        textColor: PALETTES.navy.text,
        tags: [
          { label: "Dystopian", bg: "#a4f6f8", color: "#000" },
          { label: "Booker Winner", bg: "#ffd700", color: "#000" },
        ],
      },
    ],
  },
  {
    month: "may-2026",
    label: "May 2026",
    books: [
      {
        id: "night-bazaar",
        title: "The Night Bazaar",
        author: "A.K. Blakemore",
        description: "A beguiling novel of transformation, desire, and the uncanny in early modern England.",
        coverUrl: `${CDN}6a95e0dc6d550cec545ea990_blacktail.png`,
        bgColor: PALETTES.plum.bg,
        textColor: PALETTES.plum.text,
        tags: [
          { label: "Historical", bg: "#ff9d00", color: "#000" },
          { label: "Gothic", bg: "#000", color: "#fff" },
        ],
      },
      {
        id: "onyx-storm",
        title: "Onyx Storm",
        author: "Rebecca Yarros",
        description: "The electrifying third book in the Empyrean series — higher stakes, new alliances, impossible choices.",
        coverUrl: `${CDN}6a95dd114588ec2d7b5f3852_earlymazywood.png`,
        bgColor: PALETTES.black.bg,
        textColor: PALETTES.black.text,
        tags: [
          { label: "Fantasy", bg: "#c9f5b8", color: "#000" },
          { label: "Romance", bg: "#ffb3d9", color: "#000" },
        ],
      },
      {
        id: "burn-book",
        title: "Burn Book",
        author: "Kara Swisher",
        description: "Tech journalist Kara Swisher's scorching memoir on Silicon Valley's most powerful — and most dangerous — figures.",
        coverUrl: `${CDN}6a95de8306c788ece7de135f_crone.png`,
        bgColor: PALETTES.red.bg,
        textColor: PALETTES.red.text,
        tags: [
          { label: "Non-Fiction", bg: "#ffedb3", color: "#000" },
          { label: "Memoir", bg: "#b6beff", color: "#000" },
        ],
      },
      {
        id: "my-year-rest-relaxation",
        title: "My Year of Rest and Relaxation",
        author: "Ottessa Moshfegh",
        description: "A nameless narrator attempts to sleep for a year in a downtown Manhattan apartment — hypnotic, dark, and brilliant.",
        coverUrl: `${CDN}6a95dfdce3d0286b64aa3e9c_thesecretdinner.png`,
        bgColor: PALETTES.blue.bg,
        textColor: PALETTES.blue.text,
        tags: [
          { label: "Literary Fiction", bg: "#ffedb3", color: "#000" },
          { label: "Cult Favourite", bg: "#ff9d00", color: "#000" },
        ],
      },
      {
        id: "age-vice",
        title: "Age of Vice",
        author: "Deepti Kapoor",
        description: "A sweeping tale of wealth, power and corruption in modern India — Bombay noir at its very best.",
        coverUrl: `${CDN}6a95e0dc6d550cec545ea990_blacktail.png`,
        bgColor: PALETTES.orange.bg,
        textColor: PALETTES.orange.text,
        tags: [
          { label: "Crime", bg: "#ff9d00", color: "#000" },
          { label: "Thriller", bg: "#3d3195", color: "#fff" },
        ],
      },
    ],
  },
  {
    month: "april-2026",
    label: "April 2026",
    books: [
      {
        id: "in-ascension",
        title: "In Ascension",
        author: "Martin MacInnes",
        description: "An extraordinary novel of deep-sea biology and space exploration — the journey of a lifetime.",
        coverUrl: `${CDN}6a95dd114588ec2d7b5f3852_earlymazywood.png`,
        bgColor: PALETTES.teal.bg,
        textColor: PALETTES.teal.text,
        tags: [
          { label: "Sci-Fi", bg: "#c9f5b8", color: "#000" },
          { label: "Literary Fiction", bg: "#ffedb3", color: "#000" },
        ],
      },
      {
        id: "frozen-river",
        title: "The Frozen River",
        author: "Ariel Lawhon",
        description: "Based on the true story of midwife Martha Ballard — a riveting historical mystery set in colonial Maine.",
        coverUrl: `${CDN}6a95de8306c788ece7de135f_crone.png`,
        bgColor: PALETTES.indigo.bg,
        textColor: PALETTES.indigo.text,
        tags: [
          { label: "Historical", bg: "#ff9d00", color: "#000" },
          { label: "Mystery", bg: "#c9f5b8", color: "#000" },
        ],
      },
      {
        id: "covenant-salt",
        title: "The Covenant of Salt",
        author: "Clare Keegan",
        description: "A devastating and precise short novel about marriage, silence, and a woman's choices.",
        coverUrl: `${CDN}6a95dfdce3d0286b64aa3e9c_thesecretdinner.png`,
        bgColor: PALETTES.sage.bg,
        textColor: PALETTES.sage.text,
        tags: [
          { label: "Literary Fiction", bg: "#ffedb3", color: "#000" },
          { label: "Novella", bg: "#b6beff", color: "#000" },
        ],
      },
      {
        id: "kairos",
        title: "Kairos",
        author: "Jenny Erpenbeck",
        description: "International Booker Prize winner — the passionate, ruinous love affair between two people in Berlin during the fall of the Wall.",
        coverUrl: `${CDN}6a95e0dc6d550cec545ea990_blacktail.png`,
        bgColor: PALETTES.rust.bg,
        textColor: PALETTES.rust.text,
        tags: [
          { label: "Translated", bg: "#b6beff", color: "#000" },
          { label: "International Booker", bg: "#ffd700", color: "#000" },
        ],
      },
      {
        id: "wandering-stars-2",
        title: "Wandering Stars",
        author: "Tommy Orange",
        description: "The stunning sequel to There There — tracing a Native American family through violence, survival, art, and inheritance.",
        coverUrl: `${CDN}6a95dd114588ec2d7b5f3852_earlymazywood.png`,
        bgColor: PALETTES.blue.bg,
        textColor: PALETTES.blue.text,
        tags: [
          { label: "Literary Fiction", bg: "#ffedb3", color: "#000" },
          { label: "Debut", bg: "#a4f6f8", color: "#000" },
        ],
      },
    ],
  },
  {
    month: "march-2026",
    label: "March 2026",
    books: [
      {
        id: "wind-knows-my-name",
        title: "The Wind Knows My Name",
        author: "Isabel Allende",
        description: "From the legendary Isabel Allende — an epic novel spanning Vienna 1938 to the US-Mexico border today.",
        coverUrl: `${CDN}6a95de8306c788ece7de135f_crone.png`,
        bgColor: PALETTES.plum.bg,
        textColor: PALETTES.plum.text,
        tags: [
          { label: "Literary Fiction", bg: "#ffedb3", color: "#000" },
          { label: "Historical", bg: "#ff9d00", color: "#000" },
        ],
      },
      {
        id: "practice",
        title: "The Practice",
        author: "Rosalind Brown",
        description: "A student spends a Sunday afternoon writing an essay — a precise, philosophical, quietly radical novel.",
        coverUrl: `${CDN}6a95dfdce3d0286b64aa3e9c_thesecretdinner.png`,
        bgColor: PALETTES.green.bg,
        textColor: PALETTES.green.text,
        tags: [
          { label: "Literary Fiction", bg: "#ffedb3", color: "#000" },
          { label: "Debut", bg: "#a4f6f8", color: "#000" },
        ],
      },
      {
        id: "creation-lake",
        title: "Creation Lake",
        author: "Rachel Kushner",
        description: "Booker shortlisted — a brilliant, cold-blooded spy thriller set among radical environmentalists in France.",
        coverUrl: `${CDN}6a95e0dc6d550cec545ea990_blacktail.png`,
        bgColor: PALETTES.black.bg,
        textColor: PALETTES.black.text,
        tags: [
          { label: "Thriller", bg: "#3d3195", color: "#fff" },
          { label: "Literary Fiction", bg: "#ffedb3", color: "#000" },
        ],
      },
      {
        id: "entitlement",
        title: "Entitlement",
        author: "Rumaan Alam",
        description: "A young woman working at a philanthropic foundation becomes entangled with a billionaire donor — biting, funny, and sharp.",
        coverUrl: `${CDN}6a95dd114588ec2d7b5f3852_earlymazywood.png`,
        bgColor: PALETTES.orange.bg,
        textColor: PALETTES.orange.text,
        tags: [
          { label: "Literary Fiction", bg: "#ffedb3", color: "#000" },
          { label: "Satire", bg: "#ff9d00", color: "#000" },
        ],
      },
      {
        id: "beautyland",
        title: "Beautyland",
        author: "Marie-Helene Bertino",
        description: "An alien crashes to Earth in 1970s Philadelphia — a gorgeous, melancholic story of otherness and wonder.",
        coverUrl: `${CDN}6a95de8306c788ece7de135f_crone.png`,
        bgColor: PALETTES.pink.bg,
        textColor: PALETTES.pink.text,
        tags: [
          { label: "Sci-Fi", bg: "#c9f5b8", color: "#000" },
          { label: "Literary Fiction", bg: "#ffedb3", color: "#000" },
        ],
      },
    ],
  },
  {
    month: "february-2026",
    label: "February 2026",
    books: [
      {
        id: "no-two-persons",
        title: "No Two Persons",
        author: "Erica Bauermeister",
        description: "Nine people read the same novel and are changed in different, beautiful ways — a stunning love letter to reading.",
        coverUrl: `${CDN}6a95dfdce3d0286b64aa3e9c_thesecretdinner.png`,
        bgColor: PALETTES.teal.bg,
        textColor: PALETTES.teal.text,
        tags: [
          { label: "Literary Fiction", bg: "#ffedb3", color: "#000" },
          { label: "Book Lovers", bg: "#ffb3d9", color: "#000" },
        ],
      },
      {
        id: "god-of-the-woods",
        title: "God of the Woods",
        author: "Lauren Fox",
        description: "A summer camp in 1975 Upstate New York — when a girl vanishes, secrets buried for decades begin to surface.",
        coverUrl: `${CDN}6a95e0dc6d550cec545ea990_blacktail.png`,
        bgColor: PALETTES.rust.bg,
        textColor: PALETTES.rust.text,
        tags: [
          { label: "Mystery", bg: "#c9f5b8", color: "#000" },
          { label: "Thriller", bg: "#3d3195", color: "#fff" },
        ],
      },
      {
        id: "strange-sally-diamond",
        title: "Strange Sally Diamond",
        author: "Liz Nugent",
        description: "A reclusive woman sets her dead father on fire and is shocked to find it strange — gripping, dark, and deeply original.",
        coverUrl: `${CDN}6a95dd114588ec2d7b5f3852_earlymazywood.png`,
        bgColor: PALETTES.navy.bg,
        textColor: PALETTES.navy.text,
        tags: [
          { label: "Thriller", bg: "#3d3195", color: "#fff" },
          { label: "Mystery", bg: "#c9f5b8", color: "#000" },
        ],
      },
      {
        id: "great-when-i-was-little",
        title: "Great When I Was Little",
        author: "Molly Seidel",
        description: "A wry coming-of-age memoir from Olympic marathon runner Molly Seidel about ambition, vulnerability, and what it means to be good.",
        coverUrl: `${CDN}6a95de8306c788ece7de135f_crone.png`,
        bgColor: PALETTES.yellow.bg,
        textColor: PALETTES.yellow.text,
        tags: [
          { label: "Memoir", bg: "#b6beff", color: "#000" },
          { label: "Non-Fiction", bg: "#ffedb3", color: "#000" },
        ],
      },
      {
        id: "bride",
        title: "Bride",
        author: "Ali Hazelwood",
        description: "A vampire and a werewolf are forced into a political marriage — steamy, funny, and irresistibly romantic.",
        coverUrl: `${CDN}6a95dfdce3d0286b64aa3e9c_thesecretdinner.png`,
        bgColor: PALETTES.plum.bg,
        textColor: PALETTES.plum.text,
        tags: [
          { label: "Romance", bg: "#ffb3d9", color: "#000" },
          { label: "Fantasy", bg: "#c9f5b8", color: "#000" },
        ],
      },
    ],
  },
  {
    month: "january-2026",
    label: "January 2026",
    books: [
      {
        id: "afterland",
        title: "Afterland",
        author: "Lauren Beukes",
        description: "A world where a plague kills almost all men — a mother flees across America with her twelve-year-old son to protect him.",
        coverUrl: `${CDN}6a95e0dc6d550cec545ea990_blacktail.png`,
        bgColor: PALETTES.indigo.bg,
        textColor: PALETTES.indigo.text,
        tags: [
          { label: "Thriller", bg: "#3d3195", color: "#fff" },
          { label: "Sci-Fi", bg: "#c9f5b8", color: "#000" },
        ],
      },
      {
        id: "percival-everett-trees",
        title: "The Trees",
        author: "Percival Everett",
        description: "A wickedly darkly funny murder mystery about lynching, reparation, and the haunting weight of American history.",
        coverUrl: `${CDN}6a95dd114588ec2d7b5f3852_earlymazywood.png`,
        bgColor: PALETTES.black.bg,
        textColor: PALETTES.black.text,
        tags: [
          { label: "Mystery", bg: "#c9f5b8", color: "#000" },
          { label: "Literary Fiction", bg: "#ffedb3", color: "#000" },
        ],
      },
      {
        id: "wellness",
        title: "Wellness",
        author: "Nathan Hill",
        description: "A Chicago couple navigates marriage, parenthood, and gentrification over thirty years in a huge, generous, American novel.",
        coverUrl: `${CDN}6a95de8306c788ece7de135f_crone.png`,
        bgColor: PALETTES.teal.bg,
        textColor: PALETTES.teal.text,
        tags: [
          { label: "Literary Fiction", bg: "#ffedb3", color: "#000" },
          { label: "Contemporary", bg: "#b6beff", color: "#000" },
        ],
      },
      {
        id: "hiddensee",
        title: "Hiddensee",
        author: "Gregory Maguire",
        description: "The Nutcracker retold — a dark fairytale prequel exploring the mysterious toymaker Drosselmeyer.",
        coverUrl: `${CDN}6a95dfdce3d0286b64aa3e9c_thesecretdinner.png`,
        bgColor: PALETTES.plum.bg,
        textColor: PALETTES.plum.text,
        tags: [
          { label: "Fantasy", bg: "#c9f5b8", color: "#000" },
          { label: "Retelling", bg: "#b6beff", color: "#000" },
        ],
      },
      {
        id: "james-claire-keegan",
        title: "Foster",
        author: "Claire Keegan",
        description: "A child spends a summer with strangers in rural Ireland and discovers what it means to be cared for — sublimely quiet and devastating.",
        coverUrl: `${CDN}6a95e0dc6d550cec545ea990_blacktail.png`,
        bgColor: PALETTES.green.bg,
        textColor: PALETTES.green.text,
        tags: [
          { label: "Literary Fiction", bg: "#ffedb3", color: "#000" },
          { label: "Novella", bg: "#b6beff", color: "#000" },
        ],
      },
    ],
  },
  {
    month: "december-2025",
    label: "December 2025",
    books: [
      {
        id: "beautyman",
        title: "Beautyman",
        author: "Tom McCarthy",
        description: "A meditation on memory, archives, and the archaeology of culture — intellectually thrilling and fiercely original.",
        coverUrl: `${CDN}6a95dd114588ec2d7b5f3852_earlymazywood.png`,
        bgColor: PALETTES.rust.bg,
        textColor: PALETTES.rust.text,
        tags: [
          { label: "Literary Fiction", bg: "#ffedb3", color: "#000" },
          { label: "Experimental", bg: "#a4f6f8", color: "#000" },
        ],
      },
      {
        id: "safekeeping",
        title: "Safekeeping",
        author: "Jessamyn Hope",
        description: "A kibbutz in 1994 — a young American, a Holocaust survivor's granddaughter, and a stolen brooch converge in this rich and beautiful novel.",
        coverUrl: `${CDN}6a95de8306c788ece7de135f_crone.png`,
        bgColor: PALETTES.navy.bg,
        textColor: PALETTES.navy.text,
        tags: [
          { label: "Historical", bg: "#ff9d00", color: "#000" },
          { label: "Literary Fiction", bg: "#ffedb3", color: "#000" },
        ],
      },
      {
        id: "loss",
        title: "The Loss",
        author: "Nina Stibbe",
        description: "Nina Stibbe's most touching and personal novel — funny, sad, and exactly right about grief and love.",
        coverUrl: `${CDN}6a95dfdce3d0286b64aa3e9c_thesecretdinner.png`,
        bgColor: PALETTES.blue.bg,
        textColor: PALETTES.blue.text,
        tags: [
          { label: "Literary Fiction", bg: "#ffedb3", color: "#000" },
          { label: "Humour", bg: "#b6beff", color: "#000" },
        ],
      },
      {
        id: "our-wives-under-sea",
        title: "Our Wives Under the Sea",
        author: "Julia Armfield",
        description: "A woman returns from the deep ocean fundamentally changed — a haunting novel of love, grief, and transformation.",
        coverUrl: `${CDN}6a95e0dc6d550cec545ea990_blacktail.png`,
        bgColor: PALETTES.teal.bg,
        textColor: PALETTES.teal.text,
        tags: [
          { label: "Horror", bg: "#000", color: "#fff" },
          { label: "Gothic", bg: "#000", color: "#fff" },
          { label: "Queer", bg: "#b6beff", color: "#000" },
        ],
      },
      {
        id: "same-bright-stars",
        title: "The Same Bright Stars",
        author: "Ethan Joella",
        description: "A small-town diner owner wrestles with legacy and belonging in this warm, wise, and tender American novel.",
        coverUrl: `${CDN}6a95dd114588ec2d7b5f3852_earlymazywood.png`,
        bgColor: PALETTES.orange.bg,
        textColor: PALETTES.orange.text,
        tags: [
          { label: "Literary Fiction", bg: "#ffedb3", color: "#000" },
          { label: "Contemporary", bg: "#b6beff", color: "#000" },
        ],
      },
    ],
  },
  {
    month: "november-2025",
    label: "November 2025",
    books: [
      {
        id: "all-the-sinners-bleed",
        title: "All the Sinners Bleed",
        author: "S.A. Cosby",
        description: "A Black sheriff in rural Virginia investigates a series of ritualistic murders — deeply Southern, thrilling, and morally complex.",
        coverUrl: `${CDN}6a95de8306c788ece7de135f_crone.png`,
        bgColor: PALETTES.red.bg,
        textColor: PALETTES.red.text,
        tags: [
          { label: "Crime", bg: "#ff9d00", color: "#000" },
          { label: "Thriller", bg: "#3d3195", color: "#fff" },
        ],
      },
      {
        id: "north-woods",
        title: "North Woods",
        author: "Daniel Mason",
        description: "Through centuries of inhabitants in a single New England house, this visionary novel illuminates love, violence, nature, and history.",
        coverUrl: `${CDN}6a95dfdce3d0286b64aa3e9c_thesecretdinner.png`,
        bgColor: PALETTES.sage.bg,
        textColor: PALETTES.sage.text,
        tags: [
          { label: "Literary Fiction", bg: "#ffedb3", color: "#000" },
          { label: "Historical", bg: "#ff9d00", color: "#000" },
        ],
      },
      {
        id: "haunting-addie-larue",
        title: "The Invisible Life of Addie LaRue",
        author: "V.E. Schwab",
        description: "A woman makes a deal with the devil to live forever — but is cursed to be forgotten by everyone she meets. Until now.",
        coverUrl: `${CDN}6a95e0dc6d550cec545ea990_blacktail.png`,
        bgColor: PALETTES.plum.bg,
        textColor: PALETTES.plum.text,
        tags: [
          { label: "Fantasy", bg: "#c9f5b8", color: "#000" },
          { label: "Romance", bg: "#ffb3d9", color: "#000" },
        ],
      },
      {
        id: "night-circus",
        title: "The Night Circus",
        author: "Erin Morgenstern",
        description: "A mysterious competition between two young magicians set in a breathtaking black-and-white circus — pure enchantment.",
        coverUrl: `${CDN}6a95dd114588ec2d7b5f3852_earlymazywood.png`,
        bgColor: PALETTES.black.bg,
        textColor: PALETTES.black.text,
        tags: [
          { label: "Fantasy", bg: "#c9f5b8", color: "#000" },
          { label: "Romance", bg: "#ffb3d9", color: "#000" },
        ],
      },
      {
        id: "golden-gate",
        title: "The Golden Gate",
        author: "Vikram Seth",
        description: "A novel in sonnets about life, love, and death in 1980s San Francisco — audacious, witty, and utterly beautiful.",
        coverUrl: `${CDN}6a95de8306c788ece7de135f_crone.png`,
        bgColor: PALETTES.yellow.bg,
        textColor: PALETTES.yellow.text,
        tags: [
          { label: "Literary Fiction", bg: "#ffedb3", color: "#000" },
          { label: "Poetry Novel", bg: "#b6beff", color: "#000" },
        ],
      },
    ],
  },
  {
    month: "october-2025",
    label: "October 2025",
    books: [
      {
        id: "one-bad-night",
        title: "One Bad Night & Other Stories",
        author: "Kay Chronister et al.",
        description: "BookOrbit Book Club launched in October 2022, and we're celebrating our three-year anniversary with this exclusive anthology.",
        coverUrl: `${CDN}6a95dfdce3d0286b64aa3e9c_thesecretdinner.png`,
        bgColor: PALETTES.deepPurple.bg,
        textColor: PALETTES.deepPurple.text,
        badge: "BookOrbit Original",
        tags: [
          { label: "BookOrbit Original", bg: "#ff48a5", color: "#fff" },
          { label: "Horror", bg: "#000", color: "#fff" },
        ],
      },
      {
        id: "covenant-with-hell",
        title: "Covenant with Hell",
        author: "Priscilla Royal",
        description: "The fourteenth book in the medieval mystery series — complex plotting and vivid historical atmosphere.",
        coverUrl: `${CDN}6a95e0dc6d550cec545ea990_blacktail.png`,
        bgColor: PALETTES.rust.bg,
        textColor: PALETTES.rust.text,
        tags: [
          { label: "Mystery", bg: "#c9f5b8", color: "#000" },
          { label: "Historical", bg: "#ff9d00", color: "#000" },
        ],
      },
      {
        id: "dark-hours",
        title: "The Dark Hours",
        author: "Michael Connelly",
        description: "LAPD detective Renée Ballard works the graveyard shift and uncovers a serial killer — electrifying procedural thriller.",
        coverUrl: `${CDN}6a95dd114588ec2d7b5f3852_earlymazywood.png`,
        bgColor: PALETTES.navy.bg,
        textColor: PALETTES.navy.text,
        tags: [
          { label: "Crime", bg: "#ff9d00", color: "#000" },
          { label: "Thriller", bg: "#3d3195", color: "#fff" },
        ],
      },
      {
        id: "lessons-in-chemistry",
        title: "Lessons in Chemistry",
        author: "Bonnie Garmus",
        description: "A female chemist in the 1960s becomes the host of a cooking show — subversive, hilarious, and unforgettable.",
        coverUrl: `${CDN}6a95de8306c788ece7de135f_crone.png`,
        bgColor: PALETTES.orange.bg,
        textColor: PALETTES.orange.text,
        tags: [
          { label: "Historical", bg: "#ff9d00", color: "#000" },
          { label: "Humour", bg: "#b6beff", color: "#000" },
        ],
      },
      {
        id: "good-material",
        title: "Good Material",
        author: "Dolly Alderton",
        description: "The breakup novel from the author of Everything I Know About Love — painfully funny and achingly real.",
        coverUrl: `${CDN}6a95dfdce3d0286b64aa3e9c_thesecretdinner.png`,
        bgColor: PALETTES.pink.bg,
        textColor: PALETTES.pink.text,
        tags: [
          { label: "Romance", bg: "#ffb3d9", color: "#000" },
          { label: "Contemporary", bg: "#b6beff", color: "#000" },
        ],
      },
    ],
  },
];

// Archwright / BookOrbit Exclusive
export const exclusiveBook = {
  id: "one-bad-night-exclusive",
  title: "One Bad Night & Other Stories",
  subtitle: "BookOrbit Original",
  authors: "Kay Chronister, Del Sandeen, Kylie Lee Baker, Rachel Harrison, CJ Leede, Jennifer Thorne, S.A. Barnes, Stephen Graham Jones",
  description: "BookOrbit Book Club launched in October 2022, and we're celebrating our three-year anniversary with this exclusive anthology featuring some of the best voices in contemporary horror.",
  coverUrl: `${CDN}6a95dfdce3d0286b64aa3e9c_thesecretdinner.png`,
  bgColor: "#f7e4f0",
  accentColor: "#e83d84",
  tags: ["BookOrbit Original", "Horror"],
};

// Members' Choice Winners
export interface MembersChoiceBook {
  rank: 1 | 2 | 3;
  title: string;
  author: string;
  coverUrl: string;
  bgColor: string;
  year: string;
  emoji: string;
}

export const membersChoiceWinners: MembersChoiceBook[] = [
  {
    rank: 1,
    title: "Orbital",
    author: "Samantha Harvey",
    coverUrl: `${CDN}6a95de8306c788ece7de135f_crone.png`,
    bgColor: "#006877",
    year: "2025",
    emoji: "🥇",
  },
  {
    rank: 2,
    title: "James",
    author: "Percival Everett",
    coverUrl: `${CDN}6a95dfdce3d0286b64aa3e9c_thesecretdinner.png`,
    bgColor: "#1d2c5e",
    year: "2025",
    emoji: "🥈",
  },
  {
    rank: 3,
    title: "The Women",
    author: "Kristin Hannah",
    coverUrl: `${CDN}6a95e0dc6d550cec545ea990_blacktail.png`,
    bgColor: "#c13a1f",
    year: "2025",
    emoji: "🥉",
  },
];

// Books FAQ
export const booksFAQ = [
  {
    q: "When do new books drop each month?",
    a: "New books are released on the 1st of every month. You'll get an email notification as soon as they go live so you can pick your reads before the boxes ship.",
  },
  {
    q: "How many books can I choose each month?",
    a: "You can choose up to 3 hardcover books per month. You're never locked in — if you love a particular month's selection, add all three. If nothing grabs you, simply skip.",
  },
  {
    q: "What genres are available?",
    a: "We offer a wide range: Literary Fiction, Horror, Romance, Thriller, Fantasy, Sci-Fi, Historical Fiction, Gothic, Magical Realism, Contemporary Fiction, and more. We prioritise diverse voices and surprising new releases.",
  },
  {
    q: "Can I skip a month?",
    a: "Absolutely. You can skip any month from your account dashboard before the billing date. No penalty, no questions asked.",
  },
  {
    q: "Where do you ship?",
    a: "We currently ship to the United States and Canada. All books are shipped as hardcovers with free shipping included in your membership.",
  },
  {
    q: "What makes BookOrbit Originals special?",
    a: "BookOrbit Originals are exclusive anthologies and editions curated specifically for our members. They feature stories from some of the best voices in contemporary fiction and horror, and they can't be found anywhere else.",
  },
];
