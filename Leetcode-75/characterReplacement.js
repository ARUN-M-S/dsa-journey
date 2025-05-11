function characterReplacement(s,k){
    let count=0;
    let char= s[0];

    let maxCount =0;
    let left =0;

    for(let right =0;right<s.length;right++){
        if(s[right]==char){
            count++;
        }

        while(count>k){
            if(s[left] ==char){
                count--;
            }
            left++;
        }

        maxCount = Math.max(maxCount,count);
    }
    return maxCount;

}