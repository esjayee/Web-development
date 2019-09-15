
var setTimer = setInterval(function() {
  var time = document.querySelector("#time");

  time.innerText = new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit', second: '2-digit'});
}, 1000);
