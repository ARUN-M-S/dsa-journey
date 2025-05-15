function singleNumber(nums){
let freqCounter = {};
for(let num of nums){
    freqCounter[num] = (freqCounter[num]||0)+1;
}

for(let val of Object.keys(freqCounter)){
    if(freqCounter[val]==1) return val;
}

}

singleNumber([1,1,2,4,4])