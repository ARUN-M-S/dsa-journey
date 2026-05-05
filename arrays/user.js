// export interface User {
//     id: number;
//     name: string;
//     email: string;
//   }
   
   
    // let  users = [
    //   { id: 1, name: 'Alice Johnson', email: 'alice@example.com' },
    //   { id: 2, name: 'Bob Smith', email: 'bob@example.com' },
    //   { id: 3, name: 'Charlie Davis', email: 'charlie@example.com' },
    // ];

function fetchData(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            const success =Math.random()>.5
            if(success){
                resolve('user data ')
            }else{
                reject('error')
            }
            
        },2000);
    })
}


fetchData().then(result=>console.log(result)).catch(error=>console.log(error))


let x= 78538;

function findCount(num){
    if(num==0)return 1;
    num = Math.abs(num)
    let count=0;
    while(num>0){
        count++;
        num= Math.floor(num/10)
    }
    return count;

}
console.log(findCount(x));