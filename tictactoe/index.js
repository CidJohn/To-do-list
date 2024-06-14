// Selecting the HTML elements
const player1Input = document.querySelector('.player1-input');
const player2Input = document.querySelector('.player2-input');
const startButton = document.querySelector('button[type="submit"]');
const board = document.querySelector('.board');
const cells = document.querySelectorAll('.cell');
const status = document.querySelector('.status');
const restartButton = document.querySelector('.restart-button');

let currentPlayer = 'x';
let player1Name = '';
let player2Name = '';

// Function to check if a player has won
function checkWinner() {
  const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];

  for (let i = 0; i < winningCombinations.length; i++) {
    const [a, b, c] = winningCombinations[i];
    if (cells[a].classList.contains(currentPlayer) &&
        cells[b].classList.contains(currentPlayer) &&
        cells[c].classList.contains(currentPlayer)) {
      return true;
    }
  }

  return false;
}

// Function to handle a cell being clicked
function handleCellClick(event) {
  const cell = event.target;
  if (!cell.classList.contains('x') && !cell.classList.contains('o')) {
    cell.classList.add(currentPlayer);
    cell.textContent = currentPlayer.toUpperCase();
    if (checkWinner()) {
      status.innerHTML = `${currentPlayer.toUpperCase()} wins!`;
      restartButton.style.display = 'block';
      alert(`${currentPlayer.toUpperCase()} wins!`);
    } else if ([...cells].every(cell => cell.classList.contains('x') || cell.classList.contains('o'))) {
      status.innerHTML = 'It\'s a tie!';
      restartButton.style.display = 'block';
      alert('It\'s a tie!');
    } else {
      currentPlayer = currentPlayer === 'x' ? 'o' : 'x';
      status.innerHTML = `${currentPlayer.toUpperCase()}'s turn`;
    }
  }
}

// Function to handle the form being submitted
function handleFormSubmit(event) {
  event.preventDefault();
  player1Name = player1Input.value;
  player2Name = player2Input.value;
  document.querySelector('.player-form').style.display = 'none';
  document.querySelector('.game-container').style.display = 'block';
  status.innerHTML = `${player1Name.toUpperCase()}'s turn`;
}

// Function to restart the game
function restartGame() {
  currentPlayer = 'x';
  cells.forEach(cell => {
    cell.classList.remove('x', 'o');
    cell.textContent = '';
  });
  status.innerHTML = `${player1Name.toUpperCase()}'s turn`;
  restartButton.style.display = 'none';
}

// Adding event listeners
cells.forEach(cell => cell.addEventListener('click', handleCellClick));
startButton.addEventListener('click', handleFormSubmit);
restartButton.addEventListener('click', restartGame);
