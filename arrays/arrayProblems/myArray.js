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



// Some integers are available in an an array, and its increasing up tosome point then its decresig, so find the peak;

// input : [2,3,5,6,8,3,1,0]
//output is 8;


function findPeak(arr){
    if (!Array.isArray(arr) || arr.length==0) return -1;
let left = 0;
let right = arr.length-1;

while(left<=right){
    let mid = Math.floor(left+(right-left)/2);

    if((mid==0 || arr[mid-1] <=arr[mid]) &&(mid === arr.length - 1 || arr[mid + 1] <= arr[mid])){
        return arr[mid]
    }

    if(arr[mid+1] >arr[mid]){
        left=mid+1;
    }else{
        right= mid-1;
    }
}

return -1;
}

console.log("Peak elemnt is : " ,findPeak([2,3,5,6,8,10,3,1,0]));
console.log(findPeak([2, 3, 5, 6, 8, 10, 3, 1, 0]));  // Peak is 10
console.log(findPeak([1, 3, 20, 4, 1, 0]));           // Peak is 20
console.log(findPeak([1, 2, 3, 4, 5, 6]));           // Peak is 6
console.log(findPeak([6, 5, 4, 3, 2, 1]));           // Peak is 6
console.log(findPeak([1, 2, 1]));                    // Peak is 2
console.log(findPeak([5, 10, 20, 15, 7]));            // Peak is 20
console.log(findPeak([5, 10, 20, 15, 7]));            // Peak is 20



function flattem(obj,path,result={}){
   if(typeof obj!=='object' || obj ==null) return result[path] =obj;
   console.log(obj);
  for(const key of Object.keys(obj)){

    let fullPath = path ? `${path}.${key}` : key
    console.log(fullPath,"full path");
      if(typeof obj[key] =='object'){
 flattem(obj[key],fullPath,result)
      }else{
        result[fullPath] = obj[key]
      }
  }
  return result

}

function flattenObject(obj, path = '', result = {}) {
    if (obj !== Object(obj)) {
        result[path] = obj;
        return result;
    }

    for (const [key, value] of Object.entries(obj)) {
        flattenObject(value, path ? `${path}.${key}` : key, result);
    }

    return result;
}


let obj = {"a":null,b:{c:undefined}} 

console.log(flattenObject(obj));

// expect(received).toEqual(expected) // deep equality

// Expected: {"a.b": 1}


// function groupAnagram(arr1){
//     if(!Array.isArray(arr1) || arr1.length ==0) return false;
//     let frequencyCounter = {};
//     for(let word of arr1){
//         let sortedWord =  word.split('').sort().join()
//         if(frequencyCounter[sortedWord]){
//             frequencyCounter[sortedWord].push(word)
//         }else{
//             frequencyCounter[sortedWord] = [word]
//         }
//     }
//     console.log(frequencyCounter);
//     return Object.values(frequencyCounter)
// }

//  console.log(groupAnagram(["eat", "tea", "tan", "ate", "nat", "bat"])); 

//  output =[ [ 'eat', 'tea', 'ate' ], [ 'tan', 'nat' ], [ 'bat' ] ]




// function objMethod(data){

//   return Object.fromEntries( Object.entries(data).filter(([key,val]) => typeof val =='string'))
  
// }

// function objMethod2(data){

//     return  Object.values(data).filter(val => typeof val ==='number').reduce((val,acc) => acc+val ,0)
    
//   }

//   function objMethod3(data){
//       return Object.entries(data).reduce(([key,val],acc) => console.log(val))
//   }

// //   Sum all numeric values in an object
// console.log(objMethod3({ a: 10, b: "hello", c: 5 }));

