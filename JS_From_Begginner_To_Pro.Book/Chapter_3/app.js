// Array methods

// Adding and replacing elements in to the array 

fruits = ["grapes", "orange", "lemon"];
console.log(fruits)

fruits.push("tangerine");
console.log(fruits);

let fruitsLength = fruits.length;
console.log("The length of the fruits Array is: ",fruitsLength);

fruits.splice(2, 0, "Strawberry", "Watermelon", "cherry", "pear");
console.log("We added 2 new frutits via splice in the array after third fruit. Now show the while array: ", fruits)

fruits2 = ["apples", "kiwi"];

allFruits = fruits.concat(fruits2);
console.log(allFruits);

// allFruits.pop();
// allFruits.shift();

allFruits.splice(1,3);
console.log(allFruits);

// Multidimensional arrays

arr1 = [1,2,3];
arr2 = [4,5,6];
arr3 = [7,8,9];

console.log(arr1, arr2,arr3);

let multiDimensionalArr4 = [arr1, arr2, arr3];
console.log(multiDimensionalArr4);
console.log(multiDimensionalArr4[1] [0]);
