function sort(arr){
    let max= Math.max(...arr);
    let count = new Array(max+1).fill(0);
    
    for(let x of arr){
        count[x]++
    }
    let index = 0;
    let prefix = new Array(max+1).fill(0);
    for(let i=0;i<count.length; i++){
        if(i>0){
            prefix[i]=prefix[i-1]+count[i]
        }else{
            prefix[i]=count[i]
        }
    }
  let result = new Array(arr.length).fill(0)
    for(let i =arr.length-1;i>=0;i--){
     let x=  prefix[arr[i]]
     result[x-1] = arr[i]

     prefix[arr[i]]--
    }
    return result
}

console.log(sort([4,2,5,3,3,2,1,4]))