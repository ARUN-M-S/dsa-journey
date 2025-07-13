var orangesRotting = function(grid) {
    let x= grid.length;
    let y= grid[0].length;
    let que= []
    for(let i =0;i<x;i++){
        for(let j=0;j<y;j++){
            if(grid[i][j]==2){
                que.push([i,j,0])
            }
        }
    }
    let maxMinute= 0
   while(que.length){
    let [m,k,min] = que.shift()
    let rotten = false;
    if(m>0 && grid[m-1][k]==1){
        grid[m-1][k]=2;
        que.push([m-1,k,min+1])
        rotten=true
    }
    if(m<x-1&& grid[m+1][k]==1){
        grid[m+1][k]=2;
        que.push([m+1,k,min+1])
    }
    if(k<y-1&& grid[m][k+1]==1){
        grid[m][k+1]=2;
        que.push([m,k+1,min+1])
    }
     if(k>0&& grid[m][k-1]==1){
        grid[m][k-1]=2;
        que.push([m,k-1,min+1])
    }

maxMinute = Math.max(maxMinute,min)
   }
  
     for(let i =0;i<x;i++){
        for(let j=0;j<y;j++){
            if(grid[i][j]==1){
                return -1;
            }
        }
    }
    return maxMinute;
};