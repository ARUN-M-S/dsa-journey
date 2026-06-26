var minEatingSpeed = function(piles, h) {
    let l =0;
    let r = Math.max(...piles);
    let hour=Infinity;

    while(l<=r){
        let m = Math.floor(l+(r-l)/2);
        let i = 0;
        let len =piles.length-1
        let min=0
        while(i<=len){
            min+= Math.ceil(piles[i]/m);
            i++
        }

        if(min<=h){
            r=m-1
        }else{
            l=m+1
        }

        if(min<=h) hour=Math.min(hour,m)
       

    }
    return hour
    
};