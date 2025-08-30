var subsets = function(nums) {
    let result = [];
    let backTrack= (path,start)=>{
        result.push([...path]);
        for(let i = start;i<nums.length;i++){
            path.push(nums[i]);
            backTrack(path,i+1);
            path.pop()
        }
    }
    backTrack([],0)
    return result;
    
};