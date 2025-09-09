//console.log(2 > 1);


console.log(2 > "1");
console.log("2" > 1);
console.log("02" > 1);

console.log(null > 0);  //false //null converted to 0
console.log(null == 0); //false // null not converted to 0
console.log(null >= 0); // true // null converted to 0

console.log(null < 0);


//undefined gives comparison false only
console.log(undefined > 0);
console.log(undefined == 0);
console.log(undefined >= 0);

// strict check is done by === (value as well as data type)


