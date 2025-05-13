var removeStars = function(s) {

    let right =0;
    let result =[]

    for(let ch of s){
       if(ch!='*'){
           result.push(ch)
       }else{
           result.pop()
       }
    //    right++x
    }

    console.log(result);

    return result.join('')
};

removeStars('leet**cod*e')
// Input: s = "leet**cod*e"
// Output: "lecoe"