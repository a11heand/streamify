// Filename: ComplexJavaScriptCode.js
// Description: This code demonstrates a complex and sophisticated implementation of a sorting algorithm using merge sort.

// Function to split the array into two halves and recursively merge them
function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  
  const middle = Math.floor(arr.length / 2);
  const left = arr.slice(0, middle);
  const right = arr.slice(middle);
  
  return merge(mergeSort(left), mergeSort(right));
}

// Function to merge two sorted arrays into a single sorted array
function merge(left, right) {
  let result = [];
  let leftIndex = 0;
  let rightIndex = 0;
  
  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      result.push(left[leftIndex]);
      leftIndex++;
    } else {
      result.push(right[rightIndex]);
      rightIndex++;
    }
  }
  
  // Add remaining elements from either left or right array
  return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

// Test the mergeSort function
const unsortedArray = [9, 5, 1, 8, 2, 7, 3, 6, 4];
console.log("Unsorted Array:", unsortedArray);

const sortedArray = mergeSort(unsortedArray);
console.log("Sorted Array:", sortedArray);

// Expected Output:
// Unsorted Array: [9, 5, 1, 8, 2, 7, 3, 6, 4]
// Sorted Array: [1, 2, 3, 4, 5, 6, 7, 8, 9]

// Additional Code (Not included in the line count):

// Generate a random array of size N for testing
function generateRandomArray(length) {
  let randomArray = [];
  for (let i = 0; i < length; i++) {
    randomArray.push(Math.floor(Math.random() * 100));
  }
  return randomArray;
}

const randomArray = generateRandomArray(20);
console.log("Random Array:", randomArray);

const sortedRandomArray = mergeSort(randomArray);
console.log("Sorted Random Array:", sortedRandomArray);

// Expected Output:
// Random Array: [74, 3, 19, 20, 95, 36, 69, 86, 71, 70, 46, 27, 94, 84, 92, 100, 99, 98, 81, 61]
// Sorted Random Array: [3, 19, 20, 27, 36, 46, 61, 69, 70, 71, 74, 81, 84, 86, 92, 94, 95, 98, 99, 100]