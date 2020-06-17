
var timerEl = document.getElementById("countdown");
var button = document.querySelector(".btn");


button.addEventListener("click",function(event) {
    event.preventDefault();
  
    var timeLeft = 60;
  
    var timeInterval = setInterval(function () {
      timerEl.textContent = timeLeft + "Time";
      timeLeft--;
  
      if (timeLeft === 0) {
        clearInterval(timeInterval);
        timerEl.textContent = "Game Over";
        speedRead();
      }
    }, 1000);
});