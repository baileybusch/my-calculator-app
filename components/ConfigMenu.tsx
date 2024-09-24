import React, { useState } from 'react';
import { GameConfig } from '../lib/types';
import { Button } from './ui/button';
import styles from './ConfigMenu.module.css';

interface ConfigMenuProps {
  onStartGame: (config: GameConfig) => void;
}

const ConfigMenu: React.FC<ConfigMenuProps> = ({ onStartGame }) => {
  const [config, setConfig] = useState<GameConfig>({
    operation: 'multiplication',
    difficulty: 'easy',
    numQuestions: 10,
    timeLimit: 60
  });

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {
    const { name, value } = e.target;
    setConfig(prev => ({ ...prev, [name]: name === 'numQuestions' || name === 'timeLimit' ? parseInt(value) : value }));
  };

  const handleStart = () => {
    onStartGame(config);
  };

  return (
    <div className={styles.configMenu}>
      <h1 className={styles.logo}>Math Practice</h1>
      <div className={styles.formContainer}>
        <div>
          <label htmlFor="operation" className="block mb-1">Operation:</label>
          <select
            id="operation"
            name="operation"
            value={config.operation}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          >
            <option value="multiplication">Multiplication</option>
            <option value="division">Division</option>
            <option value="addition">Addition</option>
            <option value="subtraction">Subtraction</option>
          </select>
        </div>
        <div>
          <label htmlFor="difficulty" className="block mb-1">Difficulty:</label>
          <select
            id="difficulty"
            name="difficulty"
            value={config.difficulty}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          >
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
          </select>
        </div>
        <div>
          <label htmlFor="numQuestions" className="block mb-1">Number of Questions:</label>
          <input
            type="number"
            id="numQuestions"
            name="numQuestions"
            value={config.numQuestions}
            onChange={handleChange}
            min="1"
            max="50"
            className="w-full p-2 border rounded"
          />
        </div>
        <div>
          <label htmlFor="timeLimit" className="block mb-1">Time Limit (seconds):</label>
          <input
            type="number"
            id="timeLimit"
            name="timeLimit"
            value={config.timeLimit}
            onChange={handleChange}
            min="10"
            max="300"
            className="w-full p-2 border rounded"
          />
        </div>
      </div>
      <Button onClick={handleStart} className={styles.startButton}>Start Game</Button>
    </div>
  );
};

export default ConfigMenu;