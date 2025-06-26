// var maxFreqSum = function(s) {
//     const alphaMap = new Map();
//     for(let i =0;i<26;i++){
//         let letter = String.fromCharCode(97+i);
//         alphaMap.set(letter,0)
//     };
//     let vowelSet = new Set('aeiou');
//     let maxVowelCount=0;
//     let maxConsonantCount=0;

//     for(let i =0;i<s.length;i++){
//         if(vowelSet.has(s[i])){
//             let count = alphaMap.get(s[i]) +1;
          
//             maxVowelCount = Math.max(count,maxVowelCount);
//             alphaMap.set(s[i],count)
//         }else{
//             let count = alphaMap.get(s[i]) +1;
//             maxConsonantCount = Math.max(count,maxConsonantCount)
//             alphaMap.set(s[i],count)
//         }
//     }

//     return maxConsonantCount+maxVowelCount;
// };

var maxFreqSum = function(s) {
    let vowelsSet = new Set('aeiou');
    let charObj = new Map();
    let maxVowelsCount=0; let maxConsonantCount=0;

    for(let i =0;i<s.length;i++){
        if(/[a-z]/.test(s[i])){
            let count = (charObj.get([s[i]])||0)+1;
            charObj.set(s[i],count)
            if(vowelsSet.has(s[i])){
                maxVowelsCount=Math.max(maxVowelsCount,count)  
            }else{
                maxConsonantCount=Math.max(maxConsonantCount,count)  

            }
        }
    }
    return maxConsonantCount+maxVowelsCount
}