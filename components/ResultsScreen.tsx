import React, { useState, useEffect } from 'react';
import styles from './ResultsScreen.module.css';
import { Button } from './ui/button';
import Confetti from 'react-confetti';
import { LoggedAnswer } from '../lib/types';

interface ResultsScreenProps {
  time: number;
  score: number;
  totalQuestions: number;
  loggedAnswers: LoggedAnswer[];
  onPlayAgain: () => void;
  onGoToConfig: () => void;
}

const ResultsScreen: React.FC<ResultsScreenProps> = ({
  time,
  score,
  totalQuestions,
  loggedAnswers,
  onPlayAgain,
  onGoToConfig,
}) => {
  const [windowDimension, setWindowDimension] = useState({ width: window.innerWidth, height: window.innerHeight });
  const [showConfetti, setShowConfetti] = useState(false);
  const [showAnswers, setShowAnswers] = useState(false);
  const percentage = Math.round((score / totalQuestions) * 100);

  const detectSize = () => {
    setWindowDimension({ width: window.innerWidth, height: window.innerHeight });
  };

  useEffect(() => {
    window.addEventListener('resize', detectSize);
    return () => {
      window.removeEventListener('resize', detectSize);
    };
  }, []);

  useEffect(() => {
    if (percentage === 100) {
      setShowConfetti(true);
    }
  }, [percentage]);

  return (
    <div className={styles.resultsScreenContainer}>
      {showConfetti && (
        <Confetti
          width={windowDimension.width}
          height={windowDimension.height}
          recycle={false}
          numberOfPieces={200}
          gravity={0.1}
          initialVelocityY={10}
          style={{ position: 'fixed', top: 0, left: 0, zIndex: 1000 }}
        />
      )}
      <div className={styles.resultsScreen}>
        <h2 className={styles.title}>Results</h2>
        <p className={styles.resultItem}>Time taken: {time.toFixed(2)} seconds</p>
        <p className={styles.resultItem}>Score: {score} / {totalQuestions}</p>
        <p className={styles.percentage}>{percentage}%</p>
        <Button onClick={() => setShowAnswers(!showAnswers)} className={styles.toggleButton}>
          {showAnswers ? 'Hide Answers' : 'Show Answers'}
        </Button>
        {showAnswers && (
          <div className={styles.tableContainer}>
            <table className={styles.answerTable}>
              <thead>
                <tr>
                  <th>Question</th>
                  <th>Your Answer</th>
                  <th>Correct Answer</th>
                </tr>
              </thead>
              <tbody>
                {loggedAnswers.map((answer, index) => (
                  <tr key={index} className={answer.isCorrect ? styles.correctAnswer : styles.incorrectAnswer}>
                    <td>{answer.question}</td>
                    <td>{answer.userAnswer}</td>
                    <td>{answer.correctAnswer}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
        <div className={styles.buttonContainer}>
          <Button onClick={onPlayAgain} className={styles.button}>Practice Again</Button>
          <Button onClick={onGoToConfig} className={styles.button}>Change Settings</Button>
        </div>
      </div>
    </div>
  );
};

export default ResultsScreen;