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
    title: "Musical Instruments",
    lead: "Bring out the instrument's true voice without years of waiting.",
    body: "Strad Plus lets an instrument sound blended and yet clearly separated between its strings, with a clean, clear tone. It is a new step for makers, particularly of instruments built from wood.",
    examples: "From string instruments and pianos to any wooden musical instrument.",
    figure: { n: 3, m: 5 },
  },
  {
    id: "interiors",
    title: "Interiors & Architecture",
    lead: "Unlock better acoustic performance wherever wood shapes the listening experience.",
    body: "Wooden furniture such as speaker cabinets, tables and wardrobes, and large spaces such as churches, recording studios, opera houses and conference centres, can all be shaped by Strad Plus. The result is a new quality in daily life, work and entertainment.",
    examples:
      "From speaker cabinets and furniture to studios, churches, opera houses, conference centres, and beyond.",
    figure: { n: 2, m: 4 },
  },
  {
    id: "sport",
    title: "Professional Sport",
    lead: "Strengthen the connection between athlete and equipment.",
    body: "Applied to professional playing surfaces and equipment, the technology noticeably improves the sensation of bounce, impact and the vibration that travels from the equipment to the hand. That precision in every touch helps athletes get the most from their performance.",
    examples:
      "From billiard cues, table tennis rackets and bowling lanes to any sporting equipment where wood influences performance.",
    figure: { n: 4, m: 6 },
  },
];
