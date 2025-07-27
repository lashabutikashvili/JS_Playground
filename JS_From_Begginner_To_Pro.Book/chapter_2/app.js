// alert("Connected to the chptr2 playground");

let nullToNr = null;
nullToNr = Number(nullToNr);

console.log("null", nullToNr, typeof nullToNr);


let strToNr = "";
strToNr = Number(strToNr);

console.log("Empty string", strToNr, typeof strToNr);

let firstName = "Lasha";
firstName = String(firstName);

console.log("The name -- ", firstName ,  " -- is type of ", typeof firstName,);


let nr1 = 2;
let nr2 = "2";

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

