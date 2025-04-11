
public class MaximumCountMinAndMax{
public static void main(String[] args) {

    // 2529. Maximum Count of Positive Integer and Negative Integer
    int [] nums = {-3,-3,-2,-2,-1,-1,0,0,0,1,2,3,5,8};

    int left = 0; int right = nums.length-1; 
int lowerBound =-1;
int upperBound =-1;
while(left<=right){
    int mid= left+(right-left)/2;
System.out.println("here");
    if(nums[mid]<0){
        left = mid+1;
       
    }else{
        right = mid-1;
    }

}
lowerBound= left;
right = nums.length-1;
int newLow = left;
while(newLow<=right){
    int mid= newLow+(right-newLow)/2;

    if(nums[mid]<=0){
        newLow = mid+1;
      
    }else{
        right = mid-1;
    }

}
upperBound= newLow;
System.out.println(lowerBound + "lowerBound");
System.out.println(upperBound + "upperBound");

int maxCount = Math.max(lowerBound ,(nums.length-upperBound));
if(lowerBound >(nums.length-upperBound)){
    System.out.println("-ve values have higher count , count is :" + maxCount );
}else{
    System.out.println("+ve values have higher count , count is :" + maxCount );

}
// System.out.println(maxCount);
    
}
}