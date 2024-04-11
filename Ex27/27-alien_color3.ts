// 27. Alien Colors #3: Turn your if-else chain from Exercise 25-24 into an if-else chain.

// • Write three versions of this program, making sure each message is printed for the appropriate color alien.



// • If the alien is green, print a message that the player earned 5 points.
let alien_Color: string = "green";
if(alien_Color === "green"){
    console.log("player just earned 5 points !")
}
else if(alien_Color === "yellow"){
        console.log("player just earned 10 points !")
}
else if(alien_Color === "red"){
console.log("player just earned 5 points !")
}
else {
    console.log("please select the color")
}
// • If the alien is yellow, print a message that the player earned 10 points.
alien_Color = "yellow";
if(alien_Color === "green"){
    console.log("player just earned 5 points !")
}
else if(alien_Color === "yellow"){
        console.log("player just earned 10 points !")
}
else if(alien_Color === "red"){
console.log("player just earned 5 points !")
}
else {
    console.log("please select the color")
}
// • If the alien is red print a message that the player earned 15 points.
alien_Color = "red";
if(alien_Color === "green"){
    console.log("player just earned 5 points !")
}
else if(alien_Color === "yellow"){
        console.log("player just earned 10 points !")
}
else if(alien_Color === "red"){
console.log("player just earned 5 points !")
}
else {
    console.log("please select the color")
}

// when color not defined 
alien_Color = "";
if(alien_Color === "green"){
    console.log("player just earned 5 points !")
}
else if(alien_Color === "yellow"){
        console.log("player just earned 10 points !")
}
else if(alien_Color === "red"){
console.log("player just earned 5 points !")
}
else {
    console.log("please select the color")
}
