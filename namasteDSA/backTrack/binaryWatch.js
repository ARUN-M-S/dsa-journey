/**
 * @param {number} turnedOn
 * @return {string[]}
 */
 var readBinaryWatch = function(turnedOn) {
    let result = [];

    // backtracking function
    function backtrack(num, start, hours, minutes) {
        if (num === 0) {
            if (hours < 12 && minutes < 60) {
                // format minutes with leading zero if needed
                result.push(`${hours}:${minutes < 10 ? "0" + minutes : minutes}`);
            }
            return;
        }

        // total 10 LEDs: first 4 for hours, next 6 for minutes
        for (let i = start; i < 10; i++) {
            if (i < 4) {
                // choose an hour LED
                backtrack(num - 1, i + 1, hours + (1 << i), minutes);
            } else {
                // choose a minute LED
                backtrack(num - 1, i + 1, hours, minutes + (1 << (i - 4)));
            }
        }
    }

    backtrack(turnedOn, 0, 0, 0);
    return result;
};
