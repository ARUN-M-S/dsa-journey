var rob = function(val) {
    let n = val.length
       if(n==1) return val[0];
    
       let robber =(start,end)=>{
       let p1=p2=0;
    
       for(let i =start;i<=end;i++){
        let curr = Math.max(p1,val[i]+p2);
        let temp = p1;
        p1=curr;
        p2=temp;
        curr++
       }
       
       return p1
       }
       return Math.max(robber(0,n-2),robber(1,n-1))
    };