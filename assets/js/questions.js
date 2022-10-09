var questionTitle = document.getElementById("question-title");
var questionSection= document.getElementById("questions");
var startButton = document.getElementById("start"); 

var questions = {

    "Commonly used data types in JavaScript include all of the following EXCEPT: ":
    {
        "Strings": false,
        "Booleans": false,
        "Alerts": true,
        "Integers": false,
    },

    "The condition of a conditional statement is enclosed within: ":
    {
        "Quotation marks": false,
        "Parenthases": true,
        "Curly Brackets": false,
        "Box Brackets": false,
    }

}

function displayQuestions() {

    for (var question in questions) {

        questionTitle.innerHTML=question;

        for (var choice in questions[question]) {

            var questionChoice = document.createElement("button");
            questionChoice.innerHTML = choice;
            questionChoice.className = "question-choice";
            var choiceDiv = document.getElementById("choices");
            choiceDiv.appendChild(questionChoice);
            var addBr = document.createElement("br");
            choiceDiv.appendChild(addBr);

        }

    }
        
}

startButton.addEventListener("click", displayQuestions);
