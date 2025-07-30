// alert("I am connected to the practice exercise 3.2");

shoppingList = [];
console.log(shoppingList);

shoppingList = ["Milk", "Bread", "Banana"];
console.log(shoppingList);

shoppingList.splice(1, 2,   "Banana", "Eggs");
console.log(shoppingList);

shoppingList.pop();
console.log(shoppingList);

shoppingList.sort();
console.log(shoppingList);

let indexOfMilk = shoppingList.indexOf("Milk");
console.log("Index of Milk in this Array is:",indexOfMilk);

shoppingList.splice(1,0, "Carrots", "Lettuce");
console.log(shoppingList);

newShoppingList = ["Juice", "Pop"];

let unionOfTheShopLists = shoppingList.concat(newShoppingList, newShoppingList);
console.log(unionOfTheShopLists);

let lastIndexValue = unionOfTheShopLists.lastIndexOf("Pop");
console.log("The last index value of the list is:",lastIndexValue);