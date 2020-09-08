import React from 'react';
// import logo from './logo.svg';
// import { Counter } from './features/counter/Counter';
import { useSelector, useDispatch } from 'react-redux';
import { increment } from './actions';
import { decrement } from './actions';

function App() {
  const counter = useSelector(state => state.counter);
  const idLogged = useSelector(state => state.idLogged);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <h1>Counter {counter}</h1>
      <button onClick={() => dispatch(increment(5))}> + </button>
      <button onClick={() => dispatch(decrement())}> - </button>
      {idLogged ?
        <h3>Valuable Informatiom I shouldnt see </h3> : " "}

    </div>
  );
}

export default App;
