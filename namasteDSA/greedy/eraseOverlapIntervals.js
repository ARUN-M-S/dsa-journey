var eraseOverlapIntervals = function(intervals) {
    if (intervals.length === 0) return 0;

    // Step 1: Sort by end time
    intervals.sort((a, b) => a[1] - b[1]);

    let count = 0;          // number of removals
    let prevEnd = intervals[0][1];

    // Step 2: Iterate through intervals
    for (let i = 1; i < intervals.length; i++) {
        if (intervals[i][0] < prevEnd) {
            // Overlapping -> remove this interval
            count++;
        } else {
            // Non-overlapping -> update prevEnd
            prevEnd = intervals[i][1];
        }
    }

    return count;
};
