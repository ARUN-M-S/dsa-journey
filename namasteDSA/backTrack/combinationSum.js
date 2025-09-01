var combinationSum = function(candidates, target) {
    let result =[];

    let backTrack=(path,start,sum)=>{
        if(sum==target){
            result.push([...path])
            return;
        }
        if (sum > target) return;
        for(let i =start;i< candidates.length;i++){
            path.push(candidates[i]);
            backTrack(path,i,sum+candidates[i]);
            path.pop()
        }
    }
    backTrack([],0,0);
    return result;
    
};