import React from 'react';
import { dice } from './utils';

const width = 600;
const diceWidth = 100;

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

function Cells() {
  const cells = [];
  for(let i = 0; i < 16; i ++) {
    const x = (i % 4) * diceWidth
    const y = Math.floor(i / 4) * diceWidth;
    cells.push(
      <rect
        x={ x }
        y={ y }
        width={ diceWidth }
        height={ diceWidth }
        stroke="black" fill="white" strokeWidth={1}/>
    )
  }

  return cells;
}

function Dice() {
  shuffle(dice);
  const labels = dice.map((die, i) => {
    const letter = pick(die);
    const x = (i % 4) * diceWidth + diceWidth * .4
    const y = Math.floor(i / 4) * diceWidth + diceWidth *.4;
    return (
      <text
        x={ x }
        fontSize="3em"
        textAnchor="center"
        y={ y }>
      { letter }
      </text>
    )
  });

  return labels;
}

export default function Board() {
  setTimeout(() => {
    alert("done!")
  }, 3  * 1000);

  return (
    <svg width={ width } height={ width }>
      <Cells />
      <Dice />
    </svg>
  )
}
