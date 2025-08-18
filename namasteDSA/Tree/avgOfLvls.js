var averageOfLevels = function (root) {
    let avg = [];
    let q = [root];
    while (q.length) {
        let size = q.length;
        let sum = 0;
        for (let i = 0; i < size; i++) {
            let curr = q.shift();
            sum += curr.val;
            curr.left && q.push(curr.left)
            curr.right && q.push(curr.right)

        }
        avg.push(sum / size)

    }
    return avg

};