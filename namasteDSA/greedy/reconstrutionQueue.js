var reconstructQueue = function(people) {
    // Step 1: Sort by height desc, then by k asc
    people.sort((a, b) => {
        if (a[0] === b[0]) {
            return a[1] - b[1];  // smaller k first
        }
        return b[0] - a[0];      // taller first
    });

    let result = [];
    
    // Step 2: Insert each person at index k
    for (let p of people) {
        result.splice(p[1], 0, p);
    }

    return result;
};
