// for (let i = 0; i < 5; i++) {
//   document.querySelectorAll("button")[i].addEventListener("click", function() {
//     document.querySelector("h1").style.color = "purple";
//   });
// }

$("h1").addClass("big-title");

$("button").on("click", function() {
  $("h1").slideUp().slideDown().animate({opacity: 0.5});
});
