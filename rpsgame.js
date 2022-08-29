// computer's-part---------------------------------------
function randomNumber(){
    return Math.floor(Math.random()*3)
}

function computerResult(){
if(randomNumber() == 0){
    document.querySelector(".result-computer").textContent = "✊";
}
else if(randomNumber() == 1){
    document.querySelector(".result-computer").textContent = "✋";
}
else{
    document.querySelector(".result-computer").textContent = "✌";
}
}
let rock = document.querySelector("#rock");
rock.addEventListener("click", () => {
    computerResult(),
    rockClicked(),
    match()
    });
let paper = document.querySelector("#paper");
paper.addEventListener("click",() => {
    computerResult(),
    paperClicked(),
    match()});
let scissor = document.querySelector("#scissor");
scissor.addEventListener("click", () => {
    computerResult(),
    scissorClicked(),
    match()});
// human-pick------------------------------------------------------

function rockClicked(){
    document.querySelector(".result-human").textContent = "✊";
}
function paperClicked(){
    document.querySelector(".result-human").textContent = "✋";
}
function scissorClicked(){
    document.querySelector(".result-human").textContent = "✌";
}
//result-counter-----------------------------------------------
let humanPoint = 0;
let computerPoint = 0;
function match(){
    if (document.querySelector(".result-human").textContent == document.querySelector(".result-computer").textContent){
        document.querySelector("#description").textContent = "It's a tie!";
    } else if(document.querySelector(".result-human").textContent == "✊" && document.querySelector(".result-computer").textContent == "✋"){
        document.querySelector("#description").textContent = "Paper stronger then rock. Point to the computer";
        computerPoint++;
    }else if(document.querySelector(".result-human").textContent == "✊" && document.querySelector(".result-computer").textContent == "✌"){
        document.querySelector("#description").textContent = "Rock is stronger then scissor. Point to the Player";
        humanPoint++;
    }else if(document.querySelector(".result-human").textContent == "✋" && document.querySelector(".result-computer").textContent == "✌"){
        document.querySelector("#description").textContent = "Scissor is stronger then paper. Point to the Computer";
        computerPoint++;
    }else if(document.querySelector(".result-human").textContent == "✋" && document.querySelector(".result-computer").textContent == "✊"){
        document.querySelector("#description").textContent = "Paper is stronger then rock. Point to the Player";
        humanPoint++;
    }else if(document.querySelector(".result-human").textContent == "✌" && document.querySelector(".result-computer").textContent == "✊"){
        document.querySelector("#description").textContent = "Rock is stronger then scissor. Point to the Computer";
        computerPoint++;
    }else {
        document.querySelector("#description").textContent = "Scissor is stronger then paper Point to the Player";
        humanPoint++;
    }

    document.querySelector(".points-computer").textContent = `Computer: ${computerPoint}`;
    document.querySelector(".points-human").textContent = `Player: ${humanPoint}`;
//Game-Over------------------------------------------------------------------------------------------------
    function gameOver(){
        if (document.querySelector(".points-human").textContent == `Player: 5`){
            document.querySelector(".gameover-text").textContent = "Congratulation!"
            document.querySelector(".game-over").style.visibility = "visible";
        } else{
            document.querySelector(".gameover-text").textContent = "Game Over!"
            document.querySelector(".game-over").style.visibility = "visible";
        }
    }

    if (computerPoint == 5 || humanPoint == 5){
        gameOver();
    }
//Game-Restart------------------------------------------------------------------------------------------------------

document.querySelector(".again-btn").addEventListener('click', restartGame);

function restartGame(){
    humanPoint = 0;
    computerPoint = 0;
    document.querySelector(".points-computer").textContent = `Computer: ${computerPoint}`;
    document.querySelector(".points-human").textContent = `Player: ${humanPoint}`;
    document.querySelector("#description").textContent = "";
    document.querySelector(".result-human").textContent == "❔";
    document.querySelector(".result-computer").textContent == "❔";
    document.querySelector(".game-over").style.visibility = "hidden";

}













}

