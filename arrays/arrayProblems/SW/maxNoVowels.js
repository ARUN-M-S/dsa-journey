var maxVowels = function (s, k) {
    if (k > s.length) return -1;
    let i = 0;
    let j = 0;
    let maxCount = 0;
    let vowels = new Set('aeiou')
    let count = 0;

    while (j < s.length) {
        if(vowels.has(s[j] )&& j-i+1<=k){
            count++
        }else if(j-i+1>k){
            if(vowels.has(s[i]))count--;
            if(vowels.has(s[j]))count++;
            i++;
        }
        j++;
        maxCount= Math.max(maxCount,count)

    }

    return maxCount
};