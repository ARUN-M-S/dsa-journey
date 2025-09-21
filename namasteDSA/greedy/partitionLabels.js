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
            ans.push(partitionEnd-partitionStart)
            partitionStart = partitionEnd =i
        }
        partitionEnd = Math.max(partitionEnd,last[char] )


    }
}