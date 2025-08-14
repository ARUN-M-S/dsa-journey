var findMode = function(root) {
    if (!root) return [];

    let stack = [];
    let curr = root;
    let prev = null;
    let count = 0;
    let maxCount = 0;
    let modes = [];

    while (curr || stack.length) {
        // Go left
        while (curr) {
            stack.push(curr);
            curr = curr.left;
        }

        // Visit node
        curr = stack.pop();

        if (prev === null || curr.val !== prev) {
            count = 1;
        } else {
            count++;
        }

        if (count > maxCount) {
            maxCount = count;
            modes = [curr.val];
        } else if (count === maxCount) {
            modes.push(curr.val);
        }

        prev = curr.val;

        // Go right
        curr = curr.right;
    }

    return modes;
};
