"use strict";
// 16. More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
// • Add one new guest to the beginning of your array.
// • Add one new guest to the middle of your array.
// • Use append() to add one new guest to the end of your list.
// • Print a new set of invitation messages, one for each person in your list.
let newInvitation = ['Zubair', 'Wahaj', 'Haider'];
// for (let i=0; i<newInvitation.length; i++){
//     console.log('Dear Mr. ' + newInvitation[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nThank You!\n\n')
// }
let absent_guest = 'Zubair';
let new_guest = 'Shahid';
newInvitation[0] = new_guest;
for (let i = 0; i < newInvitation.length; i++) {
    console.log('Dear Mr. ' + newInvitation[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nThank You!\n\n');
}
console.log(`Mr. ${absent_guest} is not coming to the Party.`);
console.log("Good News! We find big table so we are inviting 3 more gurests.");
newInvitation.unshift("Zia Khan");
newInvitation.splice(2, 0, 'Asim');
newInvitation.push('Shazad Khan');
for (let i = 0; i < newInvitation.length; i++) {
    console.log('Dear Mr. ' + newInvitation[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nThank You!\n\n');
}
