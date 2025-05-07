function validParathesis(str) {

    let combination = {
        '[': ']',
        '{': '}',
        '(': ')'
    }
    let stack = [];
   for(let char of str){

    if(Object.keys(combination).includes(char)){
        stack.push(char)
    }
    else if(char !=combination[stack[stack.length-1]]){
        return false;
    }else{
        stack.pop()
    }
      
   }
     return stack.length == 0 ? true:false;
}


console.log(validParathesis('{()[]}'));

