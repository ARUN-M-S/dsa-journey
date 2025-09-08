var makesquare = function(matchsticks) {

    let sum = matchsticks.reduce((acc, val) => val + acc, 0);
    if(sum%4!==0) return false;
    matchsticks.sort((a,b)=>b-a);
    let target = sum/4;
    let sides = new Array(4).fill(0);

    let backTrack = (index)=>{
        if(index==matchsticks.length){
            return sides[0] == target && sides[1] == target && sides[2] == target && sides[3] == target 
        }
        let stick = matchsticks[index];

        for(let i =0;i<4;i++){
            if(sides[i]+stick <=target){
                sides[i]+=stick;
                if (backTrack(index + 1)) return true;
                sides[i] -= stick; // backtrack
            }
        }
         return false;
    }

    return backTrack(0)

  
    
};