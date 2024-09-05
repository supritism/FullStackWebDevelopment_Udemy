var randomNumber1 = Math.floor((Math.random() * 6) + 1);
var diceImage1 = "./images/dice" + randomNumber1 + ".png";
document.querySelector(".img1").setAttribute("src", diceImage1);

var randomNumber2 = Math.floor((Math.random() * 6) + 1);
var diceImage2 = "./images/dice" + randomNumber2 + ".png";
document.querySelector(".img2").setAttribute("src", diceImage2);

if(randomNumber1 === randomNumber2){
   //It's a Draw
   document.querySelector("h1").textContent = "Draw!"; 
} else if(randomNumber1 > randomNumber2) {
    //Player 1 wins
    document.querySelector("h1").textContent = "🚩 Player 1 Wins!";
} else {
    //Player 2 wins
    document.querySelector("h1").textContent = "Player 2 Wins! 🚩";
} 