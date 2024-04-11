// 17. Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.

// • Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.

// • Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.

// • Print a message to each of the two people still on your list, letting them know they’re still invited.

// • Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.


let newInvitation :string[] = ['Zubair', 'Wahaj', 'Haider'];
// for (let i=0; i<newInvitation.length; i++){
//     console.log('Dear Mr. ' + newInvitation[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nThank You!\n\n')
// }

let absent_guest :string = 'Zubair' ;
let new_guest :string = 'Shahid' ;
newInvitation[0] = new_guest ;

// for(let i=0; i<newInvitation.length; i++){
// console.log('Dear Mr. ' + newInvitation[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nThank You!\n\n')
// }

console.log(`Mr. ${absent_guest} is not coming to the Party.`);
console.log("Good News! We find big table so we are inviting 3 more gurests.")

// yahan per array main 3 guest add kiye hain. 

newInvitation.unshift("Zia Khan");
newInvitation.splice(2 , 0 , 'Asim');
newInvitation.push('Shazad Khan');

// yahan per main nay 6 array ko print kraya he.
    for(let i=0; i<newInvitation.length; i++){
    console.log('Dear Mr. ' + newInvitation[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nThank You!\n\n')
    }

    console.log('Sorry we can not arrage big table, only two people will be invited.');

// yahan per guest remove kiye hain.
    while(newInvitation.length> 2) {

        let remove_guest = newInvitation.pop();
        console.log(`Sorry Mr. ${remove_guest}, You are not nvited for Dinner.`);
    } 

    // hamare bache howe 2 invited guest.
    for(let i=0; i<newInvitation.length; i++){
        console.log('Dear Mr. ' + newInvitation[i] + ', \n\nYou are still invited.\n\nThank You!\n\n.'); 
    }
    // yahan per sare guest array se remove kar diye.
    newInvitation.splice(0,2);
    console.log(newInvitation);