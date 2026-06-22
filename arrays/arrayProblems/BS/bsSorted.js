let nums = [4,5,6,7,0,1,2];
let target = 2;

function find(arr,t){
    let l = 0;
    let r= arr.length-1;

    while(l<=r){
        let m= Math.floor(l + (r-l)/2);

        if(arr[m]==t) return m;
        if(arr[m]>=arr[l] ){
            if(arr[m]>t && arr[l]<=t){
               r=m-1 
            }else{
                l=m+1
            }

        }else{
            if(arr[m]<t && arr[r]>=t){
                l=m+1
             }else{
                 r=m-1
             }

        }
    }
    return -1;
}

console.log(find(nums,target))