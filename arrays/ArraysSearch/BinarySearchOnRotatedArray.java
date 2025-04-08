
public class BinarySearchOnRotatedArray {

static int BinarySearch(int [] myArr,int key){
    int low =0;
    int high = myArr.length-1;

    while(low<=high){
        int mid= low+(high-low)/2;
        if(myArr[mid] == key){
            return mid;
        }
        if(myArr[low] <=myArr[mid]){
            if(key>=myArr[low]  && key<=myArr[mid]){
                high = mid-1;
            }else{
                low= mid+1;
            }
        }else{
            if(key>=myArr[mid]  && key<=myArr[high]){
                low= mid+1;
               
            }else{
                high = mid-1;
            }

        }
    }
    return -1;
}
    public static void main(String[] args) {
        int[] arr = new int[] {6,7,8,1,2,3,4,5};
        int result = BinarySearch(arr,2);
        System.out.println(result);

        
    }
    
}
