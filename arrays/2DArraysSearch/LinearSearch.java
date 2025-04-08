import java.util.Arrays;

public class LinearSearch {


    static int[] LinearSearch(int[][] myArray, int key){
        int row= myArray.length;
        int column = myArray[0].length;

        for(int i=0;i<row;i++){
            for(int j=0;j<column;j++){
                if(myArray[i][j] ==key){
                    return new int[]{i,j};
                }
            }
        }

        return new int []{-1,-1};

    }
    public static void main(String[] args) {
        int[][] arr = {
            {1, 4, 7},
            {8, 9, 10},
            {12, 13, 15}
        };
        
        int[] result = LinearSearch(arr, 33);
        System.out.println(Arrays.toString(result));
    }
    
}
