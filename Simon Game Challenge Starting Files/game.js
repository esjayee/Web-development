
const buttonColors = ["red", "blue", "green", "yellow"];
let gamePattern = [];
let userClickedPattern = [];
let gameStarted = false;
let level = 0;
let levelTitle = $("#level-title");

function playSound(color) {
  if (color > "") {
    var audio = new Audio("sounds/" + color + ".mp3");
    audio.play();
  }
}
function nextSequence() {
  let randomNumber;

  randomNumber = Math.floor(Math.random() * 4);
  let randomChosenColour = buttonColors[randomNumber];

  level++;
  levelTitle.text("Level " + level);

  gamePattern.push(randomChosenColour);

  let button = $("#" + randomChosenColour);

  // flash the button
  button.fadeOut(100).fadeIn(100);

  playSound(randomChosenColour);
}

$(".btn").on("click", function() {
  var userChosenColor = this.id;
  userClickedPattern.push(userChosenColor);
  playSound(userChosenColor);
  animatePress(userChosenColor);
});

// check key pressed then call nextSequence
// need a way of tracking if game started, only call nextSequence on first keypress
$(document).keypress(event => {
  if (!gameStarted) {
    gameStarted = true;
    levelTitle.text("Level " + level);
    nextSequence();
  }
});

function animatePress(color) {
  $("#" + color).addClass("pressed");
  setTimeout(() => {
    $("#" + color).removeClass("pressed");
  }, 100);
}
