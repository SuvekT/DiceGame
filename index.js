//alert('working');
var randomnum1= Math.floor(Math.random() *6)+1;  // gives random number between 1-6

var randomdiceimage="dice" + randomnum1 +".png" ; // string from dice1.png to dice6.png

var randomimagesource="images/"+randomdiceimage;  // i.e images/dice1.png to images/dice2.png

var image1=document.querySelectorAll("img")[0];

image1.setAttribute("src",randomimagesource);

var randomnum2=Math.floor(Math.random()*6)+1;

var randomimagesource2="images/dice"+randomnum2+".png";

var image2=document.querySelectorAll("img")[1];
image2.setAttribute("src",randomimagesource2);

if(randomnum1>randomnum2){
    document.querySelector("h1").innerHTML="💥PLayer1 Wins";
}
else if(randomnum1==randomnum2){
    document.querySelector("h1").innerHTML="💥 draw! 💥";
}
else{
    document.querySelector("h1").innerHTML="💥Player2 Wins";
}