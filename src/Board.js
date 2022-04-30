import React from 'react';
import { dice } from './utils';

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

root.style.setProperty('--row-size', Math.min(window.innerWidth, 800) / 4 + "px");
const CELL_COUNT = 4;

// just a CELLS x CELLS table
export default function Board() {
  shuffle(dice);
  const rows = [];
  for (let i = 0; i < CELL_COUNT; i ++) {
    const cells = []
    for (let j = 0; j < CELL_COUNT; j ++) {
      const letter = pick(dice[i * CELL_COUNT + j]);
      cells.push((
        <td>{ letter }</td>
      ));
    }

    rows.push((
      <tr>{ cells }</tr>
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
