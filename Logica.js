const hintShow = document.getElementById("clue");
const buttonHint = document.getElementById("hint");
const buttonReset = document.getElementById("reset");
var stickman = document.getElementById("stickman");
var context = stickman.getContext("2d");

frame1()
frame2()
frame3()
frame4()
head()
torso()
rightArm()
leftArm()
rightLeg()
leftLeg()

function head() {
  stickman = document.getElementById("stickman");
  context = stickman.getContext("2d");
  context.beginPath();
  context.arc(60, 25, 10, 0, Math.PI * 2, true);
  context.stroke();
}

function draw($pathFromx, $pathFromy, $pathTox, $pathToy) {
  context.moveTo($pathFromx, $pathFromy);
  context.lineTo($pathTox, $pathToy);
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

var drawArray = [
  rightLeg,
  leftLeg,
  rightArm,
  leftArm,
  torso,
  head,
  frame4,
  frame3,
  frame2,
  frame1
];

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

function setWord() {
  hint.addEventListener("click", giveHint)
  hint.setAttribute("class", "btn-2")
  letterbuttons.forEach(element => {
    element.addEventListener("click", checkLetter)
    element.setAttribute("class", "letter")
  })
  
  /**RESETEAR HANGMAN */
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
      console.log(i)
    }
    if (correctLetter) {
      i.path[0].setAttribute("class", "correct")
      i.path[0].removeEventListener("click", checkLetter)
    }
    else {
      i.path[0].setAttribute("class", "incorrect")
      i.path[0].removeEventListener("click", checkLetter)
      /**Añadir funcion para que el hangman se vaya completando */
    }
  }
}
function giveHint(){
  i= Math.floor(Math.random() * (hintletter.length))
  hintletter[i].removeAttribute("class")
  console.log(i)
  hint.setAttribute("class", "used")
  hint.removeEventListener("click", giveHint)
}