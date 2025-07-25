
var characterReplacement = function(s, k) {
    
};



let windowValid = function (map,k){
    let total =0;
    let max= 0;
    let charCodeOfA= 'A'.charCodeAt(); // If forget the no 65
    for(let i =0;i<26;i++){
        let char = String.fromCharCode(i+65);
        if(map[char]){
            total+=map[char];
            max = Math.max(max,map[char])
        }
        
    }
    return (total-max<=k)
}

console.log(windowValid({A:2,V:6},1))