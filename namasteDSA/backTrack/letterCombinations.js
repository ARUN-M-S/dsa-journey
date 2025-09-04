var letterCombinations = function(digits) {
    if(digits.length ==0) return []
    let letters = {
        2 :'abc',
         3 :'def',
         4:'ghi',
         5:'jkl',
         6:'mno',
         7:'pqrs',
         8:'tuv',
         9:'wxyz'
    }
    let result = [];

    let backTrack =(path,index)=>{
        if(index==digits.length){
          
            return result.push(path.join(""))
        }
        let choices = letters[digits[index]];
        for(let i =0;i<choices.length;i++){
            path.push(choices[i]);
            backTrack(path,index+1);
            path.pop()
        }

    }
    backTrack([],0)
    return result;
    
};