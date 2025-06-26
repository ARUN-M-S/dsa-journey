var balancedStringSplit = function (s) {
    let left = 0;
    let right = 0;
    let count = 0;
    let result = []
    while (right < s.length) {
        if (s[right] == 'R') {
            count++
        } else {
            count--;
        }

        if (count == 0 && right != left) {
            result.push(s.split('').slice(left, right+1).join(''));
            left = right+1;
           
        }
        right++;
    }

    return result.length
};