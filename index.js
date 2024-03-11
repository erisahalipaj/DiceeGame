

var randomNumber1 = Math.floor(Math.random() *6 )+1;
var image = "dice"+ randomNumber1 +".png";
randomImageSrc = "./images/" + image;
document.querySelectorAll("img")[0].setAttribute("src",randomImageSrc);



var randomNumber2 = Math.floor(Math.random() *6 )+1;
var image = "dice"+ randomNumber2 +".png";
randomImageSrc = "./images/" + image;
document.querySelector(".img2").setAttribute("src", randomImageSrc );

if(randomNumber1 > randomNumber2){
document.querySelector("h1").innerHTML = " Player 1 Wins !";
}else if(randomNumber1 < randomNumber2) {
    document.querySelector("h1").innerHTML = " Player 2 Wins !";
}else{
    document.querySelector("h1").innerHTML = " Draw !";
}


