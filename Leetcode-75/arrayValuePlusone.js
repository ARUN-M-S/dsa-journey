function sum(arr){
    let temp = arr.join('');
    let result =[]
      temp= Number(temp)+1;
      while (temp!=0) {
        result.push(Math.floor(temp%10));
        temp = Math.floor(temp/10)
      }
     
      return result.reverse();



}


console.log(sum([1,2,3]))