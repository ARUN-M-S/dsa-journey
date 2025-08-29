var judgeSquareSum = function(c) {
    if(c<=2) return true;
 let num1 = 0; let num2 = Math.floor(Math.sqrt(c));
 while(num1<=num2){
    let sum = (num1*num1) + (num2*num2);
    if(sum==c) return true;
    if(sum<c){
        num1++
    }else{
        num2--
    }
 }
 return false;
    
};