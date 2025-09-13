var solveNQueens = function (n) {
    let result = [];
    let board = Array.from({ length: n }, () => Array(n).fill('.'))
    let backTrack = (board, row, colSet, digSet, adiaSet) => {
        if (row == n) {
            result.push(transform(board))
        }
        for (let col = 0; col < n; col++) {
            if (colSet.has(col) || digSet.has(row - col) || adiaSet.has(row + col)) {
                continue;
            }
            board[row][col] = 'Q';
            colSet.add(col);
            digSet.add(row - col);
            adiaSet.add(row + col);
            backTrack(board, row + 1, colSet, digSet, adiaSet);
            board[row][col] = '.';
            colSet.delete(col);
            digSet.delete(row - col);
            adiaSet.delete(row + col);
        }

    }

    backTrack(board, 0, new Set(), new Set(), new Set(), new Set());
    return result;

};

