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

// Update the existing GameConfig interface if needed
export interface GameConfig {
  // ... existing properties ...
  numberOfQuestions: number; // Make sure this property exists
  // Add any other properties that might be needed
}

// ... any other existing types ...