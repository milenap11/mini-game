// Contact form modal
const openBtn = document.getElementById('open-modal');

const modal = document.getElementById('modal');

const closeBtn = document.getElementById('close');


const openModal = () => modal.style.display = 'block';

openBtn.addEventListener('click', openModal)


const closeModal = () => modal.style.display = 'none';

closeBtn.addEventListener('click', closeModal)


setTimeout(openModal, 5000);

// Game 

// Selectors
/*document.addEventListener('DOMContentLoaded', () => {*/
    const squares = document.querySelectorAll('.cell');
    const winner = document.querySelector('#winner');
    const displayCurrentPlayer = document.querySelector('#current-player');
    const reset = document.querySelector('#play');
    console.log(squares)

// Set game logic
let currentPlayer = "1"

for (let i = 0; i < squares.length; i++) { 
    const currentCell = squares[i]
    
    if (currentPlayer === "1") { 

     
    //console.log(squares[i] + (i + 1)) 
    currentCell.onclick = () => {
        const nextRowCell = squares[i + 7]
        if (nextRowCell.classList.contains('taken')) {
        currentCell.classList.add('taken')
        currentCell.classList.add('playerOne')
        currentPlayer = "2"
        displayCurrentPlayer.innerHTML = currentPlayer
        console.log(currentPlayer)
        }  
    }
} 
if (currentPlayer === "2") { 

     
    //console.log(squares[i] + (i + 1)) 
    currentCell.onclick = () => {
        const nextRowCell = squares[i + 7]
        if (nextRowCell.classList.contains('taken')) {
        currentCell.classList.add('taken')
        currentCell.classList.add('playerOne')
        currentPlayer = "1"
        displayCurrentPlayer.innerHTML = currentPlayer
        console.log(currentPlayer)
        }  
    }
} 
}







/*for (let i = 0; i < squares.length; i++) {
squares[i].onclick = () => {
    if (squares[i + 7].classList.contains('taken')) {
        if (currentPlayer == 1) {
            squares[i].classList.add('taken')
            squares[i].classList.add('playerOne')
            currentPlayer = 2
            displayCurrentPlayer.innerHTML = currentPlayer
        } else if (currentPlayer == 2) {
            squares[i].classList.add('taken')
            squares[i].classList.add('playerTwo')
            currentPlayer = 1
            displayCurrentPlayer.innerHTML = currentPlayer
        } 
    } else alert('cant go here')
        
}
}
})*/



/*$(document).ready(function(){
    var player = 1;
    var winner = 0;
    var colors = {};
    colors[-1] = "yellow";
    colors[1] = "red";
    var count = 0;
    $(".cell").each(funtion() {
        $(this).attr("id", count);
        $(this).attr("data-player", 0);
        count++;

        $(this).click(function(){
            if(isValid($)this).attr("id"))){
                
            }
        });
    });   
});



    /*let initialMatrix = [
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
    ];
let currentPlayer;
const generateRandomNumber = (min, max) =>
Math.floor(Math.random() * (max - min)) + min

const matrixCreator = () => {
for (let innerArray in initialMatrix) {
    let outerDiv = document.createElement("div");
    outerDiv.classList.add("grid-row");
    outerDiv.setAttribute("data-value", innerArray);
}

}*/




/*for (let i = 0; i < squares.length; i++) {

/*const board = document.querySelector("board");

for (let i = 0; i < 42; i++) {
    let cell = document.createElement("div");
    cell.className = "cell";
    board.appendChild(cell);

    div.onmouseenter = () => {
        console.log(i % 7);
    }
}*/



/*var playerRed = "R";
var playerYellow = "Y";
var currentPlayer = playerRed;

var gameOver = false;

var rows = 6;
var columns = 7;

window.onload = function() {
      setGame();
}

function setGame() {
    board = [];

    for (let r = 0; r < rows; r++) {
        let row = [];
        for (let c = 0; c < columns; c++) {
            row.push(' ');

            let tile = document.createElement('div');
                tile.id = r.toString() + "-" + c.toString();
                tile.classList.add("tile");
                document.getElementById("board").append(tile);

        }
        board.push(row);

    }

}*/