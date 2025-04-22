// Check even or ODD

function checkOddorEven(num){
    if(num%2==0) return 'even ' 
    else return 'odd'
}

function multiplicationTable(num){
   if( typeof num !== 'number') return 'Please provide a valid number'
    for(let i =1;i<=10;i++){
        console.log(`${i} X ${num} = ` , num*i)
    }
}


function sumOfNaturalNumebrs(n){
    return n*(n+1)/2
}

function swapTwoVariable(a,b){
    a=a+b;
    b=a-b;
    a=a-b;
    return [a,b]
}


function closeNumber(n,m){
    if(n%m ==0) return n;

  let lower = n-(n%m);
  let higher = lower+m;

  if(n%m >m/2){
return higher;
  }else{
      return lower
  }

}