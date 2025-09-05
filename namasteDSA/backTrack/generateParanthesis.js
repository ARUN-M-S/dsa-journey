/**
 * @param {number} n
 * @return {string[]}
 */
 var generateParenthesis = function(n) {
    let result = [];

    function backTrack(curr, open, close) {
        // if string is complete
        if (curr.length === n * 2) {
            result.push(curr);
            return;
        }

        // add '(' if we still have some
        if (open < n) {
            backTrack(curr + "(", open + 1, close);
        }

        // add ')' if it won't exceed open count
        if (close < open) {
            backTrack(curr + ")", open, close + 1);
        }
    }

    backTrack("", 0, 0);
    return result;
};

// Example
console.log(generateParenthesis(3));
// ["((()))","(()())","(())()","()(())","()()()"]
