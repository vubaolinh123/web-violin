export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  photo: string;
  specialty: string;
}

export const team: TeamMember[] = [
  {
    id: "tm-001",
    name: "Giovanni Ferrara",
    role: "Head Luthier & Founder",
    bio: "Giovanni spent fifteen years training under master luthiers in Cremona before founding Arco Violins in 2008. His instruments have been performed in Carnegie Hall, the Royal Albert Hall, and the Vienna Musikverein. He oversees every instrument that bears the Arco Atelier name.",
    photo: "https://picsum.photos/seed/team01/400/500",
    specialty: "Violin making, varnish formulation",
  },
  {
    id: "tm-002",
    name: "Linh Nguyen",
    role: "Master Bow Maker",
    bio: "Linh trained at the Mittenwald School of Violin Making before joining Arco in 2014. She is responsible for all bow selection, making and rehearing, and has developed our proprietary tensioning protocol that is now used across the entire bow range.",
    photo: "https://picsum.photos/seed/team02/400/500",
    specialty: "Bow making & rehearing, wood selection",
  },
  {
    id: "tm-003",
    name: "Clara Bauer",
    role: "Acoustic Consultant",
    bio: "Clara holds a doctorate in musical acoustics from the Technical University of Munich. She applies scientific measurement techniques to every instrument that passes through our workshop, ensuring that each violin meets quantifiable tonal benchmarks before delivery.",
    photo: "https://picsum.photos/seed/team03/400/500",
    specialty: "Acoustic analysis, soundpost adjustment",
  },
  {
    id: "tm-004",
    name: "David Osei",
    role: "Customer Relations & Education",
    bio: "A former professional violinist with the Atlanta Symphony Orchestra, David joined Arco to bridge the gap between makers and players. He leads our instrument trial programme and provides personalised consultation to every serious buyer — ensuring the instrument and player are truly matched.",
    photo: "https://picsum.photos/seed/team04/400/500",
    specialty: "Player consultation, instrument matching",
  },
];
