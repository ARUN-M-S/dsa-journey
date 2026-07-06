function minDays(w,d){
    let l = Math.max(...w);
    let r = w.reduce((a,b)=>a+b,0);
    
    while(l<r){
        let m = l+Math.floor((r-l)/2)
        
        if(helper(w,m,d)){
            r=m
        }else{
            l=m+1
        }
    }
    return l;
}

function helper(w,m,d){
    let sum =0;
    let count =1;

    for(let i=0;i< w.length;i++){
        sum+=w[i];
        if(sum>m){
            sum=w[i];
            count++
        }
    }
    
    
    return count<=d
}

console.log(minDays([1,2,3,4,5,6,7,8,9,10],5))