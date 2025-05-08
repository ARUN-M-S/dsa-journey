function swap(arr,idx1,idx2){
    console.log(arr,idx1,idx2);
    return [arr[idx1],arr[idx2]]= [arr[idx2],arr[idx1]]
}

var reverseVowels = function(s) {
let vowels = ['a','e','i','o','u'];
let left=0;
let right=s.length-1;;

let splittedWord = s.split('')
 
while(left<right){
    if(vowels.includes(splittedWord[left].toLowerCase())){
        if(vowels.includes(splittedWord[right].toLowerCase())){
          swap(splittedWord,left,right)
            left++;
            right--;

        }else{

            right--
        }
      
    }else{

        left ++;
    }
   
}
return splittedWord.join('');
    
};
console.log(reverseVowels('IceCreAm'))
