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

const winningArrays = [ 
    [0, 1, 2, 3], [41, 40, 39, 38],[7, 8, 9, 10], 
    [34, 33, 32, 31], [14, 15, 16, 17], [27, 26, 25, 24], 
    [21, 22, 23, 24], [20, 19, 18, 17], [28, 29, 30, 31], 
    [13, 12, 11, 10], [35, 36, 37, 38], [6, 5, 4, 3], 
    [0, 7, 14, 21], [41, 34, 27, 20], [1, 8, 15, 22], 
    [40, 33, 26, 19], [2, 9, 16, 23], [39, 32, 25, 18], 
    [3, 10, 17, 24], [38, 31, 24, 17], [4, 11, 18, 25], 
    [37, 30, 23, 16], [5, 12, 19, 26], [36, 29, 22, 15], 
    [6, 13, 20, 27], [35, 28, 21, 14], [0, 8, 16, 24], 
    [41, 33, 25, 17], [7, 15, 23, 31], [34, 26, 18, 10], 
    [14, 22, 30, 38], [27, 19, 11, 3], [35, 29, 23, 17], 
    [6, 12, 18, 24], [28, 22, 16, 10], [13, 19, 25, 31], 
    [21, 15, 9, 3], [20, 26, 32, 38], [36, 30, 24, 18], 
    [5, 11, 17, 23], [37, 31, 25, 19], [4, 10, 16, 22], 
    [2, 10, 18, 26], [39, 31, 23, 15], [1, 9, 17, 25], 
    [40, 32, 24, 16], [9, 7, 25, 33], [8, 16, 24, 32], 
    [11, 7, 23, 29], [12, 18, 24, 30], [1, 2, 3, 4], 
    [5, 4, 3, 2], [8, 9, 10, 11], [12, 11, 10, 9],
    [15, 16, 17, 18], [19, 18, 17, 16], [22, 23, 24, 25], 
    [26, 25, 24, 23], [29, 30, 31, 32], [33, 32, 31, 30], 
    [36, 37, 38, 39], [40, 39, 38, 37], [7, 14, 21, 28], 
    [8, 15, 22, 29], [9, 16, 23, 30], [10, 17, 24, 31], 
    [11, 18, 25, 32], [12, 19, 26, 33], [13, 20, 27, 34] 
    ]; 

// Set winning logic
function checkBoard() {
    for (let y = 0; y < winningArrays.length; y++) {
        const cell1 = squares[winningArrays[y][0]]
        const cell2 = squares[winningArrays[y][1]]
        const cell3 = squares[winningArrays[y][2]]
        const cell4 = squares[winningArrays[y][3]]
    
    if (
        cell1.classList.contains("playerOne") &&
        cell2.classList.contains("playerOne") &&
        cell3.classList.contains("playerOne") &&
        cell4.classList.contains("playerOne") 
    ){
        result.innerHTML = "Red player wins!"
    }
    if (
        cell1.classList.contains("playerTwo") &&
        cell2.classList.contains("playerTwo") &&
        cell3.classList.contains("playerTwo") &&
        cell4.classList.contains("playerTwo") 
    ){
        result.innerHTML = "Yellow player wins!"
    }
}
}

// Indicate the current player
let currentPlayer = "Red"
displayCurrentPlayer.innerText = "Red"

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
            nextCell.classList.add("taken")
            nextCell.classList.remove("empty")
        } else if (emptyCells.length === 0) {
            alert("This column is full! Choose something else.")
        } else {
            allColCells[5].classList.add("taken")
            nextCell.classList.remove("empty")
        }
        
        // Step 3: place the chip in the correct cell, indicate who plays next  
        if (currentPlayer === "Red") {
            console.log(nextCell.classList)
            nextCell.classList.add("playerOne")
            currentPlayer = "Yellow"
            displayCurrentPlayer.innerText = "Yellow"
        } else {
            nextCell.classList.add("playerTwo")
            currentPlayer = "Red"
            displayCurrentPlayer.innerText = "Red"
        }
    }   
}
