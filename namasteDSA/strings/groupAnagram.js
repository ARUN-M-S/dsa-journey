var groupAnagrams = function(strs) {
    let result ={};

    for(let i =0;i<strs.length;i++){
        let sorted = strs[i].split('').sort().join('')
                if(result[sorted]){
                    result[sorted].push(strs[i])
                }else{
                    result[sorted]=[strs[i]]
                }
    }
    return Object.values(result)
    
};