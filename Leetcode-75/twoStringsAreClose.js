function closeStrings(word1, word2) {
    if (word1.length !== word2.length) return false;
    let word1Set = new Set(word1);
    let word2Set = new Set(word2);
    if (word1Set.size != word2Set.size) return false;

    for (let elem of word1Set) {
        if (!word2Set.has(elem)) return false;
    }
    let freq1 = {};
    let freq2 = {};
    for (let ch of word1) freq1[ch] = (freq1[ch] || 0) + 1;
    for (let ch of word2) freq2[ch] = (freq2[ch] || 0) + 1;

    const keys1 = Object.keys(freq1).sort().join('')
    const keys2 = Object.keys(freq2).sort().join('')
    if (keys1 !== keys2) return false;
    console.log(keys1);
    let values1 = Object.values(freq1).sort((a, b) => a - b);
    let values2 = Object.values(freq2).sort((a, b) => a - b);

    for (let i = 0; i < values1.length; i++) {
        if (values1[i] !== values2[i]) return false;
    }


    return true;
}
console.log(closeStrings('abc', 'acb'));
