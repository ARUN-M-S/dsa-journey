function subarraySum(arr, target) {
    // code here
    let left =0;
    let sum =0;
    
    for(let right =0;right<arr.length;right++){
        sum+=arr[right];
        
        
        while(sum>target && left<=right){
            sum-=arr[left];
            left++;
        }
        if(sum==target){
            return [left+1,right+1]
        }
    }
return [-1]

}