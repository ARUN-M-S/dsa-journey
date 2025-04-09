
public class BinarySearchRCSortedMatrix {
    static boolean searchMatrix(int[][] matrix, int target) {
        int row = matrix.length;
        int column = matrix[0].length;
        int i=0; int j=column-1;;

        while(i<row && j>=0){
            if(matrix[i][j]==target){
                return true;
            }
           else if(matrix[i][j] <target){
                i++;

            }else{
                j--;
            }
        }
        return false;
        
    }
    public static void main(String[] args) {
        
    }
}
