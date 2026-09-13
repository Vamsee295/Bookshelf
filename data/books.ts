export interface Book {
  id: string;
  title: string;
  author: string;
  genre: string;
  year: number;
  description: string;
  color: string;
  coverGradient: [string, string];
  featured: boolean;
  badge?: string;
  rating?: number;
}

export const books: Book[] = [
  {
    id: "under-loch-and-key",
    title: "Under Loch and Key",
    author: "Lana Ferguson",
    genre: "Romance",
    year: 2024,
    description: "A charming Scottish romance where love can be a real loch-mess. When two rival treasure hunters clash at a Highland estate, sparks fly faster than whisky pours.",
    color: "#4ECDC4",
    coverGradient: ["#4ECDC4", "#2C7A7B"],
    featured: true,
    badge: "Staff Pick",
    rating: 4.5,
  },
  {
    id: "perfect-fit",
    title: "Perfect Fit",
    author: "Clare Gilmore",
    genre: "Contemporary Fiction",
    year: 2024,
    description: "Try love on for size. A witty, heartfelt story about finding your perfect match when you least expect it, set against the backdrop of a boutique fashion house.",
    color: "#FF6B8A",
    coverGradient: ["#FF6B8A", "#C53D5B"],
    featured: true,
    badge: "New Release",
    rating: 4.3,
  },
  {
    id: "truth-according-to-ember",
    title: "The Truth According to Ember",
    author: "Danica Nava",
    genre: "Contemporary Fiction",
    year: 2024,
    description: "Liar liar heart on fire. A bold debut novel exploring identity, family secrets, and the lies we tell ourselves to survive.",
    color: "#9B59B6",
    coverGradient: ["#C27AE8", "#7D3C98"],
    featured: true,
    badge: "Exclusive",
    rating: 4.7,
  },
  {
    id: "lady-macbeth",
    title: "Lady Macbeth",
    author: "Ava Reid",
    genre: "Gothic Fiction",
    year: 2024,
    description: "A haunting reimagining of Shakespeare's most iconic villain. Dark, atmospheric, and utterly mesmerizing — the untold story of Lady Macbeth.",
    color: "#2C3E50",
    coverGradient: ["#34495E", "#1A252F"],
    featured: true,
    badge: "Members' Choice",
    rating: 4.8,
  },
  {
    id: "rouge",
    title: "Rouge",
    author: "Mona Awad",
    genre: "Horror",
    year: 2023,
    description: "A darkly seductive fairy tale about beauty, mothers, daughters, and the monster at the heart of our obsession with skincare and surfaces.",
    color: "#E74C3C",
    coverGradient: ["#FF6B6B", "#C0392B"],
    featured: false,
    badge: "Award Winner",
    rating: 4.4,
  },
  {
    id: "starling-house",
    title: "Starling House",
    author: "Alix E. Harrow",
    genre: "Fantasy",
    year: 2023,
    description: "A gorgeously Gothic novel about a crumbling haunted house, an iron-willed woman, and the dark secrets that bind them together across time.",
    color: "#1ABC9C",
    coverGradient: ["#26D0A1", "#0E6655"],
    featured: false,
    rating: 4.6,
  },
  {
    id: "wandering-stars",
    title: "Wandering Stars",
    author: "Tommy Orange",
    genre: "Literary Fiction",
    year: 2024,
    description: "The stunning sequel to There There, tracing generations of a Native American family through violence, survival, art, and the gravity of inheritance.",
    color: "#3498DB",
    coverGradient: ["#5DADE2", "#1B4F72"],
    featured: false,
    rating: 4.5,
  },
  {
    id: "chain-gang",
    title: "Chain-Gang All-Stars",
    author: "Nana Kwame Adj.-Brenyah",
    genre: "Literary Fiction",
    year: 2023,
    description: "An audacious, heart-pounding debut set in a dystopian America where prisoners fight for their freedom in televised gladiatorial combat.",
    color: "#27AE60",
    coverGradient: ["#2ECC71", "#1E8449"],
    featured: false,
    badge: "Critics' Choice",
    rating: 4.2,
  },
];

export const genres = [
  "Horror",
  "Science Fiction",
  "Romance",
  "Thriller",
  "Literary Fiction",
  "Fantasy",
  "Gothic Fiction",
  "Historical Fiction",
  "Magical Realism",
  "Contemporary Fiction",
  "and more!",
];

export const benefits = [
  { label: "Range of genres", color: "#A4F6F8", rotation: -3 },
  { label: "Free shipping", color: "#FFD24A", rotation: 2 },
  { label: "Affordable", color: "#FD48F2", rotation: -1.5 },
  { label: "High quality hardcovers", color: "#FFDDFB", rotation: 3 },
  { label: "Curated books", color: "#A4F6F8", rotation: -2.5 },
  { label: "No commitments", color: "#FFD24A", rotation: 1.5 },
  { label: "Expert picks", color: "#FD48F2", rotation: -4 },
  { label: "Community", color: "#FFDDFB", rotation: 2.5 },
];
