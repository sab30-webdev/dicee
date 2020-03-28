var randomNumber0=Math.ceil(Math.random()*6)

var randomDiceImage0="dice"+randomNumber0+".png"

var randomImageSource0="images/"+randomDiceImage0

var image0=document.querySelectorAll("img")[0];

image0.setAttribute("src",randomImageSource0);



var randomNumber1=Math.ceil(Math.random()*6)

var randomDiceImage1="dice"+randomNumber1+".png"

var randomImageSource1="images/"+randomDiceImage1

var image1=document.querySelectorAll("img")[1];

image1.setAttribute("src",randomImageSource1);


if(randomNumber0>randomNumber1){
  document.querySelector("h1").innerHTML="🚩 Player 1 wins!";
}
else if(randomNumber0<randomNumber1){
  document.querySelector("h1").innerHTML="Player 2 wins! 🚩";
}
else{
  document.querySelector("h1").innerHTML="It's a draw! ☹";
}
