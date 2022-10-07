document.getElementById("start").addEventListener("click", hide);
document.getElementById("reveal").addEventListener("click", reveal);
document.getElementById("mistake").addEventListener("click", mistake);

var hidden = document.getElementById("hide-this")

var madeMistake = false;

function hide() {

    if (hidden.style.display === "none") {
        hidden.style.display = "block";
      } else {
        hidden.style.display = "none";
      }

}

function reveal() {

    if (hidden.style.display === "none") {
        hidden.style.display = "block";
      } else {
        hidden.style.display = "none";
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

timer();
