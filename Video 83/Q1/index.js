let names = [
  "Amit",
  "Rahul",
  "Sneha",
  "Priya",
  "Rohit_rabdy",
  "shravan",
  "anumpama_biswal",
  "amulya_singh",
  "niscay_makad_chdoe",
];

let hosue = [];

for (const student of names) {
  if (student.length < 6) {
    hosue.push("red");
    
  } else if (student.length < 8) {
    hosue.push("blue");
  } else if (student.length < 12) {
    hosue.push("green");
  } else {
    hosue.push("yellow");
  }
}

console.log(hosue);
