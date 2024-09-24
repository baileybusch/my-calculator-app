"use client"; // Add this line

import React, { useState } from 'react';
import ConfigMenu from './ConfigMenu';
import GameScreen from './GameScreen';
import ResultsScreen from './ResultsScreen';
import { GameConfig, GameState, GameResults, LoggedAnswer } from '../lib/types';
import styles from './MathPracticeApp.module.css';

const MathPracticeApp: React.FC = () => {
  const [config, setConfig] = useState<GameConfig | null>(null);
  const [gameState, setGameState] = useState<GameState>('config');
  const [gameResults, setGameResults] = useState<GameResults | null>(null);

  const handleStartGame = (newConfig: GameConfig) => {
    setConfig(newConfig);
    setGameState('game');
  };

  const handleGameComplete = (time: number, score: number, totalQuestions: number, loggedAnswers: LoggedAnswer[]) => {
    setGameResults({ time, score, totalQuestions, loggedAnswers });
    setGameState('results');
  };

  const handlePlayAgain = () => {
    setGameState('game');
  };

  const handleGoToConfig = () => {
    setGameState('config');
  };

  return (
    <div className={styles.mathPracticeApp}>
      {gameState === 'config' && <ConfigMenu onStartGame={handleStartGame} />}
      {gameState === 'game' && config && (
        <GameScreen config={config} onGameComplete={handleGameComplete} onEnd={handleGoToConfig} />
      )}
      {gameState === 'results' && gameResults && (
        <ResultsScreen
          time={gameResults.time}
          score={gameResults.score}
          totalQuestions={gameResults.totalQuestions}
          loggedAnswers={gameResults.loggedAnswers}
          onPlayAgain={handlePlayAgain}
          onGoToConfig={handleGoToConfig}
        />
      )}
    </div>
  );
};

export default MathPracticeApp;