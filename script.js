var Romancecore = 0;


var Fantasycore = 0;


var numQuestion = 0;
var answeredQuestions = new Set();

var result = document.getElementById("result");

var restart = document.getElementById("restart");

var q1a1 = document.getElementById("q1a1");
var q1a2 = document.getElementById("q1a2");

var q2a1 = document.getElementById("q2a1");
var q2a2 = document.getElementById("q2a2");

var q3a1 = document.getElementById("q3a1");
var q3a2 = document.getElementById("q3a2");
var questionGroups = [
  [q1a1, q1a2],
  [q2a1, q2a2],
  [q3a1, q3a2]
];


q1a1.addEventListener("click", Romance);
q1a2.addEventListener("click", Fantasy);

q2a1.addEventListener("click", Romance);
q2a2.addEventListener("click", Fantasy);

q3a1.addEventListener("click", Romance);
q3a2.addEventListener("click", Fantasy);

restart.addEventListener("click", RestartQuiz);


function Romance() {
  answerQuestion(this, "romance");
}

function Fantasy() {
  answerQuestion(this, "fantasy");
}

function answerQuestion(button, answer) {
  var questionIndex = questionGroups.findIndex(function (group) {
    return group.includes(button);
  });

  if (questionIndex === -1 || answeredQuestions.has(questionIndex)) {
    return;
  }

  answeredQuestions.add(questionIndex);
  questionGroups[questionIndex].forEach(function (option) {
    option.disabled = true;
  });

  if (answer === "romance") {
    Romancecore += 1;
  } else {
    Fantasycore += 1;
  }

  numQuestion = answeredQuestions.size;
  checkQuizCompletion();
}

function checkQuizCompletion() {
  if (numQuestion === questionGroups.length) {
    updateResult();
  }
}

function updateResult() {
  if (Romancecore >=2) {
    result.innerHTML = "Romance girlie much?";
    console.log("Romance girlie much?");
  } else if (Fantasycore >=2) {
    result.innerHTML = "You’re a fantasy girlie!";
      console.log("You’re a fantasy girlie!");
    }
}

function RestartQuiz() {
  Romancecore = 0;
  Fantasycore = 0;
  numQuestion = 0;
  answeredQuestions = new Set();
  questionGroups.forEach(function (group) {
    group.forEach(function (button) {
      button.disabled = false;
    });
  });
  result.textContent = "Your result is...";
    }
