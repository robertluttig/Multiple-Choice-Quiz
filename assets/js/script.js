//Quiz state
var currentQuestionIndex = 0;
var time =  questions.length * 15;
var timerId;


//DOM element reference
var startBtn = document.getElementById("start");
var questionsEl = document.getElementById("questions");
var timerEl = document.getElementById("time");
var choicesEl = document.getElementById("choices");

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

  getQuestion();
}

function getQuestion(){
  // get current question object from array
  var currentQuestion = questions[currentQuestionIndex];

  // update title with current question
  var titleEl = document.getElementById("question-title");
  titleEl.textContent = currentQuestion.title;

    // clear out any old question choices
    choicesEl.innerHTML = "";

    // loop over choices
  currentQuestion.choices.forEach(function (choice, i) {
    // create new button for each choice
    var choiceNode = document.createElement("button");
    choiceNode.setAttribute("class", "choice");
    choiceNode.setAttribute("value", choice);

    choiceNode.textContent = i + 1 + ". " + choice;

    // attach click event listener to each choice
    choiceNode.onclick = questionClick;

    // display on the page
    choicesEl.appendChild(choiceNode);
  });
}

function questionClick(){

}

function quizEnd(){
   // stop timer
   clearInterval(timerId);

   // show end screen
   var endScreenEl = document.getElementById("end-screen");
   endScreenEl.removeAttribute("class");

   // hide questions section
   questionsEl.setAttribute("class", "hide");
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