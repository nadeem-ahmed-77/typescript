"use strict";
// 15. Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
// • Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.
// • Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.
// • Print a second set of invitation messages, one for each person who is still in your list.
let newInvitation = ['Zubair', 'Wahaj', 'Haider'];
for (let i = 0; i < newInvitation.length; i++) {
    console.log('Dear Mr. ' + newInvitation[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nThank You!\n\n');
}
let absent_guest = 'Zubair';
let new_guest = 'Shahid';
newInvitation[0] = new_guest;
for (let i = 0; i < newInvitation.length; i++) {
    console.log('Dear Mr. ' + newInvitation[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nThank You!\n\n');
}
console.log(`Mr. ${absent_guest} is not coming to the Party.`);
