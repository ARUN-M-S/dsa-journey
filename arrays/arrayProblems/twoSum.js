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


function twoSum2(arr,target){
    if(arr.length<=1)return [];
    let map ={}
    for(let i =0;i<arr.length;i++){
        let diff = target-arr[i];
        
        if(map[diff]!== undefined){
            return [map[diff],i]
        }
        map[arr[i]]=i
      
    }
    return []
    
}
console.log(twoSum2([3,2,1,4,5,3],6))