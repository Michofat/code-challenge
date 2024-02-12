const countDigits = (n) => {
  // Initialize a variable to count the digits
  let digitCount = 0;

  // Keep dividing n by 10 until it becomes 0
  while (n !== 0) {
    n = Math.floor(n / 10); // Divide n by 10 and round down
    digitCount++; // Increment the digit count
  }

  // Return the number of digits
  return digitCount;
};

// Example usage:
console.log(countDigits(123)); // Output: 3 (1, 2, 3)
console.log(countDigits(456789)); // Output: 6 (4, 5, 6, 7, 8, 9)
