"use strict";
// 44. Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time.
function sandwiches(item) {
    console.log('making your sandwich with:\n');
    item.forEach(element => console.log(element));
    // for (let i=0; i<item.length; i++) /ye same code ha, uper forEach kay barabar 
    //     console.log(item[i])
    console.log('\nenjoy the sandwiches\n');
}
sandwiches(['peanut', 'butter', 'chicken']);
sandwiches(['chilli', 'egg', 'mayo']);
sandwiches(['jelly', 'chees']);
