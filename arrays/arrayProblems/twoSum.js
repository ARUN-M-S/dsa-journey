function twoSum(arr,target){
    if(arr.length<=1)return [];
    let map ={}
    for(let i =0;i<arr.length;i++){
        let diff = target-arr[i];
        console.log(map)
        if(map[arr[i]]!== undefined){
            return [map[arr[i]],i]
        }
        map[diff]=i
      
    }
    return []
    
}

console.log(twoSum([3,3],6))