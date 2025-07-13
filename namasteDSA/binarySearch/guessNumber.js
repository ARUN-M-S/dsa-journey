var guessNumber = function(n) {
    let l=0;
    let r= n;
    while(l<=n){
        let mid = l+Math.floor((r-l)/2);
        let guessNo= guess(mid)
        if(guessNo==0){
            return mid;
        }else if(guessNo==-1){
            r=mid-1
        }else{
            l=mid+1
        }
    }
    
};