// Check even or ODD

function checkOddorEven(num){
    if(num%2==0) return 'even ' 
    else return 'odd'
}

function multiplicationTable(num){
   if( typeof num !== 'number') return 'Please provide a valid number'
    for(let i =1;i<=10;i++){
        console.log(`${i} X ${num} = ` , num*i)
    }
}
multiplicationTable("kfdj")