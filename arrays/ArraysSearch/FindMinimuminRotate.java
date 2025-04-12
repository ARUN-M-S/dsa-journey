
public class FindMinimuminRotate {

    static int findMinimum(int [] nums){
        int low= 0;
        int high = nums.length-1;
        while(low<=high){
            int mid = low+(high -low)/2;
            if(nums[low]<nums[mid]){
                if(nums[mid]>nums[mid-1]){
                    low=mid+1;
                   
                }else{
                    high = mid-1;
                }
            }else{
                if(nums[mid] >nums[mid-1]){
                    high = mid-1;
                }else{
                    low = mid+1;
                   
                }

            }
        }
        return low;
    }
    public static void main(String[] args) {
        int []nums = {3,4,5,6,1,2};
        int result  = findMinimum(nums);
        System.out.println(result);
    }
}
