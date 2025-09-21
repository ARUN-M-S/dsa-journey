var partitionLabels = function(s) {
    let ans = [];
    let first = Array(26).fill(-1)
    let last = Array(26).fill(-1);
    for(let i =0;i<s.length;i++){
        let char = s.charCodeAt(i)-97;
        if(first[char]<0){
            first[char]=i;
        }else{
            last[char]=i;
        }
    }
    let partitionStart = partitionEnd =0;
    for(let i =0;i<s.length;i++){
        let char = s.charCodeAt(i)-97;
        if(partitionEnd<first[char]){
            ans.push(partitionEnd-partitionStart+1)
            partitionStart = partitionEnd =i
        }
        partitionEnd = Math.max(partitionEnd,last[char] )
    }

    if(partitionEnd-partitionStart+1 >0){
        ans.push(partitionEnd-partitionStart+1)
   }
   return ans
}