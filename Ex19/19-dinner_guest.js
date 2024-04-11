"use strict";
// 19. Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number of people you are inviting to dinner
let newInvitation = ['Zubair', 'Wahaj', 'Haider'];
// for (let i=0; i<newInvitation.length; i++){
//     console.log('Dear Mr. ' + newInvitation[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nThank You!\n\n')
// }
let absent_guest = 'Zubair';
let new_guest = 'Shahid';
newInvitation[0] = new_guest;
// for(let i=0; i<newInvitation.length; i++){
// console.log('Dear Mr. ' + newInvitation[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nThank You!\n\n')
// }
// console.log(`Mr. ${absent_guest} is not coming to the Party.`);
// console.log("Good News! We find big table so we are inviting 3 more gurests.")
// yahan per array main 3 guest add kiye hain. 
newInvitation.unshift("Zia Khan");
newInvitation.splice(2, 0, 'Asim');
newInvitation.push('Shazad Khan');
// yahan per main nay 6 array ko print kraya he.
// for(let i=0; i<newInvitation.length; i++){
// console.log('Dear Mr. ' + newInvitation[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nThank You!\n\n')
// }
// console.log('Sorry we can not arrage big table, only two people will be invited.');
// yahan per guest remove kiye hain.
while (newInvitation.length > 2) {
    let remove_guest = newInvitation.pop();
    // console.log(`Sorry Mr. ${remove_guest}, You are not nvited for Dinner.`);
}
// hamare bache howe 2 invited guest.
// for(let i=0; i<newInvitation.length; i++){
//     console.log('Dear Mr. ' + newInvitation[i] + ', \n\nYou are still invited.\n\nThank You!\n\n.'); 
// }
// yahan per sare guest array se remove kar diye.
newInvitation.splice(0, 2);
console.log(newInvitation);
console.log(`Total number of guest are: ${newInvitation.length}`);
