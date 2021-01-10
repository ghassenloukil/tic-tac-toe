var scoreX = 0;
var scoreO = 0;
var player;

function changeBackground(){
    var r = Math.ceil(Math.random()*94)+75;
    var g = Math.ceil(Math.random()*100)+68;
    var b = Math.ceil(Math.random()*70)+50;
    document.body.style.backgroundColor = 'hsl('+r+','+g+'%,'+b+'%)';
}

function alert1(){
   
   alert("My first JS game! Let's try! Thanks for like! :) :) ");
   alert("After win/lose/draw click "+"Restart"+ "! And play again! :) ");
}

function start(){
    choosePlayer();
    currentPlayer();
    changeBackground();
    alert1();
}

setInterval(changeBackground, 7000);

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