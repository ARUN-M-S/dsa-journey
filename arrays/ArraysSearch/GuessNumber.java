
public class GuessNumber {

    static int guessNumber(int n) {
        int low = 0, high = n;
        while (low <= high) {
            int mid = low + (high - low) / 2;
            int value = guess(mid);
            if (value == 0) return mid;
            else if (value == -1) high = mid - 1;
            else low = mid + 1;
        }
        return low;
    }
  public static void main(String[] args) {
   int n =10;
      int result = guessNumber(n);
    
  }  
}
