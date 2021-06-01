'use strict';

//select dice element
var btnRoll = document.querySelector('.btn--roll');
var btnHold = document.querySelector('.btn--hold');
var btnNew = document.querySelector('.btn--new');
var ply1CurrScore = document.querySelector('#current--0');
var ply2CurrScore = document.querySelector('#current--1');
var ply1TotalScore = document.querySelector('#score--0');
var ply2TotalScore = document.querySelector('#score--1');
var player1 = document.querySelector('.player--0');
var player2 = document.querySelector('.player--1');
var img = document.querySelector('.dice')

var dieRoll,ply1CurrSum =0,ply2CurrSum =0;

btnRoll.addEventListener('click',function(){
dieRoll = Math.trunc(Math.random()*6 + 1); 

 if(dieRoll!=1)
 {   console.log(player1.classList.contains('player--active'));
     player1.classList.contains('player--active') == true?
     (ply1CurrSum +=dieRoll,ply1CurrScore.textContent = ply1CurrSum):
     (ply2CurrSum +=dieRoll,ply2CurrScore.textContent = ply2CurrSum);
    
 }
 else{
    player1.classList.contains('player--active') == true?
    (ply1CurrScore.textContent = 0,ply1CurrSum = 0,player2.classList.add('player--active'),
    player1.classList.remove('player--active')) 
                             :
    (ply2CurrScore.textContent = 0,ply2CurrSum = 0,player1.classList.add('player--active'),
    player2.classList.remove('player--active'));
    

 }
 displayImage(dieRoll);
});

btnHold.addEventListener('click',function()
{    var temp,temp1;
     if(player1.classList.contains('player--active'))
    {   temp = Number(ply1CurrScore.textContent);
        temp1 = Number(ply1TotalScore.textContent);
        ply1TotalScore.textContent = temp + temp1;
        ply1CurrScore.textContent = 0;
        ply1CurrSum = 0;
        player1.classList.remove('player--active');
        player2.classList.add('player--active');
    }
    else{
        temp = Number(ply2CurrScore.textContent);
        temp1 = Number(ply2TotalScore.textContent);
        ply2TotalScore.textContent = temp + temp1;
        ply2CurrScore.textContent = 0;
        ply2CurrSum = 0;
        player2.classList.remove('player--active');
        player1.classList.add('player--active');
    }
  
})


var displayImage = function(dieNum)
{
    switch (dieNum){
        case 1: 
           img.src = "dice-1.png";
           break;
        case 2: 
           img.src = "dice-2.png";
           break;
        case 3: 
           img.src = "dice-3.png";
           break;
        case 4: 
           img.src = "dice-4.png";
           break;
        case 5: 
           img.src = "dice-5.png";
           break;
        case 6: 
           img.src = "dice-6.png";
           break;
    }

}



