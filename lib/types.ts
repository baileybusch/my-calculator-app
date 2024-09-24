export interface GameConfig {
  operation: 'multiplication' | 'division' | 'addition' | 'subtraction';
  difficulty: 'easy' | 'medium' | 'hard';
  numQuestions: number;
  timeLimit: number;
}

export interface Question {
  num1: number;
  num2: number;
  operator: string;
  answer: number;
}

export interface GameResults {
  time: number;
  score: number;
  totalQuestions: number;
}

export type GameState = 'config' | 'game' | 'results';