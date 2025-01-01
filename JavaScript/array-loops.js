const myArray = [
    10,
    20,
    30
];
console.log(myArray);
myArray[1]=99;
console.log(myArray[1]);

myArray.push(100);
console.log(myArray);

myArray.splice(1,2);
console.log(myArray);