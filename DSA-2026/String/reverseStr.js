var reverseStr = function (s, k) {

    s = s.split('');
    for (let i = 0; i < s.length; i += 2 * k) {
        let left = i;
        let right = Math.min(s.length - 1, i-1+k);
        console.log(right)
        while (left < right) {
            [s[left], s[right]] = [s[right], s[left]];
            left++;
            right--;
        }
       
    }

    return s.join('')
}

var reverseStrJS = function (s, k) {
let result = ''
    
    for (let i = 0; i < s.length; i += 2 * k) {
     let reverse = s.slice(i,i+k).split('').reverse().join('')
     console.log(reverse)
     let rest = s.slice(i+k,i+2*k)
     console.log(rest)
     result +=reverse+rest
     console.log(result)
       
    }
    return result
}

let s = "abcdefg";
let k = 2

console.log(reverseStrJS(s, k))