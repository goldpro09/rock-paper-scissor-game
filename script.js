// TODO: MAKE HOW TO PLAY HELP!
let userScore = 0;
let computerScore = 0;
const userChoice_span = document.querySelector(".user-choice");
const computerChoice_span = document.querySelector(".computer-choice");
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const choices_div = document.querySelector(".choices");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissor_div = document.getElementById("s");
const actionMessage = document.getElementById("action-message");
const helpBox = document.getElementById("help-box");

// * NORMAL GAME
function getComputerChoice() {
    const choices = ['r', 'p', 's'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

function convertToWord(letter) {
    if(letter === "r") {return "Rock"};
    if(letter === "p") {return "Paper"};
    return "Scissor";

}


function win(userChoice, computerChoice) {
    const userChoice_div = document.getElementById(userChoice);
    userChoice_div.classList.add("blue-glow");
    setTimeout(() => userChoice_div.classList.remove("blue-glow"),300);

    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = `${convertToWord(userChoice)} beats ${convertToWord(computerChoice)}. You won!! 🔥🔥`
}

function lose(userChoice, computerChoice) {
    const userChoice_div = document.getElementById(userChoice);
    userChoice_div.classList.add("red-glow");
    setTimeout(() => userChoice_div.classList.remove("red-glow"),300);

    computerScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = `${convertToWord(userChoice)} loses to ${convertToWord(computerChoice)}. You lost!! 😒💩`
}

function draw(userChoice, computerChoice) {
    const userChoice_div = document.getElementById(userChoice);
    userChoice_div.classList.add("yellow-glow");
    setTimeout(() => userChoice_div.classList.remove("yellow-glow"),300);

    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = `${convertToWord(userChoice)} is equals to ${convertToWord(computerChoice)}. Draw!! 😐😑 `
}

function game(userChoice) {
    const computerChoice = getComputerChoice();
    userChoice_span.innerHTML = convertToWord(userChoice);
    computerChoice_span.innerHTML = convertToWord(computerChoice);
    switch (userChoice + computerChoice){
        // * USER WINS
        case "rs":
        case "pr":
        case "sp":
            win(userChoice, computerChoice);
            break;
        // * USER LOSES
        case "rp":
        case "ps":
        case "sr":
            lose(userChoice, computerChoice);
            break;
        // * DRAW
        case "rr":
        case "pp":
        case "ss":
            draw(userChoice, computerChoice);
            break;
    }
}

function main() {
    rock_div.addEventListener('click', () => game("r"));

    paper_div.addEventListener('click', () => game("p"));

    scissor_div.addEventListener('click', () => game("s"));

    actionMessage.addEventListener('click', function() {
        choices_div.classList.add("signal-choice");
        var hideSignal = setTimeout(() => choices_div.classList.remove("signal-choice"), 5000)
    })


}

main();

result_p.innerHTML = " ";

helpBox.style.display = "none";
// * HELP
function showHelp() {
    if (helpBox.style.display === "none") {
        helpBox.style.display = "block";
        helpBox.style.animation = "fadeIn 0.5s ease"
        window.scrollBy(0, 100); // Scroll 100px downwards
    } else {
        helpBox.style.display = "none";
        window.scrollBy(0, -100); // Scroll 100px upwards
    }
}