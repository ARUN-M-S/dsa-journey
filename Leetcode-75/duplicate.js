function removeDuplicates(arr) {
    // your code here
    let seen = new Set()
    let result = [];
    for (let val of arr) {
      if (!seen.has(val)) {
        seen.add(val)
        result.push(val);
      
      } 
    }
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
 

