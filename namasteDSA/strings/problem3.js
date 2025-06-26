var balancedStringSplit = function (s) {
    let left = 0;
    let right = 0;
    let count = 0;
    let result = []
    while (right < s.length) {
        if (s[right] == 'R') {
            count++
        } else {
            count--;
        }

        if (count == 0 && right != left) {
            result.push(s.split('').slice(left, right+1).join(''));
            left = right+1;
           
        }
        right++;
    }

    return result.length
};


var balancedStringSplit = function(s) {
    let R=0;
    let L=0;
    let count=0;
    for(let i =0;i<s.length;i++){
        if(s[i]=='R'){
            ++R
        }else{
            ++L
        }
        if(R==L){
            count++;
            R=0;
            L=0
        }
    }
    return count;
};