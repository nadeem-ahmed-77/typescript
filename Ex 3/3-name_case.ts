// 3. Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.


let myName = "Nadeem ahmed khan";

console.log(myName.toLowerCase());
console.log(myName.toUpperCase());
console.log(myName.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join (' '));


