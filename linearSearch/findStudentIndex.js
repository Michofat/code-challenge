function findStudentIndex(students, targetID) {
  for (let i = 0; i < students.length; i++) {
    if (students[i].id === targetID) {
      return `Target is in array position ${i}`;
    }
  }
  return `Target ID ${targetID} does not exist in the array`;
}

console.log(
  findStudentIndex(
    [
      { id: 101, name: "John" },
      { id: 102, name: "Alice" },
      { id: 103, name: "Bob" },
      { id: 104, name: "Emma" },
    ],
    105
  )
);
