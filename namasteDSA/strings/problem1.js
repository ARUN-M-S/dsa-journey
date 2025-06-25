var findWordsContaining = function(words, x) {
    let arr=[];
    for(let i =0;i<words.length;i++){
        for(let j=0;j<words[i].length;j++){
            if(words[i][j]==x){
                arr.push(i);
                break;
            }
        }
    }
    return arr;
};