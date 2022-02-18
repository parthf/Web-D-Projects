// For image 1
let randomNumber1 = Math.floor(Math.random() * 6) + 1; // 1-6
let randomDiceImage1 = "images/dice" + randomNumber1 + ".png"; // dice1 -dice6
let image1 = document.getElementsByClassName("img1")[0].setAttribute("src", randomDiceImage1);

// For image2
let randomNumber2 = Math.floor(Math.random() * 6) + 1; // 1-6
let randomDiceImage2 = "images/dice" + randomNumber2 + ".png"; // dice1-dice6
let image2 = document.getElementsByClassName("img2")[0].setAttribute("src", randomDiceImage2);

if(randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "Player 1 wins!";
}

else if(randomNumber2 > randomNumber1){
    document.querySelector("h1").innerHTML = "Player 2 wins!";
}

else{
    document.querySelector("h1").innerHTML = "Draw!";
}