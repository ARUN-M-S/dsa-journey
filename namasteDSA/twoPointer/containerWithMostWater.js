/**
 * @param {number[]} height
 * @return {number}
 */
 var maxArea = function(height) {
    let left = 0;
    let right = height.length-1;
    let max =0
    while(left<right){
        let min = Math.min(height[left],height[right])
        let currentMax = min*(right-left)
        max = Math.max(currentMax,max)
        if(height[left]<height[right]){
            left++
        }else{
            right--
        }
    }
return max;
    
};