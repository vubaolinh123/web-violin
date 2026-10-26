export interface Application {
  id: string;
  title: string;
  lead: string;
  body: string;
  examples: string;
  figure: { n: number; m: number };
}

export const applications: Application[] = [
  {
    id: "instruments",
    title: "Musical instruments",
    lead: "A new instrument does not need years to open up.",
    body: "Strad Plus lets an instrument sound blended and yet clearly separated between its strings, with a clean, clear tone. It is a new step for makers, particularly of instruments built from wood.",
    examples: "Violin, viola, violoncello, guitar, piano",
    figure: { n: 3, m: 5 },
  },
  {
    id: "interiors",
    title: "Interiors & architecture",
    lead: "From a loudspeaker cabinet to an opera house.",
    body: "Wooden furniture such as speaker cabinets, tables, beds and wardrobes, and large spaces such as churches, recording studios, opera houses and conference centres, can all be shaped by the formula. The result is a new quality in daily life, work and entertainment.",
    examples: "Speaker cabinets, furniture, churches, studios, opera houses, conference centres",
    figure: { n: 2, m: 4 },
  },
  {
    id: "sport",
    title: "Professional sport",
    lead: "A truer feel between the athlete and the equipment.",
    body: "Applied to professional playing surfaces and equipment, the technology noticeably improves the sensation of bounce, impact and the vibration that travels from the equipment to the hand. That precision in every touch helps athletes get the most from their performance.",
    examples: "Table tennis, billiard cues, bowling lanes",
    figure: { n: 4, m: 6 },
  },
];
