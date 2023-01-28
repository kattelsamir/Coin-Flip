//Variable declaration
let guessCorrect = document.querySelector('.guess-correct');
let guessIncorrect = document.querySelector('.guess-incorrect');
let head = document.getElementById('head');
let tail = document.getElementById('tail');
let guessNumber;
let overlayText = document.getElementById('overlay-text');
var cGuess = 0;
var icGuess = 0;

//The coinflip function
function coinflip(a) {
    if ((Math.random() < 0.5 && a == 0) || (Math.random() > 0.5 && a == 1)) {
        cGuess += 1;
        //Assigning the value of cGuess to the score
        guessCorrect.innerText = cGuess;
        //The overlay text
        overlayText.style.display = "block";
        overlayText.style.color = "green";
        overlayText.innerText = "SUCCESS!!";
        setTimeout(function () {
            overlayText.style.display = "none";
        }, 300);
    }
    else {
        icGuess += 1;
        //Assigning the value of icGuess to the score
        guessIncorrect.innerText = icGuess;
        //The overlay text
        overlayText.style.display = "block";
        overlayText.style.color = "red";
        overlayText.innerText = "TRY AGAIN!!";
        setTimeout(function () {
            overlayText.style.display = "none";
        }, 300);
    }
}

//Adding event listeners
head.addEventListener('click', e => {
    coinflip(0);
})
tail.addEventListener('click', e => {
    coinflip(1);
})