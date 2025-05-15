// function singleNumber(nums){
// let freqCounter = {};
// for(let num of nums){
//     freqCounter[num] = (freqCounter[num]||0)+1;
// }

// for(let val of Object.keys(freqCounter)){
//     if(freqCounter[val]==1) return val;
// }

// }


function singleNumber(nums){
    let result = 0;
    for(let num of nums){
        result^=num
    }
 
    return result
    }
singleNumber([1,1,2,4,4])

singleNumber([1,1,2,4,4])