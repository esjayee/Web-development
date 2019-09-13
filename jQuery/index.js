// for (let i = 0; i < 5; i++) {
//   document.querySelectorAll("button")[i].addEventListener("click", function() {
//     document.querySelector("h1").style.color = "purple";
//   });
// }

$("h1").on("click", function() {
  $("h1").css("color", "purple");
});
