
 var minDays = function(bloomDay, m, k) {
    if(m*k >bloomDay.length) return -1;
   let l = Infinity;
    let r = -Infinity;
    for (let day of bloomDay) {
        if (day < l) l = day;
        if (day > r) r = day;
    }
    while(l<=r){
        let mid = Math.floor(l+(r-l)/2)
        if(helper(bloomDay,mid,m,k)){
            r=mid-1;
        }else{
            l=mid+1
        }
    }
    return l
    
};

let helper = function(bloomDay,mid,m,k){
    let bou=0;
    let concicutive =0;
    for(let i of bloomDay){
        if(i<=mid)concicutive++;
        else concicutive=0;
        if(concicutive==k){
            concicutive=0;
            bou++};
        if(bou==m) return true;
    }
    return false;

}