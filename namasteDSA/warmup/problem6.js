function oneZeroPattern(n){
    for(let i=1;i<=n;i++){
        let row='';
        for(let j=1;j<=i;j++){
            if(j%2==0){
                row+='0'
            }else{
                row+='1'
            }
        }
        console.log(row);
    }
}

oneZeroPattern(6)