
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

  userClickedPattern = [];

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

  // check answer against game pattern
  if (gameStarted) {
    checkAnswer(userClickedPattern.length - 1);
  }
});

// check key pressed then call nextSequence
// need a way of tracking if game started, only call nextSequence on first keypress
$(document).keypress(event => {
  if (!gameStarted) {
    // initialise game
    gameStarted = true;
    level = 0;
    gamePattern = [];
    levelTitle.text("Level " + level);

    // start game
    nextSequence();
  }
});

function animatePress(color) {
  $("#" + color).addClass("pressed");
  setTimeout(() => {
    $("#" + color).removeClass("pressed");
  }, 100);
}

function checkAnswer(currentLevel) {
  // check user pattern equals game pattern
  // if true, go to next sequence
  // if false, the game ends

  if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
    console.log("gamePattern === userClickedPattern");

    if (currentLevel + 1 == level) {
      setTimeout(() => {
        nextSequence();
      }, 1000);
    }
  } else {
    playSound("wrong");

    $("body").addClass("game-over");
    setTimeout(() => {
      $("body").removeClass("game-over");
    }, 200);

    levelTitle.text("Game Over, Press Any Key to Restart")
    startOver();
  }
}

function startOver() {
  gameStarted = false;
  level = 0;
  gamePattern = [];
}
