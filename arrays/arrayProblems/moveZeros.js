// var moveZeroes = function(nums) {
//     let slow = 0;
//     let fast = 0;
//     while(fast<nums.length){
//         if(nums[fast]!=0){
//             [nums[fast],nums[slow]]=[nums[slow],nums[fast]]
//             slow++;
//         }
//         fast++
//     }
    
// };

var moveZeroes = function(nums) {

    let count = 0
    for(let i =0;i<nums.length;i++){
        if(nums[i]==0)count++;
        else if (count>0){
            nums[i-count] = nums[i]
            nums[i]=0
        }
    }
    
};