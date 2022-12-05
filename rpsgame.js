// declaration
const resultComputerText = document.querySelector(".result-computer");
const resultHumanText = document.querySelector(".result-human");
const resultDescription = document.querySelector("#description");
const pointHuman = document.querySelector(".points-human");
const pointComputer = document.querySelector(".points-computer");
const gameOverText = document.querySelector(".gameover-text");
const gameOverDiv = document.querySelector(".game-over");
let overDiv = document.querySelector(".overlay-div");
const body = document.body;

// computer's-part---------------------------------------
function randomNumber(){
    return Math.floor(Math.random()*3)
}

function computerResult(){

if(randomNumber() == 0){
    resultComputerText.textContent = "✊";
}
else if(randomNumber() == 1){
    resultComputerText.textContent = "✋";
}
else{
    resultComputerText.textContent = "✌";
}
}
let rock = document.querySelector("#rock");
rock.addEventListener("click", () => {
    rockClicked()
    clickcall()
    });
let paper = document.querySelector("#paper");
paper.addEventListener("click", () => {
    paperClicked()
    clickcall()
    });

let scissor = document.querySelector("#scissor");
scissor.addEventListener("click", () => {
    scissorClicked()
    clickcall()
    });
// human-pick------------------------------------------------------

function rockClicked(){
    resultHumanText.textContent = "✊";
}
function paperClicked(){
    resultHumanText.textContent = "✋";
}
function scissorClicked(){
    resultHumanText.textContent = "✌";
}
//result-counter-----------------------------------------------
let humanPoint = 0;
let computerPoint = 0;

function match(){
    if (resultHumanText.textContent == resultComputerText.textContent){
        resultDescription.textContent = "It's a tie!";
    } else if(resultHumanText.textContent == "✊" && resultComputerText.textContent == "✋"){
        resultDescription.textContent = "Paper stronger then rock. Point to the computer";
        computerPoint++;
    }else if(resultHumanText.textContent == "✊" && resultComputerText.textContent == "✌"){
        resultDescription.textContent = "Rock is stronger then scissor. Point to the Player";
        humanPoint++;
    }else if(resultHumanText.textContent == "✋" && resultComputerText.textContent == "✌"){
        resultDescription.textContent = "Scissor is stronger then paper. Point to the Computer";
        computerPoint++;
    }else if(resultHumanText.textContent == "✋" && resultComputerText.textContent == "✊"){
        resultDescription.textContent = "Paper is stronger then rock. Point to the Player";
        humanPoint++;
    }else if(resultHumanText.textContent == "✌" && resultComputerText.textContent == "✊"){
        resultDescription.textContent = "Rock is stronger then scissor. Point to the Computer";
        computerPoint++;
    }else {
        resultDescription.textContent = "Scissor is stronger then paper Point to the Player";
        humanPoint++;
    }

    pointComputer.textContent = `Computer: ${computerPoint}`;
    pointHuman.textContent = `Player: ${humanPoint}`;
}
//Game-Over------------------------------------------------------------------------------------------------
    function overlayBckg(){
        overDiv = document.createElement('div');
        overDiv.setAttribute('id', 'overlay-div');
        overDiv.style.display = "block";
        body.appendChild(overDiv);

        }
    


    function gameOver(){
        overlayBckg();
        gameOverDiv.style.visibility = "visible";
        if (pointHuman.textContent == `Player: 5`){
            gameOverText.textContent = "Congratulation!"
        } else{
            gameOverText.textContent = "Game Over!"
        }
    }
//Game-Restart------------------------------------------------------------------------------------------------------

document.querySelector(".again-btn").addEventListener('click', restartGame);

function restartGame(){
    humanPoint = 0;
    computerPoint = 0;
    pointComputer.textContent = `Computer: ${computerPoint}`;
    pointHuman.textContent = `Player: ${humanPoint}`;
    resultDescription.textContent = "";
    resultHumanText.textContent == "❔";
    resultComputerText.textContent == "❔";
    gameOverDiv.style.visibility = "hidden";
    overDiv.style.display = "none";

}
//click call----------------------------

function clickcall(){
    computerResult(),
    match()
    if (computerPoint == 5 || humanPoint == 5){
        gameOver();
    }
}