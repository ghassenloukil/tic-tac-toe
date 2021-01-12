var scoreX = 0;
var scoreO = 0;
var player;
var topLeft, middleLeft, bottomLeft;
var topCenter, middleCenter, bottomCenter;
var topRight, middleRight, bottomRight;
var turn ;
var clickTimes=0;
var turn =document.getElementById('turn').innerHTML;
if(turn == "X turn!")
    turn = false;
if(turn == "O turn!")
    turn = true;

function alert1(){
   
   alert("Welcome to my game! Let's try! Thanks for like! :)  ");
   alert("After win Or lose click "+"Restart"+ "! And play again! :) ");
}

function start(){
    choosePlayer();
    currentPlayer();
    alert1();
}
function click(){
    game()
    check()
}

function choosePlayer() {
    player = Math.floor(Math.random() * 2);
}

function currentPlayer() {
    if (player === 1) {
        document.getElementById("playerStatus").innerHTML = "Current player: X";
        document.getElementById("turn").innerHTML="X turn !"
      
      } else if (player === 0) {
        document.getElementById("playerStatus").innerHTML = "Current player: O";
        document.getElementById("turn").innerHTML="O turn !"
      
          }
}


window.onload = start;


function game(btn) {
    if (player === 1) {
        currentPlayer();
        document.getElementById(btn).value = "X";
         
        document.getElementById(btn).disabled = "disabled";
        check();
         player -= 1;
        currentPlayer();

    } else if (player === 0) {
        currentPlayer();
        document.getElementById(btn).value = "O";
        
        document.getElementById(btn).disabled = "disabled";
        check();
        player += 1;
        currentPlayer();
    }
 
}

function check(){
    topLeft=document.getElementById("btn1").value
    middlLeft=document.getElementById("btn2").value
    bottomLeft=document.getElementById("btn3").value

    topCenter=document.getElementById("btn4").value
    middleCenter=document.getElementById("btn5").value
    bottomCenter=document.getElementById("btn6").value

    topRight=document.getElementById("btn7").value
    middleRight=document.getElementById("btn8").value
    bottomRight=document.getElementById("btn9").value

    if((topLeft==='X')&&(topCenter==='X')&&(topRight==='X')){
        document.getElementById('turn').innerHTML = 'X WON!'
            setTimeout(function(){ alert('congrats!first player win'); }, 1000);
            scoreO ++
            giveScoreX();
            addRestart();
            disableButton();
        }
        if((middlLeft==='X')&&(middleCenter==='X')&&(middleRight==='X')){
            document.getElementById('turn').innerHTML ='X WON!'
            setTimeout(function(){ alert('congrats!first player win'); }, 1000);
            scoreO ++
            giveScoreX();
            addRestart();
            disableButton();
        }
        if((bottomLeft==='X')&&(bottomCenter==='X')&&(bottomRight==='X')){
            document.getElementById('turn').innerHTML ='X WON!'
            setTimeout(function(){ alert('congrats!first player win'); }, 1000);
            scoreO ++
            giveScoreX();
            addRestart();
            disableButton();
        }
        if((topLeft==='X')&&(middlLeft==='X')&&(bottomLeft==='X')){
            document.getElementById('turn').innerHTML='X WON !'
            setTimeout(function(){ alert('congrats!first player win'); }, 1000);
            scoreO ++
            giveScoreX();
            addRestart();
            disableButton();
        }
        if ((topCenter==='X')&&(middleCenter==='X')&&(bottomCenter==='X')){
            document.getElementById('turn').innerHTML ='X WON!'
            setTimeout(function(){ alert('congrats!first player win'); }, 1000);
            scoreO ++
            giveScoreX();
            addRestart();
            disableButton();
        }
        if((topRight==='X')&&(middleRight==='X')&&(bottomRight==='X')){
            document.getElementById('turn').innerHTML='X WON!'
            setTimeout(function(){ alert('congrats!first player win'); }, 1000);
            scoreO ++
            giveScoreX();
            addRestart();
            disableButton();
        }
        if((topLeft==='X')&&(middleCenter==='X')&&(bottomRight==='X')){
            document.getElementById('turn').innerHTML='X WON!'
            setTimeout(function(){ alert('congrats!first player win'); }, 1000);
            scoreO ++
            giveScoreX();
            addRestart();
            disableButton();
        }
        if((bottomLeft==='X')&&(middleCenter==='X')&&(topRight==='X')){
            document.getElementById('turn').innerHTML='X WON!'
            setTimeout(function(){ alert('congrats!first player win'); }, 1000);
            scoreO ++
            giveScoreX();
            addRestart();
            disableButton();
        }
        if((topLeft==='O')&&(topCenter==='O')&&(topRight==='O')){
            document.getElementById('turn').innerHTML = 'O WON!'
            setTimeout(function(){ alert('congrats!second player win'); }, 1000);
            scoreO ++
            giveScoreO();
            addRestart();
            disableButton();
        }
        if((middlLeft==='O')&&(middleCenter==='O')&&(middleRight==='O')){
            document.getElementById('turn').innerHTML ='O WON!'
            setTimeout(function(){ alert('congrats!second player win'); }, 1000);
            scoreO ++
            giveScoreO();
            addRestart();
            disableButton();
        }
        if((bottomLeft==='O')&&(bottomCenter==='O')&&(bottomRight==='O')){
            document.getElementById('turn').innerHTML ='O WON!'
            setTimeout(function(){ alert('congrats!second player win'); }, 1000);
            scoreO ++
            giveScoreO();
            addRestart();
            disableButton();
        }
        if((topLeft==='O')&&(middlLeft==='O')&&(bottomLeft==='O')){
            document.getElementById('turn').innerHTML='O WON !'
            setTimeout(function(){ alert('congrats!second player win'); }, 1000);
            scoreO ++
            giveScoreO();
            addRestart();
            disableButton();
        }
        if ((topCenter==='O')&&(middleCenter==='O')&&(bottomCenter==='O')){
            document.getElementById('turn').innerHTML ='O WON!'
            setTimeout(function(){ alert('congrats!second player win'); }, 1000);
            scoreO ++
            giveScoreO();
            addRestart();
            disableButton();
        }
        if((topRight==='O')&&(middleRight==='O')&&(bottomRight==='O')){
            document.getElementById('turn').innerHTML='O WON!'
            setTimeout(function(){ alert('congrats!second player win'); }, 1000);
            scoreO ++
            giveScoreO();
            addRestart();
            disableButton();
        }
        if((topLeft==='O')&&(middleCenter==='O')&&(bottomRight==='O')){
            document.getElementById('turn').innerHTML='O WON!'
            setTimeout(function(){ alert('congrats!second player win'); }, 1000);
            scoreO ++
            giveScoreO();
            addRestart();
            disableButton();
        }
        if((bottomLeft==='O')&&(middleCenter==='O')&&(topRight==='O')){
            document.getElementById('turn').innerHTML='O WON!'
            setTimeout(function(){ alert('congrats!second player win'); }, 1000);
            scoreO ++
            giveScoreO();
            addRestart();
            disableButton();
        }else{
            addRestart();
        }
 }

    

