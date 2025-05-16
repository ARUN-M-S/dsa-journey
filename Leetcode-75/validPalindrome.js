var isPalindrome = function(s) {
    let trimmed = s.replace(/[^0-9a-zA-Z]/g,'');
    console.log(trimmed);
    console.log(trimmed[0].toLowerCase());

};


let k = 'A man, a plan, a canal: Panama'


isPalindrome(k)