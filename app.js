// Contact form modal
const openBtn = document.getElementById('open-modal');

const modal = document.getElementById('modal');

const closeBtn = document.getElementById('close');


const openModal = () => modal.style.display = 'block';

openBtn.addEventListener('click', openModal)


const closeModal = () => modal.style.display = 'none';

closeBtn.addEventListener('click', closeModal)

// Game 

// HTML that will be manipulated
const squares = document.querySelectorAll('.cell');
const winner = document.querySelector('#winner');
const displayCurrentPlayer = document.querySelector('#current-player');
const reset = document.querySelector('#play');

// Indicate the current player
let currentPlayer = "1"
displayCurrentPlayer.innerText = "1"

// Add an event listener to each cell
for (let i = 0; i < squares.length; i++) { 
    const currentCell = squares[i]
    
    currentCell.onclick = () => { 
        // Step 1: check which cells are taken and empty when a column is clicked
        const currentCol = currentCell.getAttribute("data-col") 
        const allColCells = document.querySelectorAll(`div[data-col="${currentCol}"]`)
        const emptyCells = document.querySelectorAll(`.empty[data-col="${currentCol}"]`)
        const nextCell = emptyCells[emptyCells.length - 1]

        // Step 2: update the column so that the next cell is taken
        if (0 < emptyCells.length && emptyCells.length < 6) {
            nextCell.classList.add('taken')
            nextCell.classList.remove("empty")
        } else if (emptyCells.length === 0) {
            alert("this column is full! Choose something else")
        } else {
            allColCells[5].classList.add('taken')
            nextCell.classList.remove("empty")
        }
        
        // Step 3: place the chip in the correct cell, indicate who plays next  
        if (currentPlayer === "1") {
            console.log(nextCell.classList)
            nextCell.classList.add("playerOne")
            currentPlayer = "2"
            displayCurrentPlayer.innerText = "2"
        } else {
            nextCell.classList.add("playerTwo")
            currentPlayer = "1"
            displayCurrentPlayer.innerText = "1"
        }
    }   
}

// Winning logic







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