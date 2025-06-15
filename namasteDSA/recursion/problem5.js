function findLengthofNumber(num){
    if(num==0) return 1;
    if(num<10) return 1;
    return 1+findLengthofNumber(Math.floor(num/10))
}

console.log(findLengthofNumber(151))