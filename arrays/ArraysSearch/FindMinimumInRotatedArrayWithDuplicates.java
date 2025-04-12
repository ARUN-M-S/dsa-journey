


public class FindMinimumInRotatedArrayWithDuplicates {

    static int findMin(int [] arr){
        int low= 0; int high = arr.length-1;

        while(low<high){
            int mid = low+(high-low)/2;
            if(arr[low] == arr[mid] && arr[mid]==arr[high]){
                low++;
                high--;
                continue;
            }else if(arr[mid]>arr[high]){
                low=mid+1;
            }else{
                high = mid;
            }

        }
        return arr[low];
    }
    public static void main(String[] args) {
        int[] arr = {10,10,10,1,10};

    System.out.println(findMin(arr));
    }
}
