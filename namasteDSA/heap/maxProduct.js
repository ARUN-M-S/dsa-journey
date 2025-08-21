var maxProduct = function(nums) {
    let max1 = -Infinity;
    let max2= -Infinity;
    for(let num of nums){
        if(num>max1){
            max2=max1;
            max1=num
        }else if(num>max2){
            max2=num
        }
    }
    return (max1-1) * (max2-1)
};