import java.util.Arrays;

public class selectionSort {

    static void selectionSortFn(int[] arr) {
        for (int i = 0; i < arr.length; i++) {
            int minimun = i;
            for (int j = i+1; j < arr.length; j++) {
                if (arr[j] < arr[minimun]) {
                    minimun = j;
                }
            }

            int temp = arr[i];
            arr[i] = arr[minimun];
            arr[minimun] = temp;
            System.out.println(Arrays.toString(arr)  + " one iteration");
        }
    }

    public static void main(String[] args) {
        selectionSortFn(new int[]{2,5,7,1,3,34,55,22,54,21,5,7});
    }
}
