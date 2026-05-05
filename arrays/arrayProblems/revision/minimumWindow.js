function minimumWindow(s,t){
    if(!s || !t ) return ""

    let tMap={};
    for(let char of t){
        tMap[char] = (tMap[char]||0)+1
    }
    let need = Object.keys(tMap).length;
    let have =0;
    let sMap={}
    let L =0
    let minL=0;
    let minLen=Infinity;
    for(let i =0;i<s.length;i++){
        let c= s[i]
        sMap[c] = (sMap[c]||0)+1;
        if(tMap[c] !== undefined && sMap[c]==tMap[c])have++;

        while(have==need){
            minL=L;
            minLen=Math.min(minLen,i-L+1)
            sMap[s[L]] = (sMap[s[L]]||0)-1;
            if(tMap[s[L]] !== undefined && sMap[s[L]]<tMap[s[L]])have--;
            L++;

        }

    }

    return minLen == Infinity ? " " : s.slice(minL,minL+minLen)

}


console.log(minimumWindow("ADOBECODEBANC", "ABC"))
