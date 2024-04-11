// 37. Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.



function make_Shirt(size:string = 'large', text:string = 'I love TypeScript'){

    console.log(`printing  a ${size} T-shirt with the message ${text}:`);
}
 
make_Shirt();
make_Shirt('Medium');
make_Shirt('Small', 'I love Computer');

    