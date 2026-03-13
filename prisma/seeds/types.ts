export type SeedQuestion = {
  id: string;
  type: 'vocabulary' | 'grammar';
  content: string;
  choices: string[];
  answer: string;
  explanation: string;
};
