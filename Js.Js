var counter = 0;
var clicker = document.getElementById("clicker");
var counterDisplay = document.getElementById("counter");

clicker.addEventListener("click", function() {
	counter++;
	counterDisplay.innerHTML = counter;
});

document.addEventListener("keydown", function(event) {
    if (event.keyCode === 32) {
        counter++
        counterDisplay.innerHTML = counter;
    } else  {
        counter--
        counterDisplay.innerHTML = counter;
    }
  });
