//Dice 1
var randomNumber1 = Math.floor(Math.random()*6) + 1; //1-6
var dice1 = "images/" + "dice" + randomNumber1 + ".png" // images/dice1.png - images/dice6.png

document.querySelector(".img1").setAttribute("src", dice1); //change made to html

//Dice 2
var randomNumber2 = Math.floor(Math.random()*6) + 1; //1-6
var dice2 = "images/" + "dice" + randomNumber2 + ".png" // images/dice1.png - images/dice6.png

document.querySelector(".img2").setAttribute("src", dice2); //change made to html

if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "🎉 Player 1 Won";
} else if (randomNumber2 > randomNumber1) {
  document.querySelector("h1").innerHTML = "Player 2 Won 🎉";
} else {
  document.querySelector("h1").innerHTML = "🎉 Match Draw 🎉";
}
