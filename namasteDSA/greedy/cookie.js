var findContentChildren = function(g, s) {
    s.sort((a,b)=>(a-b));
    g.sort((a,b)=>(a-b));
    let i =0;
    let count =0;
    while(i<s.length){
        if(s[i]>=g[count]){
            count++
        }
        i++
    }
    return count;
    
};