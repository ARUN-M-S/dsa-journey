function findMajority(nums) {
    let count1=0; let count2=0;
    let majority1= null; let majority2=null;
    let result=[]

    for(let num of nums){
        if(majority1==num){
            count1++;
        }else if(majority2==num){
            count2++;
        }else if(count1==0){
            majority1=num;
            count1++;
        }else if(count2==0){
            majority2=num;
            count2++
        }else{
            count1--;
            count2--;
        }

       
    }
     count1=count2= 0;
        for(let num of nums ){
            if(majority1==num){
            count1++;
        }else if(majority2==num){
            count2++
        }
        }

        if(count1>Math.floor(nums.length/3))result.push(majority1)
        if(count2>Math.floor(nums.length/3))result.push(majority2)

    return result;
  
}