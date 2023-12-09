let face = 0;
let cross = 0;
let result = 0;
let coinTime = 5;
const coin = document.querySelector(".coin");
const start = document.querySelector(".startGame");
const reset = document.querySelector(".reset");

start.addEventListener("click", startGame);
reset.addEventListener("click", resetGame);

function startGame() {
    start.disabled = true;
    coin.style.animation = "none";
    coin.addEventListener("animationend", onAnimationEnd);
    //generamos resultado del lanzamiento
    result = Math.floor(Math.random()*2);
    coinTime = Math.floor(Math.random()*7) + 4;
    if (result === 0) {
        setTimeout(() =>{
            coin.style.animation = `spin-face ${coinTime}s forwards`;
        },50)
    }
    else{
        setTimeout(() =>{
            coin.style.animation = `spin-cross ${coinTime}s forwards`;
        },50)
    }
}

function resetGame() {
    face = 0;
    document.querySelector(".faceCount").innerHTML = "Cara: 0";
    cross = 0;
    document.querySelector(".crossCount").innerHTML = "Cruz: 0";
}

function onAnimationEnd () {
    console.log(result);
    start.disabled = false;
    coin.removeEventListener("animationend", onAnimationEnd);
    if (result === 0) {
        face++;
        document.querySelector(".faceCount").innerHTML = `Cara: ${face}`;
    }
    else {
        cross++;
        document.querySelector(".crossCount").innerHTML = `Cruz: ${cross}`;
    }
}

