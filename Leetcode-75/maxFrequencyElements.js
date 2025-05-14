var maxFrequencyElements = function(nums) {
    
    let freqMap= {};

    for(let num of nums ){
        freqMap[num]=(freqMap[num]||0)+1;
    }
    let sorted = Object.values(freqMap).sort((a,b)=>b-a);
    
    console.log(,"sorted");
};

maxFrequencyElements([1,2,2,3,1,4])