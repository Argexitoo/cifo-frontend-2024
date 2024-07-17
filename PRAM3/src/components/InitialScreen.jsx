import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import SettingsContext from '../context/SettingsContext';

const InitialScreen = () => {
  const { settings, updateSetting } = useContext(SettingsContext);
  const navigate = useNavigate();

  const handleStartGame = () => {
    navigate('/questions');
  };

  return (
    <div className='initial-screen'>
      <h1>Settings game</h1>
      <div className='settings-container'>
        <div className='setting-column'>
          <label>Difficulty:</label>
          <button
            onClick={() => updateSetting('difficulty', 'easy')}
            className={settings.difficulty === 'easy' ? 'selected' : ''}
          >
            Easy
          </button>
          <button
            onClick={() => updateSetting('difficulty', 'medium')}
            className={settings.difficulty === 'medium' ? 'selected' : ''}
          >
            Medium
          </button>
          <button
            onClick={() => updateSetting('difficulty', 'hard')}
            className={settings.difficulty === 'hard' ? 'selected' : ''}
          >
            Hard
          </button>
        </div>
        <div className='setting-column'>
          <label>Category:</label>
          <button
            onClick={() => updateSetting('category', '21')}
            className={settings.category === '21' ? 'selected' : ''}
          >
            Sport
          </button>
          <button
            onClick={() => updateSetting('category', '9')}
            className={settings.category === '9' ? 'selected' : ''}
          >
            General knowledge
          </button>
        </div>
        <div className='setting-column'>
          <label>Number of questions:</label>
          <button
            onClick={() => updateSetting('number', '5')}
            className={settings.number === '5' ? 'selected' : ''}
          >
            5
          </button>
          <button
            onClick={() => updateSetting('number', '10')}
            className={settings.number === '10' ? 'selected' : ''}
          >
            10
          </button>
          <button
            onClick={() => updateSetting('number', '15')}
            className={settings.number === '15' ? 'selected' : ''}
          >
            15
          </button>
        </div>
      </div>
      <div className='start-button-container'>
        <button onClick={handleStartGame}>Start</button>
      </div>
    </div>
  );
};

export default InitialScreen;
