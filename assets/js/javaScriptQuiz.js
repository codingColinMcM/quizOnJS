var startButton = document.getElementById("start"); 
var changeButton = document.getElementById("change");
var multipleChoice = document.getElementById("choices");
var hidden = document.getElementById("hide-this-start");
var showEnd = document.getElementById("reveal-this-end");
var time = document.getElementById("time");

startButton.addEventListener("click", hideReveal);
startButton.addEventListener("click", timer);

var madeMistake = false;

showEnd.style.display = "none";

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
    var sec = 4;

    // Using the setInterval() function to display the number of seconds left in the 
    // quiz
    var timer = setInterval(function(){

        var diplayTime = sec - 1;
        if (diplayTime == -1) {
            diplayTime = 0
        }
        time.innerHTML=diplayTime;
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
        var wrongAnswer = document.getElementById("wrong-choice");

        if (document.body.contains(wrongAnswer)) {
            wrongAnswer.addEventListener("click", mistake)
        }

        if (sec == 0) {
            questionSection.style.display = "none";
            showEnd.style.display = "block"
        }
        
    }, 1000);

}
