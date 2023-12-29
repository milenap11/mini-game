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
reset.addEventListener('click', init);
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
    render()
}
init ()

function handleClick(evt) {
    const row  = parseInt(evt.target.id[1])
    const col = board[row].indexOf(null)
    if (col === -1 || winningPlayer) return
    board[row][col] = turn
    turn *= -1
    winningPlayer = checkWinner(row, col)
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

// Set winning logic
function checkWinner(row, col) {

    const player = board[row][col]
    const winner = checkVerticalWinner(row, col, player) ||
    checkHorizontalWinner(row, col, player) ||
    checkLeftDiag(row, col, player) ||
    checkRightDiag(row, col, player) ||
    checkTie(row, col, player)
    console.log(winner)
    return winner
}

// Check vertical win
function checkVerticalWinner(row, col, player) {
    let count = 1
    let startCol = col - 1
    while (startCol >= 0 && board[row][startCol] === player ) {
        count += 1
        startCol -= 1
    }
    return count >= 4 ? player : null
}

// Check horizontal win
function checkHorizontalWinner(row, col, player) {
    let count = 1
    let startRowRight = row + 1
    let startRowLeft = row - 1
    while (startRowLeft >= 0 && board[startRowLeft][col] === player ) {
        count += 1
        startRowLeft -= 1
    }
    while (startRowRight <= 6 && board[startRowRight][col] === player) {
        count += 1
        startRowRight += 1
    }
    return count >= 4 ? player : null
}

// Check left-diagonal win
function checkLeftDiag(row, col, player) {
        let count = 1
        let startColLeft = col + 1
        let startRowLeft = row - 1
        while (startRowLeft >= 0 && startColLeft < 6 && board[startRowLeft][startColLeft] === player) {
            count += 1
            startColLeft += 1
            startRowLeft -= 1
        }
        let startColRight = col - 1
        let startRowRight = row + 1
        
        while (startColRight >= 0 && startRowRight < 7 && board[startRowRight][startColRight] === player ) {
            count += 1
            startColRight -= 1
            startRowRight += 1
        }
        
        return count >= 4 ? player : null
}

// Check right-diagonal win
function checkRightDiag(row, col, player) {
    let count = 1
    let startColLeft = col - 1
    let startRowLeft = row - 1
    while (startRowLeft >= 0 && startColLeft >= 0 && board[startRowLeft][startColLeft] === player) {
        count += 1
        startColLeft -= 1
        startRowLeft -= 1
    }
    let startColRight = col + 1
    let startRowRight = row + 1
    
    while (startColRight <= 5 && startRowRight < 7 && board[startRowRight][startColRight] === player ) {
        count += 1
        startColRight += 1
        startRowRight += 1
    }
    return count >= 4 ? player : null
}

// Check tie
function checkTie() {
    return board.flat().includes(null) ? null : "tie"
}

// Restart game
/*reset.addEventListener('click', () => {
    winner.style.display = 'none'
    reset.style.display = 'block'
})*/


  
   

   

   


 

