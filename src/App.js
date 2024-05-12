import { useEffect, useReducer } from 'react';

import './css/App.css';
import Main from './components/Main';
import Error from './components/Error';
import Header from './components/Header';
import Loader from './components/Loader';
import Question from './components/Question';
import StartScreen from './components/StartScreen';

import { fetchQuestions } from './services/question-serv';
import { questionReducer, initialQuestionState } from './reducers/question-reducer';

function App() {
  const [{ index, questions, status, answer }, dispatch] = useReducer(questionReducer, initialQuestionState);

  const numQuestions = questions.length;

  useEffect(function () {
    fetchQuestions()
      .then((data) => data)
      .then((data) => dispatch({ type: 'dataReceived', payload: data }))
      .catch((err) => dispatch({ type: 'dataError' }));
  }, []);

  return (
    <div className="App">
      <Header />

      <Main>
        {status === 'error' && <Error />}
        {status === 'loading' && <Loader />}
        {status === 'ready' && <StartScreen numQuestions={numQuestions} dispatch={dispatch} />}
        {status === 'active' && <Question question={questions[index]} dispatch={dispatch} answer={answer} />}
      </Main>
    </div>
  );
}

export default App;
