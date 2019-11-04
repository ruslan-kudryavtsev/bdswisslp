//timer
var deadline = new Date("nov 05, 2019 11:27:25").getTime();

var x = setInterval(function() {
  var now = new Date().getTime();
  var t = deadline - now;
  var hours = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((t % (1000 * 60)) / 1000);
  document.getElementById("h").innerHTML = hours;
  document.getElementById("m").innerHTML = minutes;
  document.getElementById("s").innerHTML = seconds;
  document.getElementById("hb").innerHTML = hours;
  document.getElementById("mb").innerHTML = minutes;
  document.getElementById("sb").innerHTML = seconds;
  if (t < 0) {
    clearInterval(x);
    document.getElementById("h").innerHTML = "0";
    document.getElementById("m").innerHTML = "0";
    document.getElementById("s").innerHTML = "0";
    document.getElementById("hb").innerHTML = "0";
    document.getElementById("mb").innerHTML = "0";
    document.getElementById("sb").innerHTML = "0";
  }
}, 1000);

//modal
