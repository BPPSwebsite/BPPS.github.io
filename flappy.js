var block = document.getElementById("block");
var hole = document.getElementById("hole");
var character = document.getElementById("character");
var jumping = 0;
var counter = 0;
var highscore = "bad";



hole.addEventListener('animationiteration', () => {
    var random = -((Math.random()*350)+200);
    hole.style.top = random + "px";
    counter++;
})
setInterval(function(){
    var characterTop = 
    parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    if(jumping==0){
    character.style.top = (characterTop+3)+"px";
    }
   
var blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
var holeTop = parseInt(window.getComputedStyle(hole).getPropertyValue("top"));


    var cTop = -(750-characterTop)
    if((characterTop>730)||(characterTop<155)||((blockLeft<30)&&(blockLeft>-70)&&((cTop<holeTop+5)||(cTop>holeTop+190)))){
     
        alert("Bozo lost XD, Your score was "+counter +" and your highscore is "+ highscore)
        character.style.top = 200 + "px";
        counter=0;
    }
}, 10 );
function jump(){

    jumping = 1;
    let jumpCount = 0;
    var jumpInterval = setInterval (function(){
        var characterTop = 
        parseInt(window.getComputedStyle(character).getPropertyValue("top"));
        if((characterTop>6)&&(jumpCount<15)){
        character.style.top = (characterTop-6)+"px";
        }
        if(jumpCount>20){
        clearInterval(jumpInterval);
        jumping=0;
        jumpCount=0;
        }
        jumpCount++;
    },10);
    

}