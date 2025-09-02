var combinationSum3 = function(k, n) {
    let result = [];
    // candidates.sort((a, b) => a - b)
    let backTrack = (path, start, sum) => {
        if (sum == n && path.length==k) {
            result.push([...path]);
            return
        };
        if (sum > n || path.length>k) return;
        for (let i = start; i <=9; i++) {
            path.push(i);
            backTrack(path, i + 1, sum + i);
            path.pop()
        }
    }
    backTrack([], 1, 0)
    return result;

};