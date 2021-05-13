import React, { useState } from 'react';
import Shop from './Shop';
import { render } from 'react-dom';

function App() {
  const [login, setLogin] = useState(false);

  if (login) {
    return (
      <>
        <Shop />
        <button className="btn" onClick={() => setLogin(false)}>
          Выйти
        </button>
      </>
    );
  } else {
    return (
      <>
        <h2>Нужно залогиниться!</h2>
        <button className="btn" onClick={() => setLogin(true)}>
          Войти
        </button>
      </>
    );
  }
}

render(<App />, document.querySelector('#root'));
