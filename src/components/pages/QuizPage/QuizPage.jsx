import quiz1 from '../../../assets/images/random_quiz/quiz1.png';
import quiz2 from '../../../assets/images/random_quiz/quiz2.png';
import quiz3 from '../../../assets/images/random_quiz/quiz3.png';
import quiz4 from '../../../assets/images/random_quiz/quiz4.png';
import quiz5 from '../../../assets/images/random_quiz/quiz5.png';
import quiz6 from '../../../assets/images/random_quiz/quiz6.png';
import quiz7 from '../../../assets/images/random_quiz/quiz7.png';
import quiz8 from '../../../assets/images/random_quiz/quiz8.png';
import quiz9 from '../../../assets/images/random_quiz/quiz9.png';
import quiz10 from '../../../assets/images/random_quiz/quiz10.png';

import './QuizPage.scss';
import { useEffect, useMemo, useState } from 'react';

const sample = [
  {
    id: '00001',
    path: quiz1,
    answer: '사자',
  },
  {
    id: '00002',
    path: quiz2,
    answer: '기린',
  },
  {
    id: '00003',
    path: quiz3,
    answer: '코끼리',
  },
  {
    id: '00004',
    path: quiz4,
    answer: '호랑이',
  },
  {
    id: '00005',
    path: quiz5,
    answer: '리액트',
  },
  {
    id: '00006',
    path: quiz6,
    answer: '풍수지리',
  },
  {
    id: '00007',
    path: quiz7,
    answer: '놀이터',
  },
  {
    id: '00008',
    path: quiz8,
    answer: '이벤트',
  },
  {
    id: '00009',
    path: quiz9,
    answer: '초콜릿',
  },
  {
    id: '00010',
    path: quiz10,
    answer: '맥북',
  },
];

const Quiz = () => {
  const quizList = useMemo(() => sample, []);
  const [quiz, setQuiz] = useState(null);
  console.log(quizList);
  useEffect(() => {
    const randomIdx = Math.floor(Math.random() * quizList.length);
    console.log(randomIdx);
    setQuiz(quizList[randomIdx]);
  }, []);
  return (
    <div className="quiz_box">
      {quiz?.path && <img src={quiz?.path} alt={quiz?.id} />}
    </div>
  );
};
export default Quiz;
