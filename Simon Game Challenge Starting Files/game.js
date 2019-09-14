
const buttonColors = ["red", "blue", "green", "yellow"];
let gamePattern = [];

function nextSequence() {
  let randomNumber;

  randomNumber = Math.floor(Math.random() * 4);
  return randomNumber;
}

let randomChosenColour = buttonColors[nextSequence()];

gamePattern.push(randomChosenColour);
