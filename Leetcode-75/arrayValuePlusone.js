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
console.log(sum([6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3]))
