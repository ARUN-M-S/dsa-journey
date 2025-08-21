var fillCups = function(amount) {
    let total = amount[0] + amount[1] + amount[2];
    let maxCup = Math.max(...amount);
    return Math.max(maxCup, Math.ceil(total / 2));
};
