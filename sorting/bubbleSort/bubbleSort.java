import java.util.Arrays;

public class bubbleSort {

    static void bubbleSortFunction(int[] arr){

    for(int i=arr.length;i>0;i--){
        Boolean alredySorted = true;
        for(int j=0;j<i-1;j++){
          
            if(arr[j] >arr[j+1]){
                int temp= arr[j];
                arr[j]=arr[j+1];
                arr[j+1]=temp;
                alredySorted= false;
            }
            System.out.println(Arrays.toString(arr)   +" One iteration Completed");
        }
        if(alredySorted) break;
        // System.out.println(Arrays.toString(arr)   +" One iteration Completed");
    }

    System.out.println(Arrays.toString(arr)   + " after");
    }

    public static void main(String[] args) {
        int [] arr = {1,4,2,9,23,6,7,90,22,66,77};
        bubbleSortFunction(arr);
    }
    
}
