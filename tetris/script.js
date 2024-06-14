const tetrisGrid = document.querySelector('.tetris-grid');
const gridWidth = 10;
const gridHeight = 20;
let squares = [];

// Create the grid
function createGrid() {
  for (let i = 0; i < gridWidth * gridHeight; i++) {
    const square = document.createElement('div');
    tetrisGrid.appendChild(square);
    squares.push(square);
  }
}

createGrid();

// Create a Tetromino
class Tetromino {
  constructor(shape) {
    this.shape = shape;
    this.currentPos = 4;
  }

  // Move the Tetromino down
  moveDown() {
    this.currentPos += gridWidth;
  }

  // Move the Tetromino left
  moveLeft() {
    this.currentPos -= 1;
  }

  // Move the Tetromino right
  moveRight() {
    this.currentPos += 1;
  }

  // Rotate the Tetromino
  rotate() {
    // code to rotate the Tetromino
  }
}

// Create a new Tetromino
const tetromino = new Tetromino([0, 1, gridWidth, gridWidth + 1]);

// Update the game board
function update() {
  // clear the board
  for (let i = 0; i < squares.length; i++) {
    squares[i].classList.remove('tetromino');
  }

  // update the Tetromino position
  for (let i = 0; i < tetromino.shape.length; i++) {
    squares[tetromino.currentPos + tetromino.shape[i]].classList.add('tetromino');
  }
}

// Move the Tetromino down every second
setInterval(() => {
  tetromino.moveDown();
  update();
}, 1000);

// Move the Tetromino left when left arrow is pressed
document.addEventListener('keydown', (event) => {
  if (event.code === 'ArrowLeft') {
    tetromino.moveLeft();
    update();
  }
});

// Move the Tetromino right when right arrow is pressed
document.addEventListener('keydown', (event) => {
  if (event.code === 'ArrowRight') {
    tetromino.moveRight();
    update();
  }
});

// Rotate the Tetromino when up arrow is pressed
document.addEventListener('keydown', (event) => {
  if (event.code === 'ArrowUp') {
    tetromino.rotate();
    update();
  }
});
