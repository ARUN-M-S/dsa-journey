var searchInsert = function(arr, t) {
    
    if(arr.length==0) return -1;
    let L =0;
    let R = arr.length-1;
    let position= arr.length;
while(L<=R){
    let M = L +Math.floor((R-L)/2);
    if(arr[M]>=t) {
       position=M;
       R=M-1
    }
 
  else L=M+1
}
return position;

}