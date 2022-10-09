// function loadFile(url) {
//     var script = document.createElement("script");
//     script.src = url;
//     document.head.appendChild(script);
// }
// loadFile("C:/Users/cmcmu/Bootcamp/challenges/weekFourChallenge/quizOnJS/assets/js/questions.js"); 

// import { displayQuestions } from "./questions.js";

// console.log(displayQuestions)

var startButton = document.getElementById("start"); 
var changeButton = document.getElementById("change");
var madeMistake = document.getElementById("mistake");
var multipleChoice = document.getElementById("choices");
var hidden = document.getElementById("hide-this");


startButton.addEventListener("click", hideReveal);
startButton.addEventListener("click", timer);
changeButton.addEventListener("click", hideReveal);
madeMistake.addEventListener("click", mistake);

var madeMistake = false;

document.body.addEventListener("load", goToQuestions, false);

function hideReveal() {

    if (hidden.style.display === "none") {
        hidden.style.display = "block";
      } else {
        hidden.style.display = "none";
      }
    
    if (questionSection.style.display === "block") {
        questionSection.style.display = "none";
      } else {
        questionSection.style.display = "block";
      }

}

function mistake() {

    madeMistake = true;

}

function timer(){
    var sec = 90;

    // Using the setInterval() function to display the number of seconds left in the 
    // quiz
    var timer = setInterval(function(){
        document.getElementById("time").innerHTML=sec;
        sec--;
        if (sec < 0) {
            clearInterval(timer);
        }
        
        if (madeMistake) {

            if (sec >= 15) {
                sec = sec - 15;
            } else {
                sec = 0;
            } 

            madeMistake = false;

        }

    }, 1000);

}
