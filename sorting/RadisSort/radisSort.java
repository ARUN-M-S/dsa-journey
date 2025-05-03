
public class radisSort {

    static int getDigit(int num,int i){
        return (Math.abs(num)/(int) Math.pow(10, i))%10;
    }
    static int getCount(int num){
        return (int) (Math.log10(Math.abs(num)) )+1;
    }

    static int getMaxCount(int[] arr){
        if(arr.length==0) return 0;

    int maxCount =0;
    for(int i=0;i<arr.length;i++){
        maxCount = Math.max(maxCount, getCount(arr[i]));
    }
    return maxCount;
    }


    static int[] radisSort(int[] arr){
        int maxDigitLength = getMaxCount(arr);

        for(int k=0;k<maxDigitLength;k++){

            // for()
        }
        return new int[]{};
    }
    public static void main(String[] args) {
        
    }
}
