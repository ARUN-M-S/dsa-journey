function merge(left,right){
    let l=0;
    let r=0;
    let result =[]
    while(l<left.length && r<right.length){
        if(left[l]<=right[r]){
            result.push(left[l++])
        }else{
            result.push(right[r++])
        }
    }

    return [...result,...left.slice(l),...right.slice(r)]
}