function containerWithMostWater(height){
    if (height.length < 2) return 0;
    let maxArea = 0;
    let L =0;
    let R= height.length-1;

    while(L<R){
        let minHeight = Math.min(height[L],height[R]);
        let currentArea = (R-L)* minHeight;
        maxArea = Math.max(maxArea,currentArea);
        if(height[L]<height[R])L++;
        else if(height[L]>height[R])R--;
        else {L++;R--}
    }
    return maxArea;

}

console.log(containerWithMostWater([1, 8, 6, 2, 5, 4, 8, 3, 7]))
console.log(containerWithMostWater([1, 1]))
