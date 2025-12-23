let obj = {
  a: 1,
  b: "shravan",
};

console.log(obj);

let animal = {
  eats: true,
};

let rabbit = {
  jumps: true,
};

rabbit.__proto__ = animal; // sets animal as the prototype of rabbit it inherits from animal

//__proto__ is a historical getter/setter for [[Prototype]] --- avoid using it now
// rabbit.eats; // true --- inherited from animal
console.log(rabbit.eats);
