var scoreX = 0;
var scoreO = 0;
var player;




function alert1(){
   
   alert("Welcome to my game! Let's try! Thanks for like! :)  ");
   alert("After win Or lose click "+"Restart"+ "! And play again! :) ");
}

function start(){
    choosePlayer();
    currentPlayer();
    alert1();
}



function choosePlayer() {
    player = Math.floor(Math.random() * 2);
}
function currentPlayer() {
    if (player === 1) {
        document.getElementById("playerStatus").innerHTML = "Current player: X";
    } else if (player === 0) {
        document.getElementById("playerStatus").innerHTML = "Current player: O";
    }
}

window.onload = start;

function game(btn) {
    if (player === 1) {
        currentPlayer();
        document.getElementById(btn).value = "X";
        document.getElementById(btn).disabled = "disabled";
        winner();
         player -= 1;
        currentPlayer();

    } else if (player === 0) {
        currentPlayer();
        document.getElementById(btn).value = "O";
        document.getElementById(btn).disabled = "disabled";
        winner();
        player += 1;
        currentPlayer();
    }

}

