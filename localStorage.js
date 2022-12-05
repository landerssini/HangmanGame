let localStorageObj;
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


scoreTableSelector = [];

localStorageObj= {1234:{
    username : "Albert",
    score : 1234,
    time : 35
},
100:{
    username : "Neymar Jr.",
    score : 100,
    time : 45
},
250:{
    username : "Ada Colau",
    score : 250,
    time : 80
},
300:{
    username : "Gomis",
    score : 300,
    time : 123
},
2000:{
    username : "Cheddar",
    score : 2000,
    time : 74
}};

localStorageObj[3000] = {
    username : "AlbertG",
    score : 3000,
    time : 0
}

scores=Object.keys(localStorageObj);

scoresSorted = scores.sort(function(a, b){return b - a});

let scoresSorted5 =[];

for (let i = 0; i <5; i++){
    scoresSorted5.push(scoresSorted[i]);
}


function setLocalStorage(){
    let x = 1;
    for(let i of scoresSorted5){
    localStorage.setItem(`usuario${x}`, JSON.stringify(localStorageObj[i]));
    x++;
}};

setLocalStorage();


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

localStorageToUsername();
localStorageToScore();
localStorageToTime();
