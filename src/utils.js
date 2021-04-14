export const dice = [
  ["B", "J", "K", "Qu", "X", "Z"],
  ["A", "A", "E", "E", "E", "E"],
  ["A", "D", "E", "N", "N", "N"],
  ["A", "E", "E", "G", "M", "U"],
  ["A", "F", "I", "R", "S", "Y"],
  ["C", "E", "I", "L", "P", "T"],
  ["C", "E", "I", "P", "S", "T"],
  ["D", "H", "H", "L", "O", "R"],
  ["D", "H", "L", "N", "O", "R"],
  ["D", "H", "L", "N", "O", "R"],
  ["E", "I", "I", "I", "T", "T"],
  ["E", "M", "O", "T", "T", "T"],
  ["E", "N", "S", "S", "S", "U"],
  ["F", "I", "P", "R", "S", "Y"],
  ["G", "O", "R", "R", "V", "W"],
  ["N", "O", "O", "T", "U", "W"]
]

export function Loading({ children, ready, message='' }) {
  return ready ? children : (message);
}
