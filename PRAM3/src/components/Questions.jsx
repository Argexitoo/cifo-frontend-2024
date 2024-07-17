import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SettingsContext from '../context/SettingsContext';
import Question from './Question';
import Modal from './Modal';

const Questions = () => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [correctAnswersCount, setCorrectAnswersCount] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const { settings } = useContext(SettingsContext);
  const navigate = useNavigate();

  const apiUrl = 'https://opentdb.com/api.php?type=multiple';

  useEffect(() => {
    const fetchData = async () => {
      const filterNumber = `&amount=${settings.number}`;
      const filterCategory = `&category=${settings.category}`;
      const filterDifficulty = `&difficulty=${settings.difficulty}`;
      const response = await fetch(`${apiUrl}${filterNumber}${filterCategory}${filterDifficulty}`);
      const data = await response.json();
      setQuestions(data.results || []);
      console.log(
        filterNumber
      )
    };

    fetchData();
  }, [settings]);

  const handleNextQuestion = (isCorrect) => {
    if (isCorrect) {
      setCorrectAnswersCount((prevCount) => prevCount + 1);
    }
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setShowModal(true);
    }
  };

  const handleRestart = () => {
    setCurrentQuestionIndex(0);
    setCorrectAnswersCount(0);
    setShowModal(false);
  };

  const handleGoHome = () => {
    navigate('/');
  };

  if (questions.length === 0) {
    return <p className='loading'>Loading...</p>;
  }

  return (
    <div className='bg-quiz'>
      <div className='container questions'>
        <div className='question-counter'>
        Question {Math.min(currentQuestionIndex + 1, questions.length)}/{questions.length}
        </div>
        {currentQuestionIndex < questions.length ? (
          <Question
            key={currentQuestionIndex}
            {...questions[currentQuestionIndex]}
            onNextQuestion={handleNextQuestion}
          />
        ) : (
          <p>You have answered all the questions.</p>
        )}
        {showModal && (
          <Modal>
            <p>You have answered a total of {correctAnswersCount} questions correctly.</p>
            <button onClick={handleRestart}>Play again</button>
            <button onClick={handleGoHome}>Return to home</button>
          </Modal>
        )}
      </div>
    </div>
  );
};

export default Questions;
