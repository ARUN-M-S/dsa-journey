import java.util.Arrays;

public class insertionSort {

    static void insertionSortFn(int[] arr) {

        for (int i = 1; i < arr.length; i++) {
            int current = arr[i];
            int j;
            for (j = i - 1; j >= 0 && arr[j] > current; j--) {
                arr[j + 1] = arr[j];
            }
            if (j + 1 != i) {
                arr[j + 1] = current;
            }

        }
        System.out.println(Arrays.toString(arr));
    }

    public static void main(String[] args) {
        insertionSortFn(new int[] { 2, 1, 9, 76, 4 });
    }
}
