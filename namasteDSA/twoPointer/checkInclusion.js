/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
 var checkInclusion = function (s1, s2) {
    if(s1.length>s2.length) return false;
    let arr1 = Array(26).fill(0)
    let arr2 = Array(26).fill(0)

    for (let i = 0; i < s1.length; i++) {
        arr1[s1[i].charCodeAt() - 97]++
        arr2[s2[i].charCodeAt() - 97]++
    }

    let i = 0; j = s1.length - 1;
    while (j < s2.length) {

        if (compareSub(arr1, arr2)) {
            return true;
        } else {
             arr2[s2.charCodeAt(i) - 97]--
            i++;
            j++;
            arr2[s2.charCodeAt(j) - 97]++
        }
    }
    return false;
};

var compareSub = function (arr1, arr2) {

    for (let i = 0; i < 26; i++) {
        if (arr1[i] !== arr2[i]) return false;
    }
    return true;

}