var wordPattern = function(pattern, s) {
    const words = s.split(' ');
    if (pattern.length !== words.length) return false;

    const pMap = new Map();
    const sMap = new Map();

    for (let i = 0; i < pattern.length; i++) {
        const pChar = pattern[i];
        const word = words[i];

        if (pMap.has(pChar) && pMap.get(pChar) !== word) return false;
        if (sMap.has(word) && sMap.get(word) !== pChar) return false;

        pMap.set(pChar, word);
        sMap.set(word, pChar);
    }

    return true;
};
