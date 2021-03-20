import { useRef, useContext } from 'react';

import Nome from './components/nome';
import Sobrenome from './components/sobrenome';
import { Context } from './context';

function App() {
  const { setNomes } = useContext(Context);
  const nomeRef = useRef<HTMLInputElement>(null);
  const sobrenomeRef = useRef<HTMLInputElement>(null);

  function handleNomes() {
    setNomes({
      nome: nomeRef?.current?.value,
      sobrenome: sobrenomeRef?.current?.value
    });
  }

  return (
    <div className="App">
      <Nome />
      <Sobrenome />
      <br />
      <input ref={nomeRef} type="text" placeholder="Nome" />
      <input ref={sobrenomeRef} type="text" placeholder="Sobreome" />
      <br />
      <button onClick={handleNomes}>Definir</button>
    </div>
  );
}

export default App;
