
function duplicate(nums){
if(nums.length<=0) return "Please share a valid array";
let num =0;
for(let i of nums){
    num = num^i
}
return num


}


console.log(duplicate([1,2,3,4,4,3,2]))