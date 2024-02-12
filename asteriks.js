// Let’s print a triangle made of asterisks (‘*’) separated by spaces. The triangle
// should consist of n rows, where n is a given positive integer, and consecutive rows should
// contain 1, 2, . . . , n asterisks. For example, for n = 4 the triangle should appear as follows:

const printAsteriks = (n) => {
  for (let i = 1; i <= n; i++) {
    console.log("* ".repeat(i));
  }
};

printAsteriks(10);

//OR
function printTriangle(n) {
  for (let i = 1; i <= n; i++) {
    let row = "";
    for (let k = 0; k < i; k++) {
      row += "* ";
    }
    console.log(row);
  }
}

printTriangle(2);

// Example usage:
printAsteriskTriangle(7);
