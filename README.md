# 📘 DSA Journey

Welcome to my **Data Structures and Algorithms Journey** 🚀  
This repository contains hand-picked problems from platforms like **LeetCode**, solved with clarity and efficiency.

## 📌 What's Inside?

Each folder focuses on a specific topic or pattern, and contains:
- ✅ Clean Java implementations  
- ✅ Problem statement and approach (in comments or markdown)  
- ✅ Code optimized for readability and performance

## 🧠 Topics Covered So Far

- 🔍 **Linear Search**  
- 🔎 **Binary Search**  
- 📈 **Search in Rotated Sorted Arrays**  
- 🔁 **2D Matrix Search**

## 🔄 Upcoming Patterns

- 🎯 Two Pointers  
- 📏 Sliding Window  
- 📊 Prefix Sum  
- 🔁 Binary Search on Answer  
- 🧩 Bit Manipulation  


✅ Java code

📊 Time and Space complexity

🧠 Explanation and patterns used

Problem:
# Find the coordinates of a given key in a 2D array using linear search. Return [-1, -1] if not found.
Java Code:

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

