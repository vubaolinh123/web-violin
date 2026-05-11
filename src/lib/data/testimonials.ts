export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  location: string;
  rating: number;
  instrument: string;
  avatar: string;
}

export const testimonials: Testimonial[] = [
  {
    id: "t-001",
    quote: "The Stradivari Inspired Master Violin exceeded every expectation. The projection in my concert hall is extraordinary — my colleagues keep asking what I changed.",
    author: "Elena Vasquez",
    location: "New York, NY",
    rating: 5,
    instrument: "Stradivari Inspired Master Violin",
    avatar: "https://picsum.photos/seed/avatar01/200/200",
  },
  {
    id: "t-002",
    quote: "I was skeptical about buying online, but the 14-day trial gave me confidence. The Conservatory Student violin plays far above its price point. My daughter absolutely loves it.",
    author: "James Whitmore",
    location: "Chicago, IL",
    rating: 5,
    instrument: "Student Conservatory Violin",
    avatar: "https://picsum.photos/seed/avatar02/200/200",
  },
  {
    id: "t-003",
    quote: "The Pernambuco bow transformed my playing immediately. The spiccato clarity I've been chasing for years — it was the bow all along. Worth every penny.",
    author: "Sophie Marchand",
    location: "Paris, France",
    rating: 5,
    instrument: "Pernambuco Master Bow",
    avatar: "https://picsum.photos/seed/avatar03/200/200",
  },
  {
    id: "t-004",
    quote: "Arco's customer service is second to none. When I had a question about humidity settings, their luthier called me back within the hour. That level of care is rare.",
    author: "Hiroshi Tanaka",
    location: "Tokyo, Japan",
    rating: 5,
    instrument: "Stretto Humidity Control System",
    avatar: "https://picsum.photos/seed/avatar04/200/200",
  },
  {
    id: "t-005",
    quote: "The baroque gut-strung violin is exactly what I needed for my period ensemble. The sound is warm, immediate and responsive to subtle bow changes — authentic in every way.",
    author: "Margret Hofmann",
    location: "Vienna, Austria",
    rating: 5,
    instrument: "Baroque Gut-Strung Violin",
    avatar: "https://picsum.photos/seed/avatar05/200/200",
  },
  {
    id: "t-006",
    quote: "As a violin teacher, I recommend Arco's student outfits to all my beginners. The setup quality means students aren't fighting their instrument — they're learning music.",
    author: "Rachel Kim",
    location: "Los Angeles, CA",
    rating: 4,
    instrument: "Beginner Outfit — Full Size",
    avatar: "https://picsum.photos/seed/avatar06/200/200",
  },
  {
    id: "t-007",
    quote: "The carbon fibre bow survived a tour through Southeast Asia in high humidity without a single issue. Consistent, reliable, and honestly sounds better than my old Brazilwood.",
    author: "Marcus Bell",
    location: "Sydney, Australia",
    rating: 5,
    instrument: "Carbon Fibre Performance Bow",
    avatar: "https://picsum.photos/seed/avatar07/200/200",
  },
  {
    id: "t-008",
    quote: "I purchased the Contemporary Italian Workshop Violin and was moved to tears the first time I played it. There is a soul in this instrument that photographs cannot capture.",
    author: "Natalia Ostrova",
    location: "Moscow, Russia",
    rating: 5,
    instrument: "Contemporary Italian Workshop Violin",
    avatar: "https://picsum.photos/seed/avatar08/200/200",
  },
];
