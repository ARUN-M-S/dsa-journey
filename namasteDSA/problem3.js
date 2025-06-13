function starPattern(n){
    for(let i=0;i<n;i++){
        let star='';
        for(let j=0;j<=i;j++){
            star+=i+1;
        }
        console.log(star)
    }
}
starPattern(5);