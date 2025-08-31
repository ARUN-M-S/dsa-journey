var combine = function (n, k) {
    let result = [];
    let backTrack = (path, i) => {
        if (path.length == k) {
            result.push([...path]);
            return
        }
        for (let j = i; j <= n; j++) {
            path.push(j)
            backTrack(path, j + 1)
            path.pop()
        }

    }
    backTrack([], 1)
    return result
};