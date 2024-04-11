"use strict";
// 42. Great Magicians: Start with a copy of your program from Exercise 41.
// Write a function called make_great() that modifies the array of magician by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.
let magician = ['Javed maigician', 'city migician', 'Maroof Magician', 'Rauf Magician'];
function make_great(magic) {
    for (let i = 0; i < magic.length; i++) {
        console.log('The Great ' + magic[i]);
    }
}
function show_magician(magician) {
    for (let i = 0; i < magician.length; i++) {
        console.log(magician[i]);
    }
}
make_great(magician);
show_magician(magician);
