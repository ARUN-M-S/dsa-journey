// function longSub(str){
//     if(str.length==0) return 0
//     let L =0;
//     let R =0;
//     let set = new Set();
//     let maxSub= 0

//     while(R<str.length){
//         let char = str[R]

//         while(L<R && set.has(char)){
            
//             set.delete(str[L]);
//             L++
//         }
//         set.add(char);
//         maxSub= Math.max(maxSub,R-L+1)
//         R++

//     }
//     return maxSub;
// }
// console.log(longSub('pwwkews'))

function longSub(str) {
    if (str.length === 0) return 0;
    
    let maxSub = 0;
    let L = 0;
    const charMap = new Map(); 

    for (let R = 0; R < str.length; R++) {
        const char = str[R];

        if (charMap.has(char)) {
            L = Math.max(L, charMap.get(char) + 1);
        }

        charMap.set(char, R);
        maxSub = Math.max(maxSub, R - L + 1);
    }
    return maxSub;
}