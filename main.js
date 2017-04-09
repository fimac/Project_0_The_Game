$(document).ready(function () {
console.log("js is working");

// Technical Requirements
//
// Your app must:
//
// Render a game board in the browser
// Switch turns between X and O (or whichever markers you select)
// Visually display which side won if a player gets three in a row or show a draw/"cat’s game" if neither wins
// Include separate HTML / CSS / JavaScript files
// Stick with KISS (Keep It Simple Stupid) and DRY (Don't Repeat Yourself) principles
// Use Javascript for DOM manipulation
// Deploy your game online, where the rest of the world can access it
// Use semantic markup for HTML and CSS (adhere to best practices)

/////////////////CLINTON VS TRUMP///////////////////////
//Data
// Track placement of tokens (xpos, ypos)
  //How do I know if 3 of the same token are matched in the same line?
    // Total of 8 configs, 3 horizontal, 3 vertical, 2 diagonal
// If a token is placed on a square, no other token can go on top, it can't be moved
  // Switch from player one to player two

//Presentation

//I need a large square to represent the game board
// Then 9 squares that will sit inside
// Heading
// Start button
// Tokens
    // 5x clinton face 5 x trump face
//When matched, a win theme (music, background change)
  // Name of player + WINS! (a button to replay)

//Style
// Heading = american colors (blue, white, red)
// Background = white house
// Gameboard = white stars on blue background
  //separated by red lines
//Tokens, trump and clinton faces
//Start button

//DOM manipulation
//When mouse goes over tokens, they move (increase in size slightly, giving the indication to click and drag)
//When mouse down on token it picks the token up, will use xpos and ypos to follow the mouse, then mouse up will
//drop the token in the square

//When 3 in a row match, then theme change indicating there's a win, music playing, background change

//Animate the start button, with a hover type animation









































});
