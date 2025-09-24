let arr = [1,2,3,4,5,9,34,56];
// o/p {odd:[1,3,5,9],even:[2,4,34,56]}

let ans = arr.reduce((acc,val)=> (val%2==0 ? acc.even.push(val) : acc.odd.push(val) ,acc),{odd:[],even:[]});

console.log(ans)

//final o/p = { odd: [ 1, 3, 5, 9 ], even: [ 2, 4, 34, 56 ] }