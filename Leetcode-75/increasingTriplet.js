
 function increasingTriple(nums) {
    let first = Infinity;
    let second = Infinity;

    for (let num of nums) {
        if (num <= first) {
            first = num;
        } else if (num <= second) {
            second = num;
        } else {
            return true; 
        }
    }
    return false;
};

console.log(increasingTriple([1,2,3,4,5]));
console.log(increasingTriple([5,4,3,2,1]));
console.log(increasingTriple([2,1,5,0,4,6]));

