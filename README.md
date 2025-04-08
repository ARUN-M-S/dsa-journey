📘 DSA Journey
Welcome to my Data Structures and Algorithms Journey 🚀
This repository contains hand-picked problems from platforms like LeetCode, solved with clarity and efficiency. Each problem includes:

✅ Java code

📊 Time and Space complexity

🧠 Explanation and patterns used

✅ Completed Topics
🔍 Linear Search
📌 Linear Search in 2D Array
Problem:
Find the coordinates of a given key in a 2D array using linear search. Return [-1, -1] if not found.

Java Code:

java
Copy
Edit
static int[] LinearSearch(int[][] myArray, int key) {
    int row = myArray.length;
    int column = myArray[0].length;

    for (int i = 0; i < row; i++) {
        for (int j = 0; j < column; j++) {
            if (myArray[i][j] == key) {
                return new int[]{i, j};
            }
        }
    }
    return new int[]{-1, -1};
}
Example:

int[][] arr = {
    {1, 4, 7},
    {8, 9, 10},
    {12, 13, 15}
};

int[] result = LinearSearch(arr, 9);
// Output: [1, 1]
Time Complexity: O(n × m)
Space Complexity: O(1)

