"use strict";
// 25. Alien Colors #1: Imagine an alien was just shot down in a game. Create a variable called alien_color and assign it a value of 'green', 'yellow', or 'red'.
// • Write an if statement to test whether the alien’s color is green. If it is, print a message that the player just earned 5 points.
// • Write one version of this program that passes the if test and another that fails. (The version that fails will have no output.)
// a variable alien_color which value is green 
let alien_Color = "green";
if (alien_Color === "green") {
    console.log("player just earned 5 points !");
}
// a variable alien_color value change with color yellow 
alien_Color = "yellow";
// now if condition as same  
if (alien_Color === "green")
    console.log("player just earned 5 points !");
