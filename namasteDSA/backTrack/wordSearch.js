/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
    let result = false;
    let m = board.length;
    let n = board[0].length

    let backTrack = (x, y, nextIndex) => {
        if (nextIndex == word.length) {
            result = true;
            return
        }
        let temp = board[x][y];
        board[x][y] = '#'
        if (x != 0 && board[x - 1][y] == word[nextIndex]) {
            backTrack(x - 1, y, nextIndex + 1)
        }
        if (y != 0 && board[x][y - 1] == word[nextIndex]) {
            backTrack(x, y - 1, nextIndex + 1)
        }
        if (x < m - 1 && board[x + 1][y] == word[nextIndex]) {
            backTrack(x + 1, y, nextIndex + 1)
        }
        if (y < n - 1 && board[x][y + 1] == word[nextIndex]) {
            backTrack(x, y + 1, nextIndex + 1)
        }
        board[x][y] = temp

    }
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (word[0] == board[i][j]) {
                backTrack(i, j, 1)
            }

        }
    }
    return result;

};