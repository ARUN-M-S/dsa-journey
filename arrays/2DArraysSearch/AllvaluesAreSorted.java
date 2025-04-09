import java.util.Arrays;

public class AllvaluesAreSorted {

    static int binarySearch(int[] myArray, int key) {
        int low = 0;
        int high = myArray.length - 1;

        while (low <= high) {
            int mid = low + (high - low) / 2;
            if (myArray[mid] == key) {
                return mid;
            } else if (myArray[mid] < key) {
                low = mid + 1;
            } else {
                high = mid - 1;
            }

        }

        return -1;
    }

    static int[] searchMatrix(int[][] matrix, int target) {
        int minRow = 0;
        int maxRow = matrix.length - 1;
        int column = matrix[0].length - 1;
       

        while (minRow < maxRow) {
            int midRow = minRow + (maxRow- minRow) / 2;

            if (matrix[midRow][0] <= target && target <= matrix[midRow][column]) {
                int value = binarySearch(matrix[midRow], target);
                if (value != -1) {
                    return new int[] { midRow, value };
                }
            } else if(matrix[midRow][column] <target) {
               minRow = midRow+1;

            }else{
                maxRow = midRow-1;
            }
        }
        return new int[] { -1, -1 };
    }

    public static void main(String[] args) {
        int [][]   matrix = new int[][]{
            {1, 3, 10},
            {15, 19, 21},
            {23,25, 27}
        };
        

       System.out.println(Arrays.toString( searchMatrix(matrix,15))); 
    }
}
