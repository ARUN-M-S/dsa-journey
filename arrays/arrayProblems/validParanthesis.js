function validParathesis(str) {

    let combination = {
        '[': ']',
        '{': '}',
        '(': ')'
    }
    let stack = [];
   for(let char of str){
    if(char in combination){
        stack.push(combination[char])
    }else{
       if( stack.pop() !==char) return false;
    }
    
      
   }
     return stack.length == 0 ? true:false;
}


console.log(validParathesis('{()[]})'));

