function removeDuplicates(arr) {
  let frqMap = {};
  let result =[]
  for(let val of arr){
      if(!frqMap[val]){
        result.push(val);
        frqMap[val]=val;
      } 
  }
  return result;
  }
  console.log(  removeDuplicates([1, 2, 2, 3, 4, 4]))

  removeDuplicates([true,false,true])
