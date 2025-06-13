function starPattern(n){
    for(let i=0;i<n;i++){
        let star='';
        for(let j=1;j<=i+1;j++){
            star+=j
        }
        console.log(star)
    }
}
starPattern(5);