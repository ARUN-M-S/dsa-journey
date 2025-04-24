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


## 🧮 Search in 2D Matrix (Row-wise Binary Search)
Problem:
You're given a 2D matrix where each row is sorted in ascending order, but columns are not guaranteed to be sorted.
Your task is to determine whether a target value exists in the matrix.

Approach:
Since each row is sorted:

Loop through each row.

If the target lies between the first and last element of that row → apply binary search.

Return true if found.

Java Code:



    public class BinarySearch {
    static int binarySearch(int[] myArray, int key) {
        int low = 0, high = myArray.length - 1;
        while (low <= high) {
            int mid = low + (high - low) / 2;
            if (myArray[mid] == key) return mid;
            else if (myArray[mid] < key) low = mid + 1;
            else high = mid - 1;
        }
        return -1;
    }

    static boolean searchMatrix(int[][] matrix, int target) {
        for (int i = 0; i < matrix.length; i++) {
            // Check if target is within this row's range
            if (target >= matrix[i][0] && target <= matrix[i][matrix[i].length - 1]) {
                int value = binarySearch(matrix[i], target);
                if (value != -1) return true;
            }
        }
        return false;
    }

    public static void main(String[] args) {
        int[][] matrix = {
            {1, 3, 10},
            {5, 9, 12},
            {13, 15, 18}
        };

        System.out.println(searchMatrix(matrix, 9));  // Output: true
    }
    }

Time Complexity:

### Worst case: O(m * log n) where m = number of rows, n = columns per row

### Space Complexity:

O(1) (no extra space used)

## ✅ Max Count of Positive and Negative Numbers
📌 Problem:
Given a sorted integer array nums, return the maximum between the count of positive and negative numbers.
(0 is neither positive nor negative.)

🔍 Approach:
Use Binary Search to find:

Lower bound of the first non-negative number (i.e., index of first >= 0)

Upper bound of the last zero (i.e., index of last <= 0)

The counts:

Negative Count = index of lower bound of 0

Positive Count = total elements - index of upper bound

Return the maximum of both counts

### ⏱️ Time Complexity:
O(log n)

### 🧠 Space Complexity:
O(1)


📄 Java Code:  
[View Java Solution →](./arrays/ArraysSearch/MaximumCountMinAndMax.java)


## ✅ Minimum Common Value in Two Sorted Arrays
📌 Problem:
Given two sorted arrays, find the smallest common element between them.
If no common element exists, return -1.

🔍 Approach:
Use the Two Pointer technique:

Start both pointers at the beginning of each array.

Compare elements:

