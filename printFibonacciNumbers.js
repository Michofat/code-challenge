const printFibonacciNumbers = (n) => {
  let fibPrev = 0;
  let fibCurr = 1;

  // Print the first Fibonacci number
  console.log(fibPrev);

  // Print subsequent Fibonacci numbers until reaching or exceeding n
  while (fibCurr <= n) {
    console.log(fibCurr);
    let nextFib = fibPrev + fibCurr;
    fibPrev = fibCurr;
    fibCurr = nextFib;
  }
};

// Example usage:
printFibonacciNumbers(14); // Prints all Fibonacci numbers not exceeding 13
