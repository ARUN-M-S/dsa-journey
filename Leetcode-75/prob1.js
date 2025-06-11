// // example1: a1b3c2
// // expected output: abbbca

// // example 2: e2v10d4
// // expected output: eevvvvvvvvvvdddd

function createString(data){
    let i =0;
    let result=[]
    while(i<data.length){
        let current;

           current=data[i]
           i++;
        let countStr='';
        while(i<data.length && !isNaN(data[i])){
            countStr+=data[i];
            i++;
        }
       let count = parseInt(countStr,10)
        result.push(current.repeat(count));
      
        
    }
    return result.join('')
}

console.log(createString('e2v10d4'));
