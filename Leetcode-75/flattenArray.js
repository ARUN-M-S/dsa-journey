
 var flat = function (arr, n) {
    if(n==0 ) return arr;
        let result = [];
       
        function flatten(arr,count) {
            for (let i = 0; i < arr.length; i++) {
                
                if (Array.isArray(arr[i]) && count<n) {
                   
                    flatten(arr[i],count+1);
                    
                } else {
                    result.push(arr[i])
                }
            }
        }
    
        flatten(arr,0);
        return result;
    
    };


    console.log(flat([1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]],1));