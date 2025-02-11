var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var setImgSource1 =  document.querySelector(".img1").setAttribute("src", `images/dice${randomNumber1}.png`);
var setImgSource2 =  document.querySelector(".img2").setAttribute("src", `images/dice${randomNumber2}.png`);

var setWinner = document.querySelector("h1");

if (randomNumber1 > randomNumber2) {
    setWinner.innerHTML = "🚩 Player 1 Wins!";
} else if (randomNumber1 < randomNumber2) {
    setWinner.innerHTML = "Player 2 Wins! 🚩";
} else {
    setWinner.innerHTML = "Draw!";
}