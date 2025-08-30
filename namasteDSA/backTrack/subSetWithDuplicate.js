var subsetsWithDup = function(nums) {
    let result = [];
    nums = nums.sort((a,b)=>a-b)
    let backTrack= (path,start)=>{
        result.push([...path]);
        for(let i = start;i<nums.length;i++){
            if(i >start && nums[i] ==nums[i-1])  continue;
            path.push(nums[i]);
            backTrack(path,i+1);
            path.pop()
        }
    }
    backTrack([],0)
    return result;
    
};