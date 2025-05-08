 function canPlaceFlowers(flowerbed, n) {


    let i=0;
    while(i<flowerbed.length && n!=0){
      if(flowerbed[i] ==0 && (flowerbed[i-1]==undefined ||flowerbed[i-1]==0) && (flowerbed[i+1]==undefined ||flowerbed[i+1]==0) ){
        flowerbed[i]=1;   
  n--;
      }
  console.log(flowerbed);
        i++
    }
  
      return n==0 ? true :false;
    
};



console.log(canPlaceFlowers([1,0,0,0,0,1],2))