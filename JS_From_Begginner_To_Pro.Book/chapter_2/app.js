// alert("Connected to the chptr2 playground");


// chapter 2 Playground

let nullToNr = null;
nullToNr = Number(nullToNr);

console.log("null", nullToNr, typeof nullToNr);


let strToNr = "";
strToNr = Number(strToNr);

console.log("Empty string", strToNr, typeof strToNr);

let firstName = "Lasha";
firstName = String(firstName);

console.log("The name -- ", firstName ,  " -- is type of ", typeof firstName,);

//addition

let nr1 = 23;
let nr2 = "9";

console.log(nr1 + Number(nr2),  nr2)


let str1 = "Laurence";
let str2 = 'Svekis';
let val1 = undefined;
let val2 = null;
let myNum = 1000;

console.log(str1, typeof str1);
console.log(str2, "is a ", typeof str2);
console.log(val1, " is a ", typeof val1);
console.log(val2, "is a ", typeof val2);
console.log(myNum, "is a ", typeof myNum );

// Subtraction

let subNum = 23;
let subNum2 = 9;
let str3 = "Hello";
let subNum3 = 3;

let result1 = subNum - subNum2;
let result2 = str3 - subNum3; //We can not subtract a numeric to a string value = NaN


console.log(result1, result2);


//Multiplication
let mult1 = subNum * subNum2;
let mult2 = str3 * subNum3;

console.log("Multiplication example: 23 * 9 =", mult1, mult2); //We can not multipy a numeric to a string value = NaN


//Division 

let divNum = subNum / subNum2
console.log("Division example: 23 / 9 =",divNum); 

// Exponentiation 

let expNum = subNum ** subNum2;
console.log("Exponentiation example: 23 ** 9 = ", expNum);

// Modulus 

let modNum1 = 15;
let modNum2 = 6;

let modRes = modNum1 % modNum2;
console.log("Modulus Example: 15 %% 6 =",modRes)

//unary operators

modNum1++;
modNum1++;
modNum2--;
console.log("Modnum1 was 15 at he start and modnum2 was 6: ",modNum1, modNum2)

//prefix and postfix 

 let nmbr1 = 4;
 let nmbr2 = 5;
 let nmbr3 = 2;
 console.log(nmbr1++ + ++nmbr2 * nmbr3++) //prefix is instant action, postfix will appear in the next action