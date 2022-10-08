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
    for (const property in questions) {
        console.log(`${property}: ${questions[property]}`);
      }
}
