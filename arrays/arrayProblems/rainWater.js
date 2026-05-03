function trapWater(height) {
    let L = maxL = maxR = water = 0;
    let R = height.length - 1;
    while (L < R) {
        maxL = Math.max(maxL, height[L]);
        maxR = Math.max(maxR, height[R]);
        if (maxL < maxR) {
            water += maxL - height[L];
            L++
        } else {
            water += maxR - height[R];
            R--
        }
    }
    return water;
}

console.log(trapWater([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]))