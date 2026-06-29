function split(pages,k){
    if(k>pages.length) return false;
    let l = Math.max(...pages);
    let r = pages.reduce((a,b)=>a+b,0);

    while(l<=r){
        let m = Math.floor(l+(r-l)/2);

        if(helper(pages,k,m)){
            r=m-1
        }else{
            l=m+1
        }
    }
    return l;

}

function helper(pages,k,m){
    let sum=0;
    let count =1;
    for(let i =0;i<pages.length;i++){
        sum+=pages[i];
        if(sum>m){
            count++;
            sum=pages[i]
        }
    }
    return count<=k
}

console.log(split([12,34,67,90],2))