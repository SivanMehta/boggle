import React from 'react';
import { dice } from './utils';

const width = 800;
const diceWidth = 200;

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
    const offset = letter === "Qu" ? -45 : 0;
    const x = (i % 4) * diceWidth + diceWidth / 4 + offset;
    const y = (1 +Math.floor(i / 4)) * diceWidth - diceWidth / 4;
    return (
      <text
        x={ x }
        fontSize="10em"
        textAnchor="center"
        y={ y }>
      { letter }
      </text>
    )
  });

  return labels;
}

export default function Board() {
  return (
    <svg width={ width } height={ width }>
      <Cells />
      <Dice />
    </svg>
  )
}
