var Romancecore = 0;


var Fantasycore = 0;


var numQuestion = 0;

var result = document.getElementById("result");

var restart = document.getElementById("restart");

var q1a1 = document.getElementById("q1a1");
var q1a2 = document.getElementById("q1a2");

var q2a1 = document.getElementById("q2a1");
var q2a2 = document.getElementById("q2a2");

var q3a1 = document.getElementById("q3a1");
var q3a2 = document.getElementById("q3a2");


q1a1.addEventListener("click", Romance);
q1a2.addEventListener("click", Fantasy);

q2a1.addEventListener("click", Romance);
q2a2.addEventListener("click", Fantasy);

q3a1.addEventListener("click", Romance);
q3a2.addEventListener("click", Fantasy);

restart.addEventListener("click", RestartQuiz);


function Romance() {
  Romancecore ++;
  numQuestion ++;

  console.log("numQuestion = " + numQuestion + " Romancecore = " + Romancecore);
checkQuizCompletion();
}

function checkQuizCompletion() {
  if (numQuestion >= 3) {
    console.log("The quiz is done")
      updateResult();
  }
}

function Fantasy() {
  Fantasycore += 1;
  numQuestion += 1;

  console.log("numQuestion = " + numQuestion + " Fantasycore = " + Fantasycore);

  if (numQuestion == 3) {
    console.log("The quiz is done")
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
  RomanceCore = 0;
  Fantasycore = 0;
  numQuestion = 0;
  result.innerHTML = "Your Result is...";
  console.log("Quiz restarted. numQuestion = " + numQuestion + ", Romancecore = " + Romancecore + ", Fantasycore = " + Fantasycore);
    }
