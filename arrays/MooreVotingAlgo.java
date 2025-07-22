import java.util.HashSet;

public class MooreVotingAlgo {

    static int votingAlgo(int[] nums) {

        int majority = nums[0];
        int vote = 0;
        for (int i = 0; i < nums.length; i++) {
            if (vote == 0) {
                majority = nums[i];
            }
            if (nums[i] == majority) {
                vote++;
            } else {
                vote--;
            }
        }

        int count = 0;

        for (int num : nums) {
            if (num == majority) {
                count++;
            }
        }

        return (count > nums.length / 2) ? majority : -1;
    }

    public static void main(String[] args) {
        int[] nums = { 1, 1, 2, 2, 3, 1, 2, 3, 2, 3, 3, 2, 2 };
        System.out.println(votingAlgo(nums));

    }
}
