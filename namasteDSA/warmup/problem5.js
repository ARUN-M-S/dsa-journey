

function reverseStar(n){
    for(let i=0;i<n;i++){
        let row='';
        for(let k=1;k<n-i;k++){
            row+=' ';
        }

        for(let j =0;j<=i;j++){
            row+='*'
        }
        console.log(row);
    }
}
reverseStar(5)