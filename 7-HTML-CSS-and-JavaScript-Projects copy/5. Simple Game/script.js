let board = ['', '', '', '', '', '', '', '', ''];
let currentPlayer = '♚'; // Start with King
let gameActive = true;

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

function makeMove(index) {
    if (board[index] !== '' || !gameActive) {
        return;
    }

    board[index] = currentPlayer;
    document.getElementById(`cell-${index}`).textContent = currentPlayer;

    checkForWinner();
}

function checkForWinner() {
    let roundWon = false;

    for (let i = 0; i < winningConditions.length; i++) {
        const [a, b, c] = winningConditions[i];
        if (board[a] === '' || board[b] === '' || board[c] === '') {
            continue;
        }

        if (board[a] === board[b] && board[b] === board[c]) {
            roundWon = true;
            highlightWinningCells(a, b, c);
            break;
        }
    }

    if (roundWon) {
        document.getElementById('status').textContent = `Player ${currentPlayer} Wins! 🎉`;
        gameActive = false;
        return;
    }

    if (!board.includes('')) {
        document.getElementById('status').textContent = 'It\'s a Draw! 🤝';
        gameActive = false;
        return;
    }

    currentPlayer = currentPlayer === '♚' ? '♘' : '♚'; // Toggle between King and Knight
    document.getElementById('status').textContent = `Player ${currentPlayer}'s Turn`;
}

function highlightWinningCells(a, b, c) {
    document.getElementById(`cell-${a}`).classList.add('winning');
    document.getElementById(`cell-${b}`).classList.add('winning');
    document.getElementById(`cell-${c}`).classList.add('winning');
}

function resetGame() {
    board = ['', '', '', '', '', '', '', '', ''];
    currentPlayer = '♚';
    gameActive = true;
    document.getElementById('status').textContent = 'Player ♚\'s Turn';
    document.querySelectorAll('.cell').forEach(cell => {
        cell.textContent = '';
        cell.classList.remove('winning');
    });
}
