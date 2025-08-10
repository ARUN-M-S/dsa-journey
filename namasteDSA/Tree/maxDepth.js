
var maxDepth = function (root) {
    if (!root) return 0;

    let maxLvl = 0;


    function level(curr, lvl) {
        if (!curr) return;
        maxLvl = Math.max(maxLvl, lvl)
        curr.left && level(curr.left, lvl + 1)
        curr.right && level(curr.right, lvl + 1)

    }

    level(root, 0);
    return maxLvl + 1;


};