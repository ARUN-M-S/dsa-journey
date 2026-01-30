
 var trap = function(height) {
    let total =0;
    let maxL=maxR=L=0;
    let R=height.length-1
    while(L<R){
        if(height[L]<height[R]){
            if(height[L]>maxL){
                maxL=height[L]
            }else{
                total +=maxL-height[L]
            }
            L++

        }else{
            if(height[R]>maxR){
                maxR=height[R]
            }else{
                total +=maxR-height[R]
            }
           R--
        }
    } 
    return total;
};