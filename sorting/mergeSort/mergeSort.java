import java.sql.ResultSet;
import java.util.Arrays;

public class mergeSort {

    static int[] merge(int[] arr1, int[] arr2) {

        int i = 0;
        int j = 0;
        int[] result = new int[arr1.length + arr2.length];
        int k = 0;
        while (i < arr1.length && j < arr2.length) {
            if (arr1[i] < arr2[j]) {
                result[k++] = arr1[i];
                i++;
            } else {
                result[k++] = arr2[j];
                j++;
            }
        }

        while (i < arr1.length) {
            result[k++] = arr1[i];
            i++;
        }
        while (j < arr2.length) {
            result[k++] = arr2[j];
            j++;
        }
        return result;
    }

    static int[] mergeSortFn(int[] arr) {
        if (arr.length <= 1)
            return arr;

        int mid = arr.length / 2;
        int[] left = new int[mid];
        int[] right = new int[arr.length - mid];

        for (int k = 0; k < left.length; k++) {
            left[k] = arr[k];
        }
        for (int k = 0; k < right.length; k++) {
            right[k] = arr[k + mid];
        }

        int[] result = merge(left, right);
        return result;
    }

    public static void main(String[] args) {

        System.out.println(Arrays.toString(mergeSortFn(new int[] { 1, 2, 5, 6, 3, 8, 4, 7 })));
    }
}
