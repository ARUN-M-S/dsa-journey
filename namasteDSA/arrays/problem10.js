function findMid(arr){
    if(arr.length==1)return 0;
   let sum = arr.reduce((acc,val)=>acc+=val,0);
   let leftSum=0;
   for(let [key,num] of arr.entries()){
       let rightSum = sum-leftSum-num;
       if(leftSum==rightSum)return key;
       leftSum+=num
   }
return -1
}

findMid([1,2,3,4,5])