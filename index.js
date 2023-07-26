//my solution in the beginning

/*
// Your code here
const leftButton = document.getElementById('turn-left');
const rightButton = document.getElementById('turn-right');
const topButton = document.getElementById('turn-top');
const bottomButton = document.getElementById('turn-bottom');

//gameboard dimensions:==============================
const gameBoard = document.getElementById('game');
const gameBoardDim = gameBoard.getBoundingClientRect();
//overall height of gameboard
const gameBoardHeight = gameBoardDim.height;
//overall width of gameboard
const gameBoardWidth = gameBoardDim.width;
//====================================================

//dodger dimensions:==================================
//dodger DOM element
const dodger = document.getElementById('dodger');
//dodger dimension (all in let variable);
const dodgerDim = dodger.getBoundingClientRect();
//dodger height
const dodgerHeight = dodgerDim.height;
//dodger width
const dodgerWidth = dodgerDim.width;
//====================================================

//synthesized boundary of DOM:========================
//relative right boundary... accomodating dodger dimension since it is left position not right
const relRightMax = gameBoardWidth - dodgerWidth;
const relTopMax = gameBoardHeight - dodgerHeight;


function moveDodgerLeft() {

    let leftPosition = parseInt(dodger.style.left.replace('px', ''), 10);
    let updatedLeftPosition = leftPosition - 10;
    if (updatedLeftPosition < 0 || updatedLeftPosition > relRightMax) {
        alert('out-of-bounds');
        return;
    }
    else {
        dodger.style.left = `${updatedLeftPosition}px`;
        console.log(relRightMax);
    }

    console.log(dodger.style.left);

}

function moveDodgerRight() {

    let leftPosition = parseInt(dodger.style.left.replace('px', ''), 10);
    let updatedLeftPosition = leftPosition + 10;
    if (updatedLeftPosition < 0 || updatedLeftPosition > relRightMax) {
        alert('out-of-bounds');
        return;
    }
    else {
        dodger.style.left = `${updatedLeftPosition}px`;
        console.log(relRightMax);
    }

    console.log(dodger.style.left);

}

function moveDodgerTop() {

    const bottomPosition = parseInt(dodger.style.bottom.replace('px', ''), 10);
    const updatedBottomPosition = bottomPosition + 10;
    if (updatedBottomPosition < 0 || updatedBottomPosition > relTopMax) {
        alert('out-of-bounds');
        return;
    }
    else {
        dodger.style.bottom = `${updatedBottomPosition}px`;
        console.log(gameBoardHeight);
    }

    console.log(dodger.style.bottom);

}

function moveDodgerBottom() {

    const bottomPosition = parseInt(dodger.style.bottom.replace('px', ''), 10);
    const updatedBottomPosition = bottomPosition - 10;
    if (updatedBottomPosition < 0 || updatedBottomPosition > relTopMax) {
        alert('out-of-bounds');
        return;
    }
    else {
        dodger.style.bottom = `${updatedBottomPosition}px`;
        console.log(gameBoardHeight);
    }

    console.log(dodger.style.bottom);

}

leftButton.addEventListener('click', moveDodgerLeft);
rightButton.addEventListener('click', moveDodgerRight);
topButton.addEventListener('click', moveDodgerTop);
bottomButton.addEventListener('click', moveDodgerBottom);
*/

//flatiron solution

const dodger = document.getElementById("dodger");
const gameboard = document.getElementById('game');

function moveDodgerLeft() {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);
  
    if (left > 0) {
      dodger.style.left = `${left - 1}px`;
    }
  }
  document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowLeft") {
      moveDodgerLeft();
    }
});

function moveDodgerRight() {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);
  
    if (left < 360) {
      dodger.style.left = `${left + 1}px`;
    }
  }
  document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowRight") {
      moveDodgerRight();
    }
});
