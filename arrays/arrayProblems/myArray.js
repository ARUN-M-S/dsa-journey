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


//  2623. Memoize
function memoize(fn) {
    let cache = {}
    return function(...args) {
        let keys = JSON.stringify(args)
        if( keys in cache){
            return cache[keys]
        }else{
     cache[keys] = fn(...args)
      return cache[keys]
        }
        
    }
}
// const fn = memmoise()

// Input: arr[] = [1, 2, 3]
// Output: [ [1], [1, 2], [2], [1, 2, 3], [2, 3], [3] ]


//Input = arr[] = [1,[2,[3,[4],5],6],7]
// Output = [1,2,3,4,5,6,7]

//Recursive method
function flatArray(arr){
    return arr.reduce((acc,num)=> Array.isArray(num) ? acc.concat(flatArray(num)) : acc.concat(num),[])
}

function flatArrayByloop(arr){
    let result =[];
    for(let key of arr){
        if(Array.isArray(key)){
            result=result.concat(flatArrayByloop(key))
        }else{
           result= result.concat(key)
        }
    }
    return result
}

console.log(flatArray([1,[2,[3,[4],5],6],7]));
console.log(flatArrayByloop([1,[2,[3,[4],5],6],7]));
