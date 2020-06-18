
var timerEl = document.getElementById("countdown");
var startButton = document.querySelector("#btn");

var questions = [ 
  {
    question: "What is an Array?",
    choices: ["An ordered collection of elements"],
    answer: "",
  },
  {
    question: "What is my second question?",
    choices: [],
    answer: "",
  }
]

startButton.addEventListener("click",function(event) {
    event.preventDefault();
  
    var timeLeft = 60;
  
    var timeInterval = setInterval(function () {
      timerEl.textContent = timeLeft + "Time";
      timeLeft--;
  
      if (timeLeft === 0) {
        clearInterval(timeInterval);
        timerEl.textContent = "Game Over";
      }
    }, 1000);
    codeQuestions();
});

console.log(questions[0].question);

function codeQuestions(){
  var pElement = document.createElement("p");
  var inputEl = document.createElement("input");
  inputEl.setAttribute("type", "radio");
  var pMain = document.querySelector(".main");
  pMain.appendChild(pElement)
  pElement.textContent = questions[0].question;
  pMain.appendChild(inputEl);
  inputEl.textContent = questions[0].choices[0];
}

//render quiz function
//add class to div element
//create p element
// create text content "question"
//create input elements with attributes append to p element
//append p element to div element
//call render quiz inside of eventlistener function line 23 

// check user answer function
//var useranswer
//add eventlistern to answer
//store user answer
// if else check answer
//if correct shows correct message
//if wrong shows wrong message
//deduct 10seconds from timer

// call function inside of eventlistener function