//Quiz state
var time =  15;
var timerId;

//DOM element reference
var startBtn = document.getElementById("start");
var questionsEl = document.getElementById("questions");
var timerEl = document.getElementById("time");

function startQuiz() {
  // hide start screen
  var startScreenEl = document.getElementById("start-screen");
  startScreenEl.setAttribute("class", "hide");

  // un-hide questions section
  questionsEl.removeAttribute("class");

  // start timer
  timerId = setInterval(clockTick, 1000);

  // show starting time
  timerEl.textContent = time;
}

function quizEnd(){
   // stop timer
   clearInterval(timerId);

   // show end screen
   var endScreenEl = document.getElementById("end-screen");
   endScreenEl.removeAttribute("class");
}

function clockTick() {
  // update time
  time--;
  timerEl.textContent = time;

  // check if user ran out of time
  if (time <= 0) {
    quizEnd();
  }
}

// user clicks button to start quiz
startBtn.onclick = startQuiz;