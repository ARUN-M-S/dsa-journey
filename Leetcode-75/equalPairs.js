var equalPairs = function(grid) {
    let n = grid.length;
    let i =0;
    let j =0;
    let count =0;
    let map ={}
    while(i<n){
      map[grid[i]] = (map[grid[i]]||0)+1;
      i++;
    }
    console.log(map)

    while(j<n){
        let columnArr=[]
  for(let k=0;k<n;k++){
    columnArr.push(grid[k][j])
  }

  if( map[columnArr.join(',')]){
      count+=map[columnArr.join(',')];
  } 
       j++
      }
 return count;
};


let grid = [[3,1,2,2],[1,4,4,5],[2,4,2,2],[2,4,2,2]];

console.log( equalPairs(grid))