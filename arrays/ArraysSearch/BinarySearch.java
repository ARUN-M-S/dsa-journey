
public class BinarySearch {

    static int binarySearch(int [] myArray,int key){
        int low = 0;
        int high = myArray.length-1;

        while (low<=high) {
            int mid= low+(high-low)/2;
            if(myArray[mid] ==key){
                return mid;
            }else if(myArray[mid]<key){
                low=mid+1;
            }else{
                high = mid-1;
            }
            
        }

        return -1;
    }

    public static void main(String[] args) {
        int[] arr = new int[] {1,3,4,6,7,8,9,12,13,33,44,45,65,78,90};
        int target = 12;
        int result = binarySearch(arr,target);

        if(result!= -1){
            System.out.println("target Founded at " + result);
        }else{
            System.out.println("Target Not founded");
        }
        
    }
    
}
