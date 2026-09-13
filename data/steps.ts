export interface Step {
  id: number;
  title: string;
  description: string;
  icon: string;
  color: string;
  rotation: number;
}

export const steps: Step[] = [
  {
    id: 1,
    title: "Pick your books",
    description: "Choose 1 to 3 curated hardcovers each month from our expert-selected collection.",
    icon: "📚",
    color: "#A4F6F8",
    rotation: -3,
  },
  {
    id: 2,
    title: "We box it up",
    description: "Each book is beautifully packaged in our signature Aardvark box with exclusive extras.",
    icon: "📦",
    color: "#FFDDFB",
    rotation: 2,
  },
  {
    id: 3,
    title: "Delivered to you",
    description: "Free shipping right to your doorstep in the USA & Canada. Unbox the magic.",
    icon: "🚀",
    color: "#FFD24A",
    rotation: -1.5,
  },
  {
    id: 4,
    title: "Read & discuss",
    description: "Join the community conversation. Rate, review, and connect with fellow readers.",
    icon: "💬",
    color: "#C27AE8",
    rotation: 3,
  },
];
