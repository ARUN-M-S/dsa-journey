function sum(arr){
   let i = arr.length-1;
   while(i>=0){
       if(arr[i]<9){
           arr[i]++;
           return arr;
       }
       arr[i]=0;
       i--;
   }
arr.unshift(1);
return arr;


}


console.log(sum([1,2,3]))
console.log(sum([9,9,9]))
