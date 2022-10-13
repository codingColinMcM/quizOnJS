var questionTitle = document.getElementById("question-title");
var questionSection= document.getElementById("questions");
var startButton = document.getElementById("start"); 
var choiceDiv = document.getElementById("choices");
var time = document.getElementById("time");
var displayScore = document.getElementById("final-score");

startButton.addEventListener("click", displayQuestions);
startButton.addEventListener("click", timer);

var newQuestion = false;
var i = 0;
var numCorrect = 0;
var percentScore = 0;

var sec = 91;
function timer(){
    
    setInterval(function(){
        sec--;

        if(sec==0) {
        
            displayQuestions();            
        
        }

        if (sec < 0) {

            clearInterval(timer);
        
        }
    }, 1000);
}
// decrementAfter1Second();

var questions = {

    "Commonly used data types in JavaScript include all of the following EXCEPT: ":
    {
        "Strings": false,
        "Booleans": false,
        "Alerts": true,
        "Integers": false
    },

    "The condition of a conditional statement is enclosed within: ":
    {
        "Quotation marks": false,
        "Parenthases": true,
        "Curly Brackets": false,
        "Box Brackets": false
    }

}

var numQuestions = Object.keys(questions).length;

function displayQuestions() {
     
    if ((i < numQuestions) & (sec > 0)) {

        var currentTitle = Object.keys(questions)[i];
        questionTitle.innerHTML=currentTitle;

        for (var choice in questions[currentTitle]) {

            var choiceValue = questions[currentTitle][choice];
            var questionChoice = document.createElement("button");
            questionChoice.innerHTML = choice;

            if (choiceValue == false){
                
                questionChoice.className = "wrong-choice";
                questionChoice.id = "wrong-choice"
                
            }else {

                questionChoice.className = "right-choice";
                questionChoice.id = "right-choice"

            }

            choiceDiv.appendChild(questionChoice);
            var addBr = document.createElement("br");
            addBr.id = "question-br";
            choiceDiv.appendChild(addBr)

        }

        i++;

        var wrongAnswer = document.getElementById("wrong-choice");
        wrongAnswer.addEventListener("click", displayWrong);
        var correctAnswer = document.getElementById("right-choice");
        correctAnswer.addEventListener("click", displayCorrect)

    } else {  

        calcScore()

    }

}

function removeOldQuestions() {

    for (let j = 0; j<3; j++){
        var oldIncorrect = document.getElementById("wrong-choice");
        var choiceBreak = document.getElementById("question-br");
        choiceDiv.removeChild(oldIncorrect);
        choiceDiv.removeChild(choiceBreak)
    }

    var oldCorrect = document.getElementById("right-choice");
    choiceDiv.removeChild(oldCorrect);
    var choiceBreak = document.getElementById("question-br");
    choiceDiv.removeChild(choiceBreak)

}

function removeOldWrong() {

    var oldWrong = document.getElementById("wrong-button");
    choiceDiv.removeChild(oldWrong)

}

function removeOldRight() {

    var oldRight = document.getElementById("right-button");
    choiceDiv.removeChild(oldRight)

}

function displayWrong() {

    removeOldQuestions();

    var wrongButton = document.createElement("button");
    wrongButton.innerHTML = "WRONG";
    wrongButton.className = "wrong-button";
    wrongButton.id = "wrong-button";
    wrongButton.addEventListener("click", displayQuestions);
    wrongButton.addEventListener("click", removeOldWrong)
    choiceDiv.appendChild(wrongButton);

}

function displayCorrect() {

    removeOldQuestions();

    var rightButton = document.createElement("button");
    rightButton.innerHTML = "CORRECT";
    rightButton.className = "right-button";
    rightButton.id = "right-button";
    rightButton.addEventListener("click", displayQuestions);
    rightButton.addEventListener("click", removeOldRight)
    choiceDiv.appendChild(rightButton);

    numCorrect++;
    
}

function calcScore() {
    
    var floatScore = numCorrect/numQuestions;
    percentScore = Math.round(floatScore * 100);
    displayScore.innerHTML = percentScore

}
