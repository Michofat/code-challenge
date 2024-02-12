const printSymmetricalAsteriskTriangle = (n) => {
  // Iterate over each row
  for (let i = n; i >= 1; i--) {
    let row = "";

    // Add indentation (spaces)
    for (let j = 0; j < n - i; j++) {
      row += "  ";
    }

    // Add asterisks
    for (let k = 1; k <= 2 * i - 1; k++) {
      row += "*";
      if (k < 2 * i - 1) {
        // Add space after each asterisk except the last one in the row
        row += " ";
      }
    }

    // Print the row
    console.log(row);
  }
};

// Example usage:
printSymmetricalAsteriskTriangle(4);
