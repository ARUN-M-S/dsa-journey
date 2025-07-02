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

// o(nMlogn) space;
// o(m*n)

function groupAnagrams2(strs){
    let map ={};
    for(let i =0;i<strs.length;i++){
        let mapArray =Array(26).fill(0);
        let s= strs[i];
        for(let j =0;j<s.length;j++){
            let index = s[j].charCodeAt() - 'a'.charCodeAt();
            mapArray[index]++
        }
        let key =''
        for(let k =0;k<26;k++){
key=key+String.fromCharCode(k)+mapArray[k];

        }

        if(!map[key]){
            map[key] = [s]
        }else{
            map[key].push(s)
        }
    
    }

    return [...Object.values(map)]
    
}

console.log(groupAnagrams2(["eat","tea","tan","ate","nat","bat"]))