
public class findFirstOccurence {
    public static void main(String[] args) {
        // 1. Create an instance of the Solution class
        Solution solution = new Solution();

        // 2. Define your input strings
        String haystack = "sadbutsad";
        String needle = "sad";
        // 3. Call the method and store the result
        int index = solution.strStr(haystack, needle);

        // 4. Print the output (Expected: 0)
        System.out.println("The needle starts at index: " + index);
    }
}
class  Solution {
    public int strStr(String hay,String needle){
         int j =0;
         for(int i=0;i<hay.length();i++){
             if(hay.charAt(i)==needle.charAt(j)){
             if(j==needle.length()-1){
                 return i-j;
             }
             j++;
            }else{
                i=i-j;
                j=0;
            }
         }

        return -1;
    }
    
}