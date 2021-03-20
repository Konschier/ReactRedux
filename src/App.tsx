import { NavLink } from 'react-router-dom';
import useCount from './hooks/useCount';

function App() {
  const { count, plus, minus, reset } = useCount();

  function increment() {
    plus();
  }

  function decrement() {
    minus();
  }

  function resetCount() {
    reset();
  }

  return (
    <div className="App">
      {count}
      <br />
      <button onClick={increment}>Incrementar</button>
      <button onClick={decrement}>Decrementar</button>
      <button onClick={resetCount}>Resetar</button>
      <br />
      <br />
      <NavLink to="/test">Ir para test</NavLink>
    </div>
  );
}

export default App;
