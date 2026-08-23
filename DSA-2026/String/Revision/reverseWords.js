

function reverseWords(s){
    let result='';
    let word=''
    for(let i =s.length-1;i>=0;i--){
        if(s[i]==' '){
            
            result+=word;
            result+=' '
            word=''
        }else{
           word= s[i]+word
        }
    }
    return result+=word
}


 let s =  "the sky is blue"
 

 console.log(reverseWords(s));