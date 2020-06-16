
var timerEl = document.getElementById("countdown");
var button = document.querySelector(".button");
  
  function startQuiz() {
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
}

button.addEventListener("click", startQuiz);