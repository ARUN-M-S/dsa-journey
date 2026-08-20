function reverseStrJS(s, k){
  let result ='';
  for(let i =0;i<s.length;i+=2*k){
      let reverse = s.slice(i,i+k).split('').reverse().join('')
      let rest = s.slice(i+k,i+2*k)
      result+=reverse+rest
  }
  return result
}


let s = "abcdefg";
let k = 2

console.log(reverseStrJS(s, k))