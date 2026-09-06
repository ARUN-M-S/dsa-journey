function findNextGreater(nums1,nums2){
    let stack =[];
    
    let obj = {};
    let n = nums2.length;
    stack.push(nums2[n-1]);
    obj[nums2[n-1]]=-1;

    for(let i =n-2;i>=0;i--){
        let j = stack.length
        if(stack[j-1]>nums2[i]){
            obj[nums2[i]]=stack[j-1]
        }else{
           
            while(stack.length>0 && stack[stack.length-1]<nums2[i]){
                console.log(stack)
                stack.pop();
            }
            
            if(stack.length>0)obj[nums2[i]]=stack[stack.length-1]
            else{
                obj[nums2[i]]=-1
            }
        }
        stack.push(nums2[i])

    }
    let result=[]
    for(let i =0;i<nums1.length;i++){
result.push(obj[nums1[i]])
    }
   return result
}

console.log(findNextGreater([3,4,9],[1,5,0,3,4,9,2,6,8]))