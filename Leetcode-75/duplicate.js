function removeDuplicates(arr) {
    // your code here
    let frqMap = new Map();
    let result = [];
    for (let val of arr) {
      if (!frqMap.get(val)) {
        result.push(val);
      
      } 
      frqMap.set(val,((frqMap.get(val)||0)+1))
    // frqMap.set(val,val)
    }
    console.log(frqMap);
    return result;
  }
  console.log( removeDuplicates([
    null,
    undefined,
   null,
   undefined,
  ]))
 

  console.log( removeDuplicates([
    true,
    false,
   false,
   undefined,
  ]))
 

