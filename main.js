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
       //winner();
         player -= 1;
        currentPlayer();

    } else if (player === 0) {
        currentPlayer();
        document.getElementById(btn).value = "O";
        
        document.getElementById(btn).disabled = "disabled";
        //winner();
        player += 1;
        currentPlayer();
    }
 
}

function check(){
    topLeft=document.getElementById("btn1")
    middlLeft=document.getElementById("btn2")
    bottomLeft=document.getElementById("btn3")

    topCenter=document.getElementById("btn4")
    middleCenter=document.getElementById("btn5")
    bottomCenter=document.getElementById("btn6")

    topRight=document.getElementById("btn7")
    middleRight=document.getElementById("btn8")
    bottomRight=document.getElementById("btn9")

    if((topLeft==='X')&&(topCenter==='X')&&(topRight==='X')){
        document.getElementById('turn').innerHTML = 'X WON!'
                console.log('you won') ;
        }
        if((middlLeft==='X')&&(middleCenter==='x')&&(middleRight==='X')){
            document.getElementById('turn').innerHTML ='X WON!'
            console.log('you won') ;
        }
        if((bottomLeft==='X')&&(bottomCenter==='X')&&(bottomRight==='X')){
            document.getElementById('turn').innerHTML ='X WON!'
            console.log('you won') ;
        }
        if((topLeft==='X')&&(middlLeft==='X')&&(bottomLeft==='X')){
            document.getElementById('turn').innerHTML='X WON !'
            console.log('you won') ;
        }
        if ((topCenter==='X')&&(middleCenter==='X')&&(bottomCenter==='X')){
            document.getElementById('turn').innerHTML ='X WON!'
            console.log('you won') ;
        }
        if((topRight==='X')&&(middleRight==='X')&&(bottomRight==='X')){
            document.getElementById('turn').innerHTML='X WON!'
            console.log('you won') ;
        }
        if((topLeft==='X')&&(middleCenter==='X')&&(bottomRight==='X')){
            document.getElementById('turn').innerHTML='X WON!'
            console.log('you won') ;
        }
        if((bottomLeft==='X')&&(middleCenter==='X')&&(topRight==='X')){
            document.getElementById('turn').innerHTML='X WON!'
            console.log('you won') ;
        }
        if((topLeft==='O')&&(topCenter==='O')&&(topRight==='O')){
        document.getElementById('turn').innerHTML = 'O WON!'
                console.log('you won') ;
        }
        if((middlLeft==='O')&&(middleCenter==='O')&&(middleRight==='O')){
            document.getElementById('turn').innerHTML ='O WON!'
            console.log('you won');
        }
        if((bottomLeft==='O')&&(bottomCenter==='O')&&(bottomRight==='O')){
            document.getElementById('turn').innerHTML ='O WON!'
            console.log('you won') ;
        }
        if((topLeft==='O')&&(middlLeft==='O')&&(bottomLeft==='O')){
            document.getElementById('turn').innerHTML='O WON !'
            console.log('you won ');
        }
        if ((topCenter==='O')&&(middleCenter==='O')&&(bottomCenter==='O')){
            document.getElementById('turn').innerHTML ='O WON!'
            console.log('you won') ;
        }
        if((topRight==='O')&&(middleRight==='O')&&(bottomRight==='O')){
            document.getElementById('turn').innerHTML='O WON!'
            console.log('you won') ;
        }
        if((topLeft==='O')&&(middleCenter==='O')&&(bottomRight==='O')){
            document.getElementById('turn').innerHTML='O WON!'
            console.log('you won') ;
        }
        if((bottomLeft==='O')&&(middleCenter==='O')&&(topRight==='O')){
            document.getElementById('turn').innerHTML='O WON!'
            console.log('you won') ;
        }
    }

    

