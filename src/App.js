import { useEffect, useReducer, useRef } from 'react';

import './css/App.css';
import Main from './components/Main';
import Error from './components/Error';
import Header from './components/Header';
import Loader from './components/Loader';
import Progress from './components/Progress';
import Question from './components/Question';
import StartScreen from './components/StartScreen';

import { fetchQuestions } from './services/question-serv';
import { questionReducer, initialQuestionState } from './reducers/question-reducer';
import FinishScreen from './components/FinishScreen';

function App() {
  const [{ index, questions, status, answer, correct }, dispatch] = useReducer(questionReducer, initialQuestionState);

  let numQuestions = useRef(0);

  useEffect(function () {
    fetchQuestions()
      .then((data) => {
        numQuestions.current = data.length;
        return data;
      })
      .then((data) => dispatch({ type: 'dataReceived', payload: data }))
      .catch((err) => dispatch({ type: 'dataError' }));
  }, []);

  return (
    <div className="App">
      <Header />

      <Main>
        {status === 'error' && <Error />}
        {status === 'loading' && <Loader />}
        {status === 'ready' && <StartScreen numQuestions={numQuestions.current} dispatch={dispatch} />}
        {status === 'active' && <Progress index={index} numQuestions={numQuestions.current} />}
        {status === 'active' && <Question question={questions[index]} dispatch={dispatch} answer={answer} index={index} numQuestions={numQuestions.current} />}
        {status === 'finished' && <FinishScreen numQuestions={numQuestions.current} correct={correct} />}
      </Main>
    </div>
  );
}

export default App;
