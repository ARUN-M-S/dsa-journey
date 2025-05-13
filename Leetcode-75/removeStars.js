var removeStars = function(s) {

    let right =0;
    let result =[]

    while(right<s.length){
       if(s[right]!='*'){
           result.push(s[right])
       }else{
           result.pop()
       }
       right++
    }

    return result.join('')
};

removeStars('leet**cod*e')
// Input: s = "leet**cod*e"
// Output: "lecoe"