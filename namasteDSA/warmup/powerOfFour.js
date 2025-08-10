function isPowerOfFour(n) {
    if (n < 1) return false;
    while (n % 4 === 0) {
        n = n / 4;
    }
    return n === 1;
}