// function restart() {
//     document.getElementById("btn1").value = "";
//     document.getElementById("btn2").value = "";
//     document.getElementById("btn3").value = "";
//     document.getElementById("btn4").value = "";
//     document.getElementById("btn5").value = "";
//     document.getElementById("btn6").value = "";
//     document.getElementById("btn7").value = "";
//     document.getElementById("btn8").value = "";
//     document.getElementById("btn9").value = "";
//     document.getElementById("btn1").disabled = "";
//     document.getElementById("btn2").disabled = "";
//     document.getElementById("btn3").disabled = "";
//     document.getElementById("btn4").disabled = "";
//     document.getElementById("btn5").disabled = "";
//     document.getElementById("btn6").disabled = "";
//     document.getElementById("btn7").disabled = "";
//     document.getElementById("btn8").disabled = "";
//     document.getElementById("btn9").disabled = "";
    
// }
function addRestart(){
    document.getElementById('button').innerHTML='<button onclick="'+'restart()'+'"id="'+'restart'+'">Restart!</button'
}

function giveScoreX(){
    document.getElementById('scoreX').innerHTML='score X = '+scoreX+' '
    if(scoreX ===5){
        alert('your level is good X!');
    }
    else if(scoreX ===10){
        alert ('your level is master X!');
    }
}

function giveScoreO(){
    document.getElementById('scoreO').innerHTML='score O = '+scoreO+' '
    if (scoreO===5){
        alert('your level is good O!');
    }
    else if(scoreO===10){
        alert('your level is master O!')
    }
}

// function disablebutton(){
//     document.getElementById('btn1').disabled='disabled';
//     document.getElementById('btn2').disabled='disabled';
//     document.getElementById('btn3').disabled='disabled';
//     document.getElementById('btn4').disabled='disabled';
//     document.getElementById('btn5').disabled='disabled';
//     document.getElementById('btn6').disabled='disabled';
//     document.getElementById('btn7').disabled='disabled';
//     document.getElementById('btn8').disabled='disabled';
//     document.getElementById('btn9').disabled='disabled';
// }



