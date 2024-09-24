import React, { useState, useEffect, useCallback } from 'react';
import { Question, GameConfig } from '../lib/types';
import { Button } from './ui/button';
import { generateQuestion, checkAnswer } from '../lib/mathUtils';

interface GameScreenProps {
  config: GameConfig;
  onGameComplete: (time: number, score: number, totalQuestions: number) => void;
  onEnd: () => void;
}

const GameScreen: React.FC<GameScreenProps> = ({ config, onGameComplete, onEnd }) => {
  const [currentQuestion, setCurrentQuestion] = useState<Question>(generateQuestion(config));
  const [userAnswer, setUserAnswer] = useState('');
  const [score, setScore] = useState(0);
  const [questionNumber, setQuestionNumber] = useState(1);
  const [timeLeft, setTimeLeft] = useState(config.timeLimit);
  const [startTime] = useState(Date.now());
  const [isPaused, setIsPaused] = useState(false);

  const handleGameEnd = useCallback(() => {
    const endTime = Date.now();
    const timeTaken = (endTime - startTime) / 1000;
    onGameComplete(timeTaken, score, config.numQuestions);
  }, [onGameComplete, score, startTime, config.numQuestions]);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (!isPaused) {
      timer = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 1) {
            clearInterval(timer);
            handleGameEnd();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [isPaused, handleGameEnd]);

  useEffect(() => {
    if (questionNumber > config.numQuestions) {
      handleGameEnd();
    }
  }, [questionNumber, config.numQuestions, handleGameEnd]);

  const handleSubmit = () => {
    if (checkAnswer(currentQuestion, parseInt(userAnswer))) {
      setScore((prev) => prev + 1);
    }
    setUserAnswer('');
    setQuestionNumber((prev) => prev + 1);
    setCurrentQuestion(generateQuestion(config));
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSubmit();
    }
  };

  return (
    <div className="space-y-4">
      <div className="flex justify-between">
        <div>Score: {score}</div>
        <div>Time Left: {timeLeft}s</div>
        <div>Question: {questionNumber}/{config.numQuestions}</div>
      </div>
      <div className="text-2xl font-bold text-center">
        {currentQuestion.num1} {currentQuestion.operator} {currentQuestion.num2} = ?
      </div>
      <input
        type="number"
        value={userAnswer}
        onChange={(e) => setUserAnswer(e.target.value)}
        onKeyPress={handleKeyPress}
        className="w-full p-2 border rounded text-center text-xl"
        autoFocus
        disabled={isPaused}
      />
      <div className="flex space-x-2">
        <Button onClick={handleSubmit} className="flex-1" disabled={isPaused}>Submit</Button>
        <Button onClick={() => setIsPaused(!isPaused)} className="flex-1">
          {isPaused ? 'Resume' : 'Pause'}
        </Button>
        <Button onClick={onEnd} className="flex-1">End Game</Button>
      </div>
    </div>
  );
}

export default GameScreen;