If equal → return it (as it's the smallest match)

If one is smaller → move that pointer forward

### ⏱️ Time Complexity:
O(n + m) for arrays of length n and m

### 🧠 Space Complexity:
O(1)

## ✅ Guess Number Higher or Lower

📌 **Problem:**  
You are playing a game where you need to guess a number picked by another player between `1` and `n`.  
You get feedback from the API:

- `-1` → Your guess is **higher** than the target  
- `1` → Your guess is **lower** than the target  
- `0` → Your guess is **correct**

---

🔍 **Approach:**

Use **Binary Search** to minimize the number of guesses:

- Start with `low = 1` and `high = n`
- Calculate `mid = low + (high - low) / 2`
- Use the `guess(mid)` API to check:

  - If `0`: You found the number → return `mid`  
  - If `-1`: Target is smaller → move `high = mid - 1`  
  - If `1`: Target is larger → move `low = mid + 1`

Keep looping until found.

---

### ⏱️ **Time Complexity:** O(log n)  
### 🧠 **Space Complexity:** O(1)

---

📄 **Java Code:**  
[🔗 View Java Solution →](./arrays/ArraysSearch/GuessNumber.java)


## 🔁 Find Minimum in Rotated Sorted Array (with Duplicates)
Problem:
You're given a rotated sorted array that may contain duplicates. Your task is to find the minimum element.

Example Input:

int[] arr = {10, 10, 10, 1, 10}; // 🔁 Rotation and duplicates
Expected Output:

1
Approach:

Use binary search.

If arr[low] == arr[mid] == arr[high], it’s ambiguous — safely reduce the range by low++ and high--.

Else:

If arr[mid] > arr[high], minimum lies in the right half.

Otherwise, it lies in the left half (including mid).

📄 **Java Code:**  
 [🔗 FindMinimumInRotatedArrayWithDuplicates.java](./arrays/ArraysSearch/FindMinimumInRotatedArrayWithDuplicates.java)

### Time Complexity:

Worst Case: O(n) — due to duplicates.

### Space Complexity:

O(1) — constant space.


# 🗳️ Moore's Voting Algorithm in Java

This project implements **Moore's Voting Algorithm** in Java to efficiently find the **majority element** (an element that appears more than ⌊n/2⌋ times) in a given integer array.

---

## 🚀 Features

- ✅ Linear time complexity: **O(n)**
- ✅ Constant space complexity: **O(1)**
- ✅ Includes verification step to confirm if the candidate is truly a majority
- 🧠 Based on the classic algorithm by **Boyer and Moore**

---

## 📌 Problem Statement

> Given an array of integers `nums`, find the element that appears more than ⌊n/2⌋ times. If no such element exists, return `-1`.

---

## 📦 Example
📄 **Java Code:**  
 [🔗 FindMinimumInRotatedArrayWithDuplicates.java](./arrays/MooreVotingAlgo.java)


```java
Input:  [1, 1, 2, 2, 3, 1, 2, 3, 2, 3, 3, 2, 2]
Output: -1
```


# 🚀 Singly Linked List Implementation in Java

This project contains a custom implementation of a **Singly Linked List** in Java with basic operations such as insertion, deletion, searching, reversing, and finding the middle element.

---

## 📂 Structure
### Class: `SLList`
Represents a singly linked list with the following features:

---

## ✅ Implemented Operations

### 🔹 `insertAtbegining(int data)`
Inserts a new node with the given data at the beginning of the list.

### 🔹 `insertAtEnd(int data)`
Appends a new node with the given data to the end of the list.

### 🔹 `insertAtPosition(int data, int pos)`
Inserts a new node at the specified position (0-based index). If the position is out of range, it displays a message.

### 🔹 `deleteFromBeginning()`
Deletes the node at the beginning of the list.

### 🔹 `deleteFromEnd()`
Deletes the node at the end of the list.

### 🔹 `deleteFromPostion(int pos)`
Deletes the node at the specified position.

### 🔹 `search(int value)`
Searches the list for a node with the specified value. Returns `true` if found, otherwise `false`.

### 🔹 `reverseList()`
Reverses the entire linked list.

### 🔹 `findMiddle()`
Finds and prints the **middle element** of the list using the **slow-fast pointer approach**.

### 🔹 `printdata()`
Prints the entire linked list in the format:  
`data1 ---> data2 ---> ... ---> null`

---

## 🧪 How to Run

1. Open the project in your IDE or terminal.
2. Run the `SLList` class's `main` method.
3. You can test different operations by uncommenting relevant method calls in the `main()`.

---

## 💻 Example Output
```text
54--->3--->5--->32--->33--->null
5
54--->3--->5--->32--->33--->null
```
🛠️ To Be Implemented
✅ Nth Node from End

✅ Count of Nodes

✅ Detect Loop

✅ Remove Duplicates

✅ Merge Two Sorted Lists

✅ Sort Linked List

✅ Find Intersection Point

📎 Note
This is a beginner-friendly implementation focused on understanding linked list operations step by step. Ideal for practice and interview preparation.


## 📦 Lodash Utilities
This section includes re-implemented Lodash utility functions for learning and mastery.

### [🔹chunk](./lodash-utilities/_chunk.js)


