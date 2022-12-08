let scores;
let namePrimero = document.querySelector("#primero .name");
let nameSegundo = document.querySelector("#segundo .name");
let nameTercero = document.querySelector("#tercero .name");
let nameCuarto = document.querySelector("#cuarto .name");
let nameQuinto = document.querySelector("#quinto .name");
let scorePrimero = document.querySelector("#primero .score");
let scoreSegundo = document.querySelector("#segundo .score");
let scoreTercero = document.querySelector("#tercero .score");
let scoreCuarto = document.querySelector("#cuarto .score");
let scoreQuinto = document.querySelector("#quinto .score");
let timePrimero = document.querySelector("#primero .time");
let timeSegundo = document.querySelector("#segundo .time");
let timeTercero = document.querySelector("#tercero .time");
let timeCuarto = document.querySelector("#cuarto .time");
let timeQuinto = document.querySelector("#quinto .time");
let namesAll = document.querySelectorAll(".name");
let scoresAll = document.querySelectorAll(".score");
let timesAll = document.querySelectorAll(".time");
let scoresSorted;
let scoresSorted5;
let botonScore = document.querySelector("#scoreContainer h2")
let botonName = document.querySelector("#primero .name")


scoreTableSelector = [];

initialLocalStorage = {};

for (let i = 1; i <= localStorage.length; i++){
    let itemScore = JSON.parse(localStorage.getItem(`usuario${i}`))['score'];
    initialLocalStorage[itemScore] = JSON.parse(localStorage.getItem(`usuario${i}`));
}


let localStorageObj= {230:{
    username : "Neymar Jr.",
    score : 230,
    time : 35
},
100:{
    username : "JJ",
    score : 100,
    time : 45
},
200:{
    username : "Ada Colau",
    score : 200,
    time : 80
},
250:{
    username : "Manu",
    score : 250,
    time : 123
},
175:{
    username : "Emilio",
    score : 175,
    time : 74
}};

// localStorageObj[1502] = {
//     username : "Rachel",
//     score : 1502,
//     time : 0
// }



function selectTopScorers(){

    Object.assign(localStorageObj, initialLocalStorage);

    scores=Object.keys(localStorageObj);

    scoresSorted = scores.sort(function(a, b){return b - a});

    scoresSorted5 =[];

    for (let i = 0; i <5; i++){
        scoresSorted5.push(scoresSorted[i]);
    }
}


function setLocalStorage(){
    selectTopScorers();
    let x = 1;
    for(let i of scoresSorted5){
    localStorage.setItem(`usuario${x}`, JSON.stringify(localStorageObj[i]));
    x++;
}};


// setLocalStorage();


function localStorageToUsername(){
    let x = 1;
    for(let i of namesAll){
        usuario = JSON.parse(localStorage.getItem(`usuario${x}`));
        i.textContent = usuario["username"];
        x++;
    }
}

function localStorageToScore(){
    let x = 1;
    for(let i of scoresAll){
        usuario = JSON.parse(localStorage.getItem(`usuario${x}`));
        i.textContent = usuario["score"];
        x++;
    }
}

function localStorageToTime(){
    let x = 1;
    for(let i of timesAll){
        usuario = JSON.parse(localStorage.getItem(`usuario${x}`));
        i.textContent = usuario["time"] + "s";
        x++;
    }
}

// localStorageToUsername();
// localStorageToScore();
// localStorageToTime();

botonScore.onclick = function(){
    localStorageToUsername()
    localStorageToScore()
    localStorageToTime()
}

// botonName.onclick = function()
function finalLocalStorage(){
    localStorageObj[score] = {
        username : userNameInput.value,
        score : score,
        time : 56
    }

    setLocalStorage();
    localStorageToUsername();
    localStorageToScore()
    localStorageToTime()
    // player5.textContent = userNameInput.value;
    // player5Points.textContent = "0"
    // player5Time.textContent = "Currently playing..."
}

