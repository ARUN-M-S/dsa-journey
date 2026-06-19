function isAnagram(t1,t2){
    if(t1.length!=t2.length) return false;
    let freq=Array(26).fill(0);
    for(let i of t1){
        let char=  i.toLowerCase()
        
        freq[char.charCodeAt(0)-'a'.charCodeAt(0)] ++
    }

    for(let j of t2){
        let char=  j.toLowerCase();
        let index = char.charCodeAt(0)-'a'.charCodeAt(0)
        if(freq[index]==0) return false
        freq[index] --
    }
   
    return true;
}
console.log(isAnagram("abba",'aabb'))

