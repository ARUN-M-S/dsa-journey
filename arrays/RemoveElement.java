import java.util.Arrays;

public class RemoveElement {

    static void remove(int [] nums,int value){

        int k=0;
        for(int i=0;i<nums.length;i++){
            if(nums[i]!= value){
            nums[k]= nums[i];
            k++;
            }
        }

        System.out.println( Arrays.toString( nums));
    }
    public static void main(String[] args) {
       remove(new int [] {3,2,2,3},3);
    }
}
