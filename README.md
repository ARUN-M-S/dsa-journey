# 📘 DSA Journey


Welcome to my Data Structures and Algorithms Journey 🚀

This repository contains hand-picked problems from platforms like LeetCode, solved with clarity and efficiency.

# 📌 What's Inside?
Each folder focuses on a specific topic or pattern and contains:

✅ Clean Java implementations
✅ Problem statement and approach (in comments or markdown)
✅ Code optimized for readability and performance

# 🧠 Topics Covered So Far
🔍 Linear Search (1D & 2D)

🔎 Binary Search

📈 Search in Rotated Sorted Arrays

🔁 2D Matrix Search

# 🔄 Upcoming Patterns
🎯 Two Pointers

📏 Sliding Window

📊 Prefix Sum

🔁 Binary Search on Answer

🧩 Bit Manipulation

✅ Implemented Algorithms  

## 🔹 1D Linear Search
Problem:
Find the index of a given key in a 1D array using Linear Search. Return -1 if not found.

Java Code:

    static int linearSearch(int[] myArr, int target) {
       for (int i = 0; i < myArr.length; i++) {
        if (myArr[i] == target) {
            return i;
        }
    }
    return -1;
    }


Example:
  
int[] arr = {1, 4, 7, 5, 6, 4, 7, 10, 22};
int result = linearSearch(arr, 4);  // Output: 1 (first occurrence)

### Time Complexity: O(n)
### Space Complexity: O(1)

## 🔹 2D Linear Search

Problem:

Find the coordinates of a given key in a 2D array using linear search. Return [-1, -1] if not found.

Java Code:


   
    static int[] linearSearch(int[][] myArray, int key) {
    
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


## 🔎 Binary Search

Problem:
Given a sorted array, find the index of a target element using Binary Search. Return -1 if the target is not found.

Java Code:    

    static int binarySearch(int[] myArray, int key) {
    int low = 0;
    int high = myArray.length - 1;
    while (low <= high) {
        int mid = low + (high - low) / 2;

        if (myArray[mid] == key) {
            return mid;
        } else if (myArray[mid] < key) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }
    return -1;
    }

Example:

int[] arr = {1, 3, 4, 6, 7, 8, 9, 12, 13, 33, 44, 45, 65, 78, 90};
int result = binarySearch(arr, 12); // Output: 7

### 🧠 Time Complexity: O(log n)
### 🧠 Space Complexity: O(1)


## 🔄 Binary Search in Rotated Sorted Array

Problem:

Given a rotated sorted array and a target element, return the index if the target is found. If not, return -1.

Approach:
Use modified binary search to determine which half of the array is sorted. Then decide whether the target lies within the sorted half or the unsorted one.

Java Code:

    
    public class BinarySearchOnRotatedArray {
     static int BinarySearch(int[] myArr, int key) {
    int low = 0;
    int high = myArr.length - 1;
        while (low <= high) {
            int mid = low + (high - low) / 2;

            if (myArr[mid] == key) return mid;

            if (myArr[low] <= myArr[mid]) { // Left side is sorted
                if (key >= myArr[low] && key <= myArr[mid]) {
                    high = mid - 1;
                } else {
                    low = mid + 1;
                }
            } else { // Right side is sorted
                if (key >= myArr[mid] && key <= myArr[high]) {
                    low = mid + 1;
                } else {
                    high = mid - 1;
                }
            }
        }

        return -1;
    }

    public static void main(String[] args) {
        int[] arr = {6, 7, 8, 1, 2, 3, 4, 5};
        int result = BinarySearch(arr, 99);
        System.out.println(result); // Output: -1
    }
    }



int[] result = linearSearch(arr, 9);  // Output: [1, 1]
### Time Complexity: O(n × m)
### Space Complexity: O(1)

