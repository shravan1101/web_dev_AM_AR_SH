let random = Math.random();
let frist, secound, thrid;

if (random < 0.33) {
  frist = "Crazy";
} else if (random < 0.66) {
  frist = "Awesome";
} else {
  frist = "Funny";
}

if (random < 0.33) {
  frist = "Crazy";
} else if (random < 0.66) {
  frist = "Awesome";
} else {
  frist = "Funny";
}

if (random < 0.33) {
  thrid = "Crazy";
} else if (random < 0.66) {
  thrid = "Awesome";
} else {
  thrid = "Funny";
}

console.log(frist, secound, thrid);
