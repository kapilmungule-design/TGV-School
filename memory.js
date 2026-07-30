/*=====================================
MEMORY MATCH GAME
S A D Developer
=====================================*/

const icons = [

"🍎","🍎",
"🚗","🚗",
"⚽","⚽",
"🎓","🎓",
"📚","📚",
"🌍","🌍",
"🐼","🐼",
"⭐","⭐"

];

let cards = [];

let firstCard = null;

let secondCard = null;

let lockBoard = false;

let moves = 0;

let score = 0;

let seconds = 0;

let timer = null;

/*==========================
START GAME
==========================*/

function startGame(){

clearInterval(timer);

seconds = 0;

moves = 0;

score = 0;

firstCard = null;

secondCard = null;

lockBoard = false;

document.getElementById("moves").innerHTML = 0;

document.getElementById("score").innerHTML = 0;

document.getElementById("timer").innerHTML = "00:00";

cards = [...icons];

cards.sort(()=>Math.random()-0.5);

let game = document.getElementById("memoryGame");

game.innerHTML="";

cards.forEach(icon=>{

let card=document.createElement("div");

card.className="memoryCard";

card.dataset.icon=icon;

card.innerHTML=icon;

card.onclick=()=>flipCard(card);

game.appendChild(card);

});

timer=setInterval(updateTimer,1000);

}

/*==========================
TIMER
==========================*/

function updateTimer(){

seconds++;

let m=Math.floor(seconds/60);

let s=seconds%60;

document.getElementById("timer").innerHTML=

String(m).padStart(2,"0")

+

":"

+

String(s).padStart(2,"0");

}

/*==========================
FLIP CARD
==========================*/

function flipCard(card){

if(lockBoard) return;

if(card===firstCard) return;

if(card.classList.contains("done")) return;

card.classList.add("open");

if(firstCard==null){

firstCard=card;

return;

}

secondCard=card;

moves++;

document.getElementById("moves").innerHTML=moves;

checkMatch();

}

/*==========================
CHECK MATCH
==========================*/

function checkMatch(){

lockBoard=true;

if(firstCard.dataset.icon===secondCard.dataset.icon){

firstCard.classList.remove("open");

secondCard.classList.remove("open");

firstCard.classList.add("done");

secondCard.classList.add("done");

score++;

document.getElementById("score").innerHTML=score;

resetTurn();

checkWinner();

}

else{

setTimeout(()=>{

firstCard.classList.remove("open");

secondCard.classList.remove("open");

resetTurn();

},800);

}

}

/*==========================
RESET TURN
==========================*/

function resetTurn(){

firstCard=null;

secondCard=null;

lockBoard=false;

}

/*==========================
WINNER
==========================*/

function checkWinner(){

if(score!==8) return;

clearInterval(timer);

let best=

localStorage.getItem("memoryBest");

if(best==null || moves<best){

localStorage.setItem(

"memoryBest",

moves

);

best=moves;

}

document.getElementById("finalMoves").innerHTML=moves;

document.getElementById("finalTime").innerHTML=

document.getElementById("timer").innerHTML;

document.getElementById("bestScore").innerHTML=best;

let star="⭐⭐⭐";

if(moves>16){

star="⭐⭐";

}

if(moves>24){

star="⭐";

}

document.getElementById("stars").innerHTML=star;

document.getElementById("winPopup").style.display="flex";

startConfetti();

showAchievement();

}
/*==========================
AUTO START
==========================*/

startGame();


function playAgain(){

document.getElementById("winPopup").style.display="none";

startGame();

}



/*=========================
CONFETTI
=========================*/

function startConfetti(){

let box=document.getElementById("confetti");

box.innerHTML="";

let colors=[

"#ff1744",

"#00e676",

"#2979ff",

"#ffea00",

"#ff9100",

"#d500f9"

];

for(let i=0;i<180;i++){

let c=document.createElement("div");

c.className="confetti";

c.style.left=Math.random()*100+"%";

c.style.background=

colors[Math.floor(Math.random()*colors.length)];

c.style.animationDelay=

Math.random()*2+"s";

c.style.animationDuration=

3+Math.random()*3+"s";

box.appendChild(c);

}

}

/*=========================
Achievement
=========================*/

function showAchievement(){

let a=

document.getElementById("achievement");

a.classList.add("show");

setTimeout(()=>{

a.classList.remove("show");

},3500);

}