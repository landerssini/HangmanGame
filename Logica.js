const registerButton = document.querySelector("#registerButton");
const userNameInput = document.querySelector("#userName");
const divGame = document.querySelector("#game");
const divScoreContainer = document.querySelector("#scoreContainer");
const divInicial = document.querySelector("#divInicial");
const player5 = document.querySelector("#player5");
const player5Points = document.querySelector("#player5Points");
const player5Time = document.querySelector("#player5Time");
const playersArray = [];
const localStorageObj = {};


// Página inicial, usuario & pasar al juego

registerButton.onclick = function(){
    if(userNameInput.value == ""){
        alert("Introduce your username before playing!");
    } else{
        playersArray.push(userNameInput.value)
        divInicial.style.display="none";
        divScoreContainer.style.display="flex";
        divGame.style.display="block";
        player5.textContent = userNameInput.value;
        player5Time.textContent = "Currently playing..."
    }
}

// Top 5 players + localStorage

localStorageObj = {
    username : "Albert",
    score : 1234,
    time : 35
}