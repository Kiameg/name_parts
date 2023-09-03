// We make a variable with a string
// We need to split the string into three variables
// Then we need to console log the three variables
const name = "Peter Heronimous Lind";
// We make a variable called words, with an array of variable'name'
// We use the method split to split the string
// split(" ") this method creates a split for each space thats in the string

const words = name.split(" ");
const firstName = words[0];
const middleName = words[1];
const lastName = words[2];
console.log(firstName, middleName, lastName);
