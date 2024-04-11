"use strict";
// 24. More Conditional Tests: You don’t have to limit the number of
// tests you create to 10. If you want to try more comparisons, 
//  write more tests. Have at least one True and one False result 
//  for each of the following:
// Test for equality and inequality with strings
console.log("euqality test with string ", 'apples' === 'apples');
console.log("inquality test with stirng ", 'apples' != 'mangoes');
// Tests using the lower case function
console.log("lower case function", 'HELLO'.toLowerCase() == 'hello');
console.log("lower case function", ('HELLO') != 'hello');
// Numerical tests involving equality and inequality, 
console.log("euqality test with number ", 50 === 50);
console.log("ineuqality test with number ", 50 != 10);
// greater than test with equlaity 
console.log("greater than test with number (euqality) ", 50 > 10);
// less than test with equlaity and in equality 
console.log("less than test with number (equality) ", 50 < 100);
console.log("less than test with number (inequality) ", 100 != 50);
// greater than or equal to, and less than or equal to// 
console.log("greater than or equal test with number  ", 100 >= 50);
console.log("less than or equal test with number  ", 50 <= 60);
// • Tests using "and" and "or" operators
console.log("test with and operator", 50 === 50 && 60 > 50);
console.log("test with or operator", 50 === 50 || 60 > 50);
// • Test whether an item is in a array
let arrayFruits = ['Mango', 'Apple', 'Banana', 'Papaya'];
console.log("test item is in a array", arrayFruits.includes('Banana'));
// • Test whether an item is not in a array
console.log("test item is not in a array", !arrayFruits.includes('Orange'));
