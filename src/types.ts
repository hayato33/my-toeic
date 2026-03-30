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

export type DailyActivity = {
  date: string;
  correct: number;
  incorrect: number;
  total: number;
};

export type TypeStat = {
  type: 'vocabulary' | 'grammar';
  label: string;
  total: number;
  correct: number;
  accuracy: number;
};

export type ProgressData = {
  dailyActivity: DailyActivity[];
  typeStats: TypeStat[];
  overall: {
    total: number;
    correct: number;
    accuracy: number;
  };
};
