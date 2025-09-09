var partition = function(s) {
    let result = [];
    let backTrack = (path,remainigStr)=>{
        if(!remainigStr.length){
            result.push([...path])
        }
        for(let i = 1;i<=remainigStr.length;i++){
            let choice = remainigStr.substring(0,i);
           if(!isPalindrome(choice)) continue;
            path.push(choice);
            backTrack(path,remainigStr.substring(i))
            path.pop()

        }
    }
    backTrack([],s);
    return result
};

let isPalindrome=(str)=>{
    let i =0;
    let j = str.length-1;
    while(i<j){
        if(str[i++]!=str[j--]) return false;

    }
    return true;

    

}