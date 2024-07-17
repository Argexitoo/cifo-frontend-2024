import { useState } from 'react';

const Question = ({ category, type, difficulty, question, correct_answer, incorrect_answers, onNextQuestion }) => {
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  const sanitize = (text) =>
    text
      .replaceAll('&quot;', '"')
      .replaceAll('&#039;', "'")
      .replaceAll('&amp;', '&')
      .replaceAll('&deg;', 'º')
      .replaceAll('&shy;', '\u00AD');

  const answers = Array.isArray(incorrect_answers) ? [...incorrect_answers, correct_answer] : [correct_answer];

  const shuffledAnswers = answers.sort(() => Math.random() - 0.5);

  const handleAnswer = (answer) => {
    setSelectedAnswer(answer);
    setTimeout(() => {
      onNextQuestion(answer === correct_answer);
      setSelectedAnswer(null);
    }, 0.1);
  };

  return (
    <div className='card'>
      <h2>{category}</h2>
      <p className='difficulty'>{difficulty}</p>
      <p className='question'>{sanitize(question)}</p>
      {shuffledAnswers.map((answer) => (
        <button
          key={answer}
          onClick={() => handleAnswer(answer)}
          className={answer === selectedAnswer ? 'selected' : ''}
        >
          {sanitize(answer)}
        </button>
      ))}
    </div>
  );
};

export default Question;
