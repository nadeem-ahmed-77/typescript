
// 45. Cars: Write a function that stores information about a car in a Object.
// The function should always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs, such as a color or an optional feature. 
// Print the Object that’s returned to make sure all the information was stored correctly.


function cars(manufecturer:string, model:number, ...extraoption:{[key:string]:any}[]): object {

    let infoCar = { 
            manufecturer, 
            model, 
            ...Object.assign({}, ...extraoption),
        };
            return infoCar;
    };

let answer = cars('Honda', 2010, { color:'Black'}, { features: ['Navigation', 'Power Staring']})
console.log(answer)

    

    