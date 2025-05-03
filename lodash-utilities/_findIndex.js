function _findIndex(arr,predicate){

let check ;

if(typeof predicate ==='function'){
    check= predicate;
}else if(typeof predicate ==='object'){
    // check = ((obj)=> return obj)
}

for(let i=0;i<arr.length;i++){
    // console.log(predicate(arr[i],i,arr),"predicate");
    // if(predicate(arr[i],i,arr)) return i;
    Object.entries(predicate)
}

}

let users = [
    { 'user': 'barney',  'age': 36, 'active': true },
    { 'user': 'fred',    'age': 41, 'active': false },
    { 'user': 'pebbles', 'age': 1,  'active': true }
  ];

console.log(_findIndex(users,function(o) { return o.age < 40; }));
console.log(_findIndex(users,{ 'age': 1, 'active': true }));



