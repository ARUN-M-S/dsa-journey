
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
    static boolean searchMatrix(int[][] matrix, int target) {
        boolean result =false;
        for(int i=0;i<matrix.length;i++){
            if(matrix[i][0] <= target && matrix[i][matrix[i].length-1] >=target){
int value =binarySearch(matrix[i], target);
if(value != -1){result= true; break;}
            }
        }

       return result;
    }
    public static void main(String[] args) {
     int [][]   matrix = new int[][]{
            {1, 3, 10},
            {5, 9, 12},
            {3, 5, 7}
        };
        

       System.out.println(searchMatrix(matrix,13)); 
    }
    
}
