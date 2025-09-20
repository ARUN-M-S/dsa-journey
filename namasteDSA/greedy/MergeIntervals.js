var merge = function(intervals) {
    intervals.sort((a,b)=>(a[0]-b[0]))
    let ans = [intervals[0]];

    for(let i =1;i<intervals.length;i++){
        if(ans[ans.length-1][1]>=intervals[i][0]){
            ans[ans.length-1][1] = Math.max(intervals[i][1],ans[ans.length-1][1])
        }else{
            ans.push(intervals[i])
        }
    }
    return ans
};