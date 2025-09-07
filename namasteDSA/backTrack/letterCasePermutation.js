var letterCasePermutation = function(s) {
    let result = [];

    function backTrack(index, path) {
        if (index === s.length) {
            result.push(path.join(''));
            return;
        }

        let char = s[index];

        if (/[0-9]/.test(char)) {
            // digit → only one choice
            path.push(char);
            backTrack(index + 1, path);
            path.pop();
        } else {
            // letter → lowercase branch
            path.push(char.toLowerCase());
            backTrack(index + 1, path);
            path.pop();

            // letter → uppercase branch
            path.push(char.toUpperCase());
            backTrack(index + 1, path);
            path.pop();
        }
    }

    backTrack(0, []);
    return result;
};
