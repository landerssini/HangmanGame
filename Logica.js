const hintShow = document.getElementById("clue");
const buttonHint = document.getElementById("hint");
const buttonReset = document.getElementById("reset");
var stickman = document.getElementById("stickman");
var context = stickman.getContext("2d");
var emptyVar;
var binary = 0;
var hintBinary = 0;
const hints = ["Based in Mersyside",
"Based in Mersyside",
"First Welsh team to reach the Premier Leauge",
"Owned by A russian Billionaire",
"Once managed by Phil Brown",
"2013 FA Cup runners up",
"Gazza's first club"]

buttonHint.addEventListener("click", randomHint)

function randomHint(){
if( hintBinary === 0){
hintShow.innerHTML = hints[Math.floor(Math.random() * hints.length)];;
hintBinary=1;
}else if(hintBinary === 1){
  hintShow.innerHTML = hints[Math.floor(Math.random() * hints.length)];;
  hintBinary=0;
  }

}

buttonReset.addEventListener("click", frame)



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
    draw(60, 70, 20, 100);}