let windowValid = function (map,k){
    let total =0;
    let max= 0;
    for(let i =0;i<26;i++){
        let char = String.fromCharCode(i+65);
        total+=map[char];
        max = Math.max(max,map[char])
    }
    return (total-max>=k)
}

console.log(windowValid({a:2,v:6},2))