function longestCommonPrefix(arr) {
    let prefix =" ";
    for (let i = 0; i < arr[0].length; i++) {
        let words = arr[0][i]
        for (let j = 1; j < arr.length; j++) {
            if (words != arr[j][i]) {
                return prefix;
            }
        }
        prefix += words

    }
    return prefix;
}
console.log(longestCommonPrefix(["dog","racecar","car"]))
