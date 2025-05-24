var equalPairs = function(grid) {
    let n = grid.length;
    let i =0;
    let j =0
    while(i<n){
        for(let j =0;j<n;j++){
            console.log(grid[i][j]);           
        }
      
        
        i++;
       
    }
};


let grid = [[3,2,1],[1,7,6],[2,7,7]];
equalPairs(grid)