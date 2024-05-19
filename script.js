'use strict';
document.querySelector('body').style.backgroundColor = "#009933";
// the following will give the random number between 0-20
let randomNumber = Math.floor(Math.random() * 20) + 1;
console.log("randomNumber--->",randomNumber);

// choosing let because, the scoreValue will keep changing...!
let scoreValue = 20;
let highScoreValue = 0;

document.querySelector('.message').textContent = "Let's Start The Game";

const inputBox = () => {
    const userInput = Number(document.querySelector('.guess').value);
    console.log("userInput--->",userInput, "type of userInput-->", typeof userInput);

    if (!userInput) {
        document.querySelector('.message').textContent = "No Number Given...";
    }
    
    // with each wrong click the score should decreased !
    else if (userInput > randomNumber) {
        if (scoreValue > 0) {
            document.querySelector('.message').textContent = "Too High...!";
            scoreValue -= 1;
            document.querySelector('.score').textContent = scoreValue;
        }
        else {
            document.querySelector('.message').textContent = "Ooops...! You've Lost the Game";
        }
    }
    else if (userInput < randomNumber) {
        if (scoreValue > 0) {
            document.querySelector('.message').textContent = "Too Low...!";
            scoreValue -= 1;
            document.querySelector('.score').textContent = scoreValue;
        }
        else {
            document.querySelector('.message').textContent = "Ooops...! You've Lost the Game"; 
        }
    }
    
    else if (userInput === randomNumber) {
        document.querySelector('.number').textContent = randomNumber;
        document.querySelector('.message').textContent = "Correct Number..!";
        document.querySelector('body').style.backgroundColor = "#cc9900";
        if (scoreValue > highScoreValue) {
            highScoreValue = scoreValue;
            document.querySelector('.highscore').textContent = highScoreValue;
        }
    }
};

document.querySelector('.check').addEventListener('click', inputBox);

// RESET THE GAME
const resetGame = () => {
    scoreValue = 20;
    randomNumber = Math.floor(Math.random() * 21);
    console.log("randomNumber after reset--->", randomNumber);
    document.querySelector('body').style.backgroundColor = "#009933";
    document.querySelector('.message').textContent = "Let's Start The Game";
    document.querySelector('.score').textContent = scoreValue;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
};

document.querySelector('.again').addEventListener('click', resetGame);
