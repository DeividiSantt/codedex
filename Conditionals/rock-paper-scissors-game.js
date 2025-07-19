const ROCK = 0;
const PAPER = 1;
const SCISSORS = 2;

const choices = ["Rock", "Paper", "Scissors"];


let player = PAPER;  

let cpu = Math.floor(Math.random() * 3);

console.log("Player chose: " + choices[player]);
console.log("CPU chose: " + choices[cpu]);

if (player === cpu) {
  console.log("It's a tie!");
} else if (
  (player === ROCK && cpu === SCISSORS) ||
  (player === PAPER && cpu === ROCK) ||
  (player === SCISSORS && cpu === PAPER)
) {
  console.log("Player wins!");
} else {
  console.log("CPU wins!");
}
