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
    <Loading ready={ ready }>
      <Board />
    </Loading>
  );
}


export default App;
