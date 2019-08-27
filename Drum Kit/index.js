
//// use an anonymous function as the listener which will be called when the "click" event occurs
// document.querySelector("button").addEventListener("click",
//   function () {
//     alert("You clicked me!");
//   }
// );

//// ** Another way to write the event listener **
// document.querySelector("button").addEventListener("click", handleClick);
//
function handleClick() {
  alert("You clicked me!");
}

// add eventhandler for all drum buttons
var allButtons = document.querySelectorAll(".drum");

// add event handler for each drum button
allButtons.forEach(drum => drum.addEventListener("click",
  function () {
      var buttonInnerHTML = this.innerHTML;
      var audioFile;

      switch (buttonInnerHTML) {
        case "w":
          audioFile = "sounds/crash.mp3";
          break;
        case "a":
          audioFile = "sounds/kick-bass.mp3";
          break;

        case "s":
          audioFile = "sounds/snare.mp3";
          break;

        case "d":
          audioFile = "sounds/tom-1.mp3";
          break;

        case "j":
          audioFile = "sounds/tom-2.mp3";
          break;

        case "k":
          audioFile = "sounds/tom-3.mp3";
          break;

        case "l":
          audioFile = "sounds/tom-4.mp3";
          break;

        default:
          console.log(buttonInnerHTML);
      }

      if (audioFile > "") {
        var audio = new Audio(audioFile);
        audio.play();
      }
   })
 );


 // var audio = new Audio("sounds/tom-1.mp3");
 // audio.play();
