import React, { useState, useEffect } from 'react';
import { Loading } from './utils';
import Board from './Board';
import Difficulty from './Difficulty';

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
      <Difficulty />
    </Loading>
  );
}


export default App;
