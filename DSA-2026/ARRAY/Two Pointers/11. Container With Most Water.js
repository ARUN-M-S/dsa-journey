var maxArea = function(height) {
    let L =0;
    let R= height.length-1;
    let maxArea=0;
    let maxPair=[0,0]
    while(L<R){
        let area = Math.min(height[L],height[R]) * (R-L);
        if(area>maxArea){
            maxArea= area;
            maxPair=[L,R]
        }
        if(height[L]<height[R]) L++
        else R--


    }
    console.log(maxPair)
    return maxArea
    
};