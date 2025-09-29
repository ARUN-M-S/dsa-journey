var insert = function(intervals, newInterval) {
    let n = intervals.length
    let i =0;
    let ans = []
    while(i<n && intervals[i][1]<newInterval[0]){
        ans.push(intervals[i]);
        i++
    }
    console.log(i)
    let min =max=newInterval[0]
    while(i<n && intervals[i][0]<=newInterval[1]){
        newInterval[0] =Math.min(newInterval[0],intervals[i][0]);
        newInterval[1]= Math.max(newInterval[1],intervals[i][1]);
        i++

    }
    ans.push(newInterval);
    while(i<intervals.length){
         ans.push(intervals[i]);
        i++
    }
    return ans
};