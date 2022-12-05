var hangamandiv = document.querySelector("#hangman")
var stickman = document.getElementById("stickman");
var context = stickman.getContext("2d");
var emptyVar;
var binary = 0;
function frame () {
  if(binary === 0){
    frame1();
    binary = 1
  }else if (binary === 1){
    frame2();
    binary = 2
  }else if (binary === 2){
    frame3();
    binary = 010;
  }else if (binary === 010){
    frame4();
    binary = 011;
  } else if (binary === 011){
    head();
    binary = 0100;
  } else if (binary === 0100){
    torso();
    binary = 0101;
  } else if (binary ===0101){
    rightArm();
    binary = 0111;
  } else if (binary === 0111){
    leftArm();
    binary = 01010
  } else if(binary === 01010){
    leftLeg();
    binary = 01011;
  } else if (binary === 01011){
    rightLeg();
  }
  }
  
  function head() {
      stickman = document.getElementById("stickman");
      context = stickman.getContext("2d");
      context.beginPath();
      context.arc(60, 25, 10, 0, Math.PI * 2, true);
      context.stroke();
    }
    
    function draw($pathFromx, $pathFromy, $pathTox, $pathToy) {
      context.beginPath()
      context.moveTo($pathFromx, $pathFromy);
      context.lineTo($pathTox, $pathToy);
      context.closePath()
      context.stroke();
    }
  
    function frame1() {
      draw(0, 150, 150, 150);
    }
    
    function frame2() {
      draw(10, 0, 10, 600);
    }
    
    function frame3() {
      draw(0, 5, 70, 5);
    }
    
    function frame4() {
      draw(60, 5, 60, 15);
    }
    
    function torso() {
      draw(60, 36, 60, 70);
    }
    
    function rightArm() {
      draw(60, 46, 100, 50);
    }
    
    function leftArm() {
      draw(60, 46, 20, 50);
    }
    
    function rightLeg() {
      draw(60, 70, 100, 100);
    }
    
    function leftLeg() {
      draw(60, 70, 20, 100);
    }
    
  


let words = ["pasas", "rutina", "espeso", "poseer", "correr", "hora", "llegar", "tienda", "vuelo", "crecer", "guerra", "brote", "marido", "lleno", "duelo", "pagas", "antena", "morena", "huella", "rutina"]
let wordNumber
let word
let wordSplit
let wordDisplay = document.querySelector("#word")
let letter
let hintletter
let letterCorrectID
let reset = document.querySelector("#reset")
reset.addEventListener("click", setWord)
let hint = document.querySelector("#hint")
let letterbuttons = document.querySelectorAll(".letter")


const registerButton = document.querySelector("#registerButton");
const userNameInput = document.querySelector("#userName");
const divGame = document.querySelector("#game");
const divScoreContainer = document.querySelector("#scoreContainer");
const divInicial = document.querySelector("#divInicial");
const player5 = document.querySelector("#player5");
const player5Points = document.querySelector("#player5Points");
const player5Time = document.querySelector("#player5Time");
const playersArray = [];



// Página inicial, usuario & pasar al juego

registerButton.onclick = function(){
    if(userNameInput.value == ""){
        alert("Introduce your username before playing!");
    } else{
        playersArray.push(userNameInput.value)
        divInicial.style.display="none";
        divScoreContainer.style.display="flex";
        divGame.style.display="grid";
        player5.textContent = userNameInput.value;
        player5Time.textContent = "Currently playing..."
        setWord()
    }
}
// Top 5 players + localStorage
  
function setWord() {
  hint.addEventListener("click", giveHint)
  hint.setAttribute("class", "btn-2")
  letterbuttons.forEach(element => {
    element.addEventListener("click", checkLetter)
    element.setAttribute("class", "letter")
  })
  binary = 0
  context.clearRect(0, 0, 300, 150)
  wordDisplay.innerHTML = " "
  wordNumber = Math.floor(Math.random() * 20)
  word = words[wordNumber].toUpperCase()
  for (i = 0; i < word.length; i++) {
    wordDisplay.innerHTML += `<div class="wordLetter">
    <h3 class="hideLetter">${word[i]}</h3></div>`
  }
  hintletter = document.querySelectorAll(".hideLetter")
}
function checkLetter(i) {
  let correctLetter = false
  letter = i.path[0].textContent
  for (a = 0; a < word.length; a++) {
    if (word[a] == letter) {
      letterCorrectID = document.querySelectorAll(".wordLetter")
      letterCorrectID[a].firstElementChild.removeAttribute("class")
      hintletter = document.querySelectorAll(".hideLetter")
      correctLetter = true
    }
    if (correctLetter) {
      i.path[0].setAttribute("class", "correct")
      i.path[0].removeEventListener("click", checkLetter)
    }
    else {
      i.path[0].setAttribute("class", "incorrect")
      i.path[0].removeEventListener("click", checkLetter)
    }
  }
  if(!correctLetter){
    frame()
  }
}
function giveHint(){
  i= Math.floor(Math.random() * (hintletter.length))
  hintletter[i].removeAttribute("class")
  hint.setAttribute("class", "used")
  hint.removeEventListener("click", giveHint)
}
