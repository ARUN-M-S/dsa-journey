

function reverseWords(s){
    let result='';
    let arr=[]
    for(let i =s.length-1;i>=0;i--){
        if(s[i]==' '){
            let word = arr.join('')
            result+=word;
            result+=' '
            console.log(word)
            arr=[]
        }else{
            arr.unshift(s[i]);
        }


    }
    return result+=arr.join('')
}


 let s =  "the sky is blue"
 

 console.log(reverseWords(s));