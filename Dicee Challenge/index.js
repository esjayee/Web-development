var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var img1Source = "images/dice" + randomNumber1 + ".png";
var img2Source = "images/dice" + randomNumber2 + ".png";

var winText = "";

// set image source attribute
// alternative code:
//  document.querySelectorAll("img")[0].setAttribute("src", img1Source);
//  document.querySelectorAll("img")[1].setAttribute("src", img2Source);

document.querySelector(".img1").setAttribute("src", img1Source);
document.querySelector(".img2").setAttribute("src", img2Source);

if (randomNumber1 > randomNumber2) {
  winText = "🚩 Player 1 Wins!";
} else if (randomNumber1 < randomNumber2) {
  winText = "Player 2 Wins! 🚩";
} else {
  winText = "Draw!";
}

// change the heading to show the winning text
document.querySelector("h1").textContent = winText;
