import React, { useState, useEffect } from 'react';
import { Loading } from './utils';
import Board from './Board';

function App() {
  const [ready, setReady] = useState(false);

  const loadBoard = async () => {
    setReady(true);
  };

  useEffect(() => {
    loadBoard();
  });

  return (
    <div className='container'>
      <Loading ready={ ready }>
        <Board />
      </Loading>
    </div>
  );
}


export default App;
