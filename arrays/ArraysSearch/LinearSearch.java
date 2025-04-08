

public class LinearSearch {

    static int linearSearch(int [] myArr, int target){
        for(int i=0;i<myArr.length ;i++){
            if(myArr[i]==target){
                return  i;
            }
        }
        return -1;
    }
    public static void main(String[] args) {
        int[] arr = {1, 4, 7,5,6,4,7,10,22};
          
        int result = linearSearch(arr, 4);
        System.out.println(result);
        
    }
    
}
