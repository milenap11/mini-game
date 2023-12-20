/* Contact form modal */
const openBtn = document.getElementById('open-modal');

const modal = document.getElementById('modal');

const closeBtn = document.getElementById('close');


const openModal = () => modal.style.display = 'block';

openBtn.addEventListener('click', openModal)


const closeModal = () => modal.style.display = 'none';

closeBtn.addEventListener('click', closeModal)


setTimeout(openModal, 5000);

/* Game */

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

document.addEventListener('DOMContentLoaded', () => {
    const squares = document.querySelectorAll('#board div')
    const result = document.querySelector('#result')
    const displayCurrentPlayer = document.querySelector('#current-player')
    let currentPlayer = 1


for (let i = 0; i < squares.length; i++) {
squares[i].onclick = () => {
    alert('You have clicked square ' + i)
}
}
})