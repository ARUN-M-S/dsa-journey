// Q2 : flatten object const obj= {
    let obj={  a:{
        a1:1,
        a2:2,
        a3:3
    },
    b:{
        b1:1,
        b3:5,
        z:{
            z1:3,
            z2:8
        }
    
    },
    c:{
        d1:5
    }
}


// output  { a1: 1, a2: 2, a3: 3, b1: 1, b3: 5, z1: 3, z2: 8, d1: 5 }
function flattenObject(data) {
    let x = {}
    function flatten(data){
Object.keys(data).map((keys)=>{
    if(typeof data[keys] =='object'){
        flatten(data[keys])
    }else{
    
        x[keys] =data[keys]
    }
})
}
flatten(data)
   return x

}

console.log(flattenObject(obj));

// Expected: {"a.b": 1}

function flaten(data,path='',result ={}){

    Object.keys(data).forEach((keys)=>{
        let Finalpath = path ? `${path}.${keys}` : keys;
      
        if(typeof data[keys] =='object' && obj[keys] !== null && !Array.isArray(obj[keys])){
         flaten(data[keys],Finalpath,result)
        }else{
            result[Finalpath] = data[keys]
        }
    })

    return result
}

console.log(flaten(obj));