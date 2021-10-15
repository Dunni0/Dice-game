var scores,roundScore,activePlayer,dice;
scores=[0,0];
roundScore=0;
activePlayer=0;
var gamePlaying=true
//Math.floor rounding the numbers up
//Math.random performing the random selction
//dice= Math.floor(Math.random()*6)+1;
//console.log(dice)
//document.getElementById("") OR
//document.querySelector("#/.")
//innerHtml,value - content of the div
//document.querySelector("#current-" + activePlayer).innerHTML= dice;
var scoreZero= document.querySelector("#score-0");
console.log(scoreZero.textContent);
document.querySelector(".dice").style.display="none"; 

//remove dice
/*document.querySelector(".btn-roll").addEventListener( "click", function(){
    var dice= Math.floor(Math.random()*6)+1;
    var diceDom=document.querySelector(".dice");
    console.log(document.querySelector(".dice"));
    diceDom.style.display="block";
    diceDom.src="image/dice-" + dice + ".png";
})*/ // to show the dom of the img/img itself when i click on the button

document.querySelector("#score-0").textContent=0;
document.querySelector("#score-1").textContent=0;
document.querySelector("#current-0").textContent=0;
document.querySelector("#current-1").textContent=0;

    document.querySelector(".btn-roll").addEventListener('click',function(){
    if (gamePlaying){
    var diceDom=document.querySelector(".dice");
    diceDom.style.display="block";
    dice=Math.floor (Math.random()*6)+1;
    diceDom.src="image/dice-" + dice + ".png";
    if(dice !== 1){
        roundScore +=dice;
        document.querySelector("#current-"+activePlayer).textContent=roundScore;
    } 
    else{
        activePlayer == 0? activePlayer=1:activePlayer=0;
        roundScore=0;
        document.querySelector("#current-0").textContent=0;
        document.querySelector("#current-1").textContent=0;
        document.querySelector(".player-0-panel").classList.toggle("active");
        document.querySelector(".player-1-panel").classList.toggle("active");
        //document.querySelector(".player-0-panel").classList.remove("active");
        //document.querySelector(".player-1-panel").classList.add("active");
        document.querySelector(".dice").style.display="none";
    }
    }
    });
     document.querySelector(".btn-hold").addEventListener('click',function(){
         if(gamePlaying){
     scores[activePlayer]+=roundScore;
     console.log("final score" + scores[activePlayer]);
     document.querySelector("#score-"+activePlayer).textContent=scores[activePlayer];
         }
    if(scores[activePlayer]>=20){
        
        document.querySelector("#name-"+activePlayer).textContent="winner!";
        document.querySelector(".dice").style.display="none";
        document.querySelector(".player-"+ activePlayer + "-panel").classList.add("winner");
        document.querySelector(".player-"+ activePlayer + "-panel").classList.remove("active");
        gamePlaying=false;
    } else{
        next();
    };
});
    function next(){
        activePlayer==0? activePlayer=1:activePlayer=0
        roundScore=0
        document.getElementById("current-0").textContent=0;
        document.getElementById("current-1").textContent=0;
        document.querySelector(".player-0-panel").classList.toggle("active");
        document.querySelector(".player-1-panel").classList.toggle("active");
        document.querySelector(".dice").style.display="none";
    };
    
    document.querySelector(".btn-new").addEventListener('click',function (){
    newGame();
    });
     
    function newGame(){
    scores=[0,0];
    activePlayer=0;
    roundScore=0;
    document.querySelector("#score-0").textContent=0;
    document.querySelector("#score-1").textContent=0;
    document.getElementById("current-0").textContent=0;
    document.getElementById("current-1").textContent=0;
    document.getElementById("name-0").textContent="player 1";
    document.getElementById("name-1").textContent="player 2";
    document.querySelector(".player-0-panel").classList.remove("winner");
    document.querySelector(".player-1-panel").classList.remove("winner");
    document.querySelector(".player-1-panel").classList.remove("active");
    document.querySelector(".player-0-panel").classList.add("active");
    document.querySelector(".dice").style.display="none";
    gamePlaying=true;
    };


