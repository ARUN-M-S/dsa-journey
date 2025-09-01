var combinationSum2 = function(candidates, target) {
    let result =[];
    candidates.sort((a,b)=>a-b)
    let backTrack=(path,start,sum)=>{
        if(sum==target){
            result.push([...path]);
            return
        };
        if(sum>target) return;
        for(let i =start;i<candidates.length;i++){
            if(i>start && candidates[i]==candidates[i-1]) continue
            path.push(candidates[i]);
            backTrack(path,i+1,sum+candidates[i]);
            path.pop()
        }

    }
    backTrack([],0,0)
    return result;
    
};