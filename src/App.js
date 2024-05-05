import './App.css';
import Main from './Main';
import Error from './Error';
import Header from './Header';
import Loader from './Loader';
import { useEffect, useReducer } from 'react';

import { reducer, initialState } from './reducers/question-reducer';

function App() {
  const [{ questions, status }, dispatch] = useReducer(reducer, initialState);

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
      </Main>
    </div>
  );
}

export default App;
