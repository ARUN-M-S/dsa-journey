var maxFreqSum = function(s) {
    const alphaMap = new Map();
    for(let i =0;i<26;i++){
        let letter = String.fromCharCode(97+i);
        alphaMap.set(letter,0)
    };
    let vowelSet = new Set('aeiou');
    let maxVowelCount=0;
    let maxConsonantCount=0;

    for(let i =0;i<s.length;i++){
        if(vowelSet.has(s[i])){
            let count = alphaMap.get(s[i]) +1;
          
            maxVowelCount = Math.max(count,maxVowelCount);
            alphaMap.set(s[i],count)
        }else{
            let count = alphaMap.get(s[i]) +1;
            maxConsonantCount = Math.max(count,maxConsonantCount)
            alphaMap.set(s[i],count)
        }
    }

    return maxConsonantCount+maxVowelCount;
};