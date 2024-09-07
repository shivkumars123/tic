const cells = document.querySelectorAll('.cell');
const statusText = document.getElementById('status');
const restartBtn = document.getElementById('restart-btn');
const resultModal = document.getElementById('result-modal');
const resultText = document.getElementById('result-text');
const newGameBtn = document.getElementById('new-game-btn');
let currentPlayer = 'X';
let board = ['', '', '', '', '', '', '', '', ''];
let isGameActive = true;

const winningConditions = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

function handleCellClick(e) {
  const cellIndex = e.target.getAttribute('data-index');

  if (board[cellIndex] === '' && isGameActive) {
    board[cellIndex] = currentPlayer;
    e.target.textContent = currentPlayer;
    checkForWinner();
    togglePlayer();
  }
}

function togglePlayer() {
  currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
  updateStatus();
}

function updateStatus() {
  statusText.textContent = `Player ${currentPlayer}'s turn`;
}

function checkForWinner() {
  let gameWon = false;

  for (let condition of winningConditions) {
    const [a, b, c] = condition;
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      gameWon = true;
      break;
    }
  }

  if (gameWon) {
    showResult(`Player ${currentPlayer} wins!`);
    isGameActive = false;
  } else if (!board.includes('')) {
    showResult(`It's a draw!`);
    isGameActive = false;
  }
}

function showResult(message) {
  resultText.textContent = message;
  resultModal.style.display = 'flex';
}

function restartGame() {
  board = ['', '', '', '', '', '', '', '', ''];
  cells.forEach(cell => cell.textContent = '');
  currentPlayer = 'X';
  isGameActive = true;
  updateStatus();
  resultModal.style.display = 'none';
}

cells.forEach(cell => cell.addEventListener('click', handleCellClick));
restartBtn.addEventListener('click', restartGame);
newGameBtn.addEventListener('click', restartGame);
updateStatus();
