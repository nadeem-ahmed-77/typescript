// 21. They think of something you could store in a TypeScript Object.
//  Write a program that creates Objects containing these items.

// this veriable is string type. 
let myName : string = 'Nadeem Ahmed';
// print my name 
console.log(myName);

// this variable is string in arrays 
let arrayCities: string[] = ['Karachi', 'Islamabad', 'Multan', 'Sukkur', 'Lahore'];
console.log(arrayCities);


// let create some object in typescript.

interface person {
    age : number,
    name : string,
    class : number,
    student : boolean, 

}
let person : person = {
    age : 40,
    name : 'Adnan',
    class : 12,
    student : true 
}

console.log(person);

