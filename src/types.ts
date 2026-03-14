export type Question = {
  id: string;
  type: 'vocabulary' | 'grammar';
  content: string;
  choices: string[];
  answer: string;
  explanation: string;
};

export type Dashboard = {
  reviewCount: number;
  newQuotaRemaining: number;
  answeredTodayCount: number;
  streak: number;
};
