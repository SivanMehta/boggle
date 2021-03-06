export const dice = [
  ["Qu","B","Z","I","X","K"],
  ["T","O","U","O","T","O"],
  ["O","V","W","R","G","R"],
  ["A","R","A","F","S","R"],
  ["A","U","M","E","E","G"],
  ["H","H","L","R","D","O"],
  ["N","H","D","T","H","O"],
  ["L","E","N","R","O","D"],
  ["A","F","A","I","S","R"],
  ["Y","I","F","A","S","R"],
  ["T","E","L","E","C","I"],
  ["S","S","N","S","E","U"],
  ["R","I","Y","P","R","H"],
  ["D","O","R","D","L","N"],
  ["C","C","W","N","S","T"],
  ["T","T","O","T","E","M"],
  ["S","C","T","I","E","P"],
  ["E","A","N","D","N","N"],
  ["M","N","N","E","A","G"],
  ["U","O","T","O","W","N"],
  ["A","E","A","E","E","E"],
  ["Y","I","F","P","S","R"],
  ["E","E","E","E","M","A"],
  ["I","T","I","T","I","E"],
  ["E","T","I","L","I","C"]
]

export function Loading({ children, ready, message='' }) {
  return ready ? children : (message);
}

const params = new Proxy(new URLSearchParams(window.location.search), {
  get: (searchParams, prop) => searchParams.get(prop),
});

root.style.setProperty('--row-size', Math.min(window.innerWidth, 800) / 5 + "px");

export const CELL_COUNT = params.cells || 4;
