let arr = [1, 2, 3, 4, 5];
//index:  0 1 2 3 4
console.log(arr);
console.log(arr.length);
arr[0] = 10;
console.log(arr);
console.log(typeof arr);

// you can store any type of data in array ;
let arr2 = [1, "shravan", true, undefined, null];
console.log(arr2);

console.log(arr);
console.log("xxxx");
console.log(arr.toString());

console.log(arr.join(" - ")); // it will join all the elements with - in between ;

console.log(arr.pop()); // it will remove last element from array and return that element ;
console.log(arr);   

console.log(arr.push(6)); // it will add element at last and return new length of array ;
console.log(arr);   // its also return the new length of array ;


console.log(arr.shift()); // it will remove first element from array and return that element ;
console.log(arr); 


console.log(arr.unshift(1)); // it will add element at first and return new length of array ;
console.log(arr);   

delete arr[0]; // it will delete the element but will not change the length of array ;
console.log(arr);
console.log(arr.length);

let a1 = [1, 2, 3, 4, 5];
let a2 = [6, 7, 8, 9, 10];          
let a3 = a1.concat(a2); // it will concatenate two arrays and return new array ;
console.log(a3);   

// sort function ;
let a4 = [3, 5, 1, 4, 2];
a4.sort();
console.log(a4); // it will sort the array in ascending order ;

a4.reverse();
console.log(a4); // it will reverse the array ;     

//slice function ;
let a5 = [1, 2, 3, 4, 5];
let a6 = a5.slice(4);
console.log(a6); // it will return new array from index 4 to end ;
let a12 = a5.slice(1, 4);
console.log(a12); // it will return new array from index 1 to 3 (4-1)

//splice function ;
let a7 = [1, 2, 3, 4, 5];
a7.splice(1,2); // it will remove 2 elements from index 1
console.log(a7);
let numbers = [1, 2, 3, 4, 5];
numbers.splice(1,3,12,12,12); // it will remove 3 elements from index 1 and add 12,12,12 at index 1
console.log(numbers);
