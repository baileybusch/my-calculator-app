import { GameConfig, Question } from './types';

export function generateQuestion(config: GameConfig): Question {
  let num1: number, num2: number;

  switch (config.difficulty) {
    case 'easy':
      num1 = Math.floor(Math.random() * 5) + 1; // 1 to 5
      num2 = Math.floor(Math.random() * 5) + 1; // 1 to 5
      break;
    case 'medium':
      num1 = Math.floor(Math.random() * 7) + 3; // 3 to 9
      num2 = Math.floor(Math.random() * 7) + 3; // 3 to 9
      break;
    case 'hard':
      num1 = Math.floor(Math.random() * 10) + 5; // 5 to 14
      num2 = Math.floor(Math.random() * 10) + 5; // 5 to 14
      break;
    default:
      num1 = Math.floor(Math.random() * 10) + 1;
      num2 = Math.floor(Math.random() * 10) + 1;
  }

  let answer: number;
  let operator: string;

  switch (config.operation) {
    case 'addition':
      answer = num1 + num2;
      operator = '+';
      break;
    case 'subtraction':
      // Ensure the result is non-negative
      if (num1 < num2) [num1, num2] = [num2, num1];
      answer = num1 - num2;
      operator = '-';
      break;
    case 'multiplication':
      answer = num1 * num2;
      operator = '×';
      break;
    case 'division':
      // Ensure the division results in a whole number
      answer = num1;
      num1 = num1 * num2;
      operator = '÷';
      break;
    default:
      throw new Error('Invalid operation');
  }

  return { num1, num2, operator, answer };
}

export function checkAnswer(question: Question, userAnswer: number): boolean {
  return question.answer === userAnswer;
}