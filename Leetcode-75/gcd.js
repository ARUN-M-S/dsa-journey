function findCommonPrefix(str1,str2){
    if(str1+str2 !==str2+str1) return "";
    const gcd = (a,b)=>b==0? a : gcd(b,a%b);
    let length = gcd(str1.length,str2.length);
    return str1.slice(0,length)
}