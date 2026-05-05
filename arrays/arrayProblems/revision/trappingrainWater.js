function trapWater(height){
    let L=0;
    let R= height.length-1;
    let maxL=maxR=0;
    let water =0
    while(L<R){
        maxL=Math.max(maxL,height[L]);
        maxR=Math.max(maxR,height[R]);

        if(height[L]<height[R]){
            water += Math.min(maxL,maxR)-height[L]
            L++
        }else{
            water += Math.min(maxL,maxR)-height[R]
            R--
        }


    }
    return water
}

console.log(trapWater([0,1,0,2,1,0,1,3,2,1,2,1]))