var questionTitle = document.getElementById("question-title");
var questionSection= document.getElementById("questions");
var startButton = document.getElementById("start"); 
var choiceDiv = document.getElementById("choices");



startButton.addEventListener("click", displayQuestions);


var newQuestion = false;
var i = 0;

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

function displayQuestions() {

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

    console.log("before click");

    var wrongAnswer = document.getElementById("wrong-choice");
    wrongAnswer.addEventListener("click", displayWrong);
    var correctAnswer = document.getElementById("right-choice");
    correctAnswer.addEventListener("click", displayCorrect)

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

}

function displayWrong() {

    console.log("did it work?");

    removeOldQuestions();

    var wrongButton = document.createElement("button");
    wrongButton.innerHTML = "WRONG";
    wrongButton.className = "wrong-button";
    wrongButton.id = "wrong-button";
    wrongButton.addEventListener("click", displayQuestions)

}

function displayCorrect() {

    console.log("did it work?");

    removeOldQuestions();

    var rightButton = document.createElement("button");
    rightButton.innerHTML = "CORRECT";
    rightButton.className = "right-button";
    rightButton.className = "right-button";
    rightButton.addEventListener("click", displayQuestions)
    
}
