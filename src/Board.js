import React from 'react';
import { dice, CELL_COUNT } from './utils';

// randomly pick an element out of an array
function pick(array) {
  const idx = Math.floor(Math.random() * array.length);
  return array[idx];
}

function shuffle(array) {
  var m = array.length, t, i;
  while (m) {
    i = Math.floor(Math.random() * m--);
    t = array[m];
    array[m] = array[i];
    array[i] = t;
  }
}

// just a CELLS x CELLS table
export default function Board() {
  shuffle(dice);
  const rows = [];
  for (let i = 0; i < CELL_COUNT; i ++) {
    const cells = []
    for (let j = 0; j < CELL_COUNT; j ++) {
      const idx = i * CELL_COUNT + j;
      const letter = pick(dice[idx]);
      cells.push((
        <td key={ 'cell' + idx }>{ letter }</td>
      ));
    }

    rows.push((
      <tr key={i}>{ cells }</tr>
    ));
  }

  return (
    <table>
      <tbody>
        { rows }
      </tbody>
    </table>
  );
}
