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
  loggedAnswers: LoggedAnswer[];
}

export type GameState = 'config' | 'game' | 'results';

export interface LoggedAnswer {
  question: string;
  userAnswer: number;
  correctAnswer: number;
  isCorrect: boolean;
}