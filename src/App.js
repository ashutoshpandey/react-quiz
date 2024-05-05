import { useEffect, useReducer } from 'react';

import './css/App.css';
import Main from './components/Main';
import Error from './components/Error';
import Header from './components/Header';
import Loader from './components/Loader';
import Question from './components/Question';
import StartScreen from './components/StartScreen';

import { reducer, initialState } from './reducers/question-reducer';

function App() {
  const [{ index, questions, status, answer }, dispatch] = useReducer(reducer, initialState);

  const numQuestions = questions.length;

  useEffect(function () {
    let url = 'http://localhost:9000/questions';

    fetch(url)
      .then((res) => res.json())
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
