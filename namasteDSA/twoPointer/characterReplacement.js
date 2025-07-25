
var characterReplacement = function (s, k) {
    let i = 0, j = 0;
    let map = {};
    let max = 0;
    map[s[0]] = 1;
    while (j < s.length) {
        if (windowValid(map, k)) {
            max= Math.max(max,(j-i+1));
            map[s[j]]=(map[s[j]]||0)+1;
            j++
        }else{
            map[s[i]]=--map[s[i]];
            i++

        }
    }
    return max;

};



let windowValid = function (map, k) {
    let total = 0;
    let max = 0;
    let charCodeOfA = 'A'.charCodeAt(); // If forget the no 65
    for (let i = 0; i < 26; i++) {
        let char = String.fromCharCode(i + 65);
        if (map[char]) {
            total += map[char];
            max = Math.max(max, map[char])
        }

    }
    return (total - max <= k)
}

console.log(characterReplacement('ABABDDCCD', 2))