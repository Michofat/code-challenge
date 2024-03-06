const days = {
  mon: "Monday",
  tue: "Tuesday",
  wed: "Wednesday",
  thu: "Thursday",
  fri: "Friday",
  sat: "Saturday",
  sun: "Sunday",
};

// Iterate over each key in the object
for (let day in days) {
  // Print the key (abbreviated day) and its corresponding value (full name)
  console.log(day + " stands for " + days[day]);
}

// Iterate over each key-value pair in the object
for (const [abbreviatedDay, fullName] of Object.entries(days)) {
  // Print the abbreviated day and its corresponding full name
  console.log(`${abbreviatedDay} stands for ${fullName}`);
}
