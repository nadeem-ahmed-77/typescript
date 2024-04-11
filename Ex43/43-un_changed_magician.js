"use strict";
// 43. Unchanged Magicians: Start with your work from Exercise 42. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array.
// Call show_magicians()  with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.
let magician = ['Javed maigician', 'city migician', 'Maroof Magician', 'Rauf Magician'];
function copyArry(array) {
    return [...array];
}
function make_great(copy) {
    for (let i = 0; i < copy.length; i++) {
        console.log('The Great ' + copy[i]);
    }
}
function show_magician(magician) {
    for (let i = 0; i < magician.length; i++) {
        console.log(magician[i]);
    }
}
const copy = copyArry(magician);
console.log('\nThis is my modified Array');
make_great(copy);
console.log('\nThis is my original Array');
show_magician(magician);
