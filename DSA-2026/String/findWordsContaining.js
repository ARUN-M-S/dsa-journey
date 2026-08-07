function findWordsContaining(str,char){
    let arr = [];
    for(let i =0;i<str.length;i++){
        for(let j =0;j<str[i].length;j++){
            if(str[i][j]==char){
                arr.push(i);
                break
            }
        }
    }
    return arr
}