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
const boardEl = document.getElementById('board');
boardEl.addEventListener('click', handleClick);
let board; 
let turn;
let winningPlayer;

function init() {
    board  = [
        [null, null, null, null, null, null],
        [null, null, null, null, null, null],
        [null, null, null, null, null, null],
        [null, null, null, null, null, null],
        [null, null, null, null, null, null],
        [null, null, null, null, null, null],
        [null, null, null, null, null, null]
    ]
    turn = 1
    winningPlayer = null
}
init ()

function handleClick(evt) {
    const row  = parseInt(evt.target.id[1])
    const col = board[row].indexOf(null)
    if (col === -1) return
    board[row][col] = turn
    turn *= -1
    winningPlayer = checkBoard(row, col)
    render()
}

function render() {
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {
            const cell = document.getElementById(`r${i}c${j}`)
            if (board[i][j] === null) cell.style.backgroundColor = "white" 
            if (board[i][j] === 1) cell.style.backgroundColor = "red" 
            if (board[i][j] === -1) cell.style.backgroundColor = "yellow" 
        }
    } 
}

/*// Set winning logic
function checkBoard(row, col) {
   // Check horizontal win
    for (row = 0; row < 6; row++) {
        for (col = 0; col < 4; col++) {
            if ()
        }
    }

   // Check vertical win
   for (col = 0; col < 7; col++) {
    for (row = 0; row < 3; row++) {
        if ()
    }
   // Check left-diagonal win
   

   // Check right-diagonal win


   // Check tie

    return null
}
}*/