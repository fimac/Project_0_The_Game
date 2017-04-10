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
// Track placement of tokens.
  //How do I know if 3 of the same token are matched in the same line?
    // Total of 8 configs, 3 horizontal, 3 vertical, 2 diagonal
    // Vertical Combo wins
    // 1, 7 & 4
    // 2, 5 & 8
    // 3, 6 & 9
    //Horizontal Combo wins
    // 1, 2 & 3
    // 4, 5 & 6
    // 7, 8 & 9
    //Diagonal wins
    //3, 5 & 7
    //1, 5 & 9
    //There would need to be a condition that would check each time if any of these matched
    //If it does, then win theme
// If a token flipped on a square, it can only happen once, it can't be flipped again (i could use that click once jquery thing)
  // Switch from player one to player two (?? I need to work this out)
    //

//Presentation

//I need a large square to represent the game board
// Then 9 squares that will sit inside
// Heading
// holding theme, until start button is pushed
// Start button
// Tokens/players
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

//When a square is clicked, it flips to show either trump or clinton depending on who clicks it
  //I need to be able to set this up so it knows wether it is player one or player two clicking
    //This then need to keep a register of where that has been clicked
      //And if there are 3 in a row, then trigger the win theme for that player
//When 3 in a row match, then theme change indicating there's a win, music playing, background change


//Animate the start button, with a hover type animation

//click on any square to show an image not hard coded, set a variable
//to make a condition that will log the image as either trump or clinton
  //If player one has click event on square, then show clinton jpg
    //If player two has click event on square, then show trump jpg

//Below function will switch between player 1 & 2
//Declare undefined variable
// Once player 1 finishes variable changes to 2, once player 2 finishes, variable goes back to 1
var player;
$square = $(".square");
$square.one("click", function (){ //I only want the square clickable once.
  if (player === 1) {
      $(this).css({ //When clicked set square css to image clinton
      backgroundImage : "url(images/clintonTwo.jpg)",
      backgroundSize : "100%"
    });
    $(this).addClass("playerOne"); //add the class player one. Testing this as a marker to check who has square
    player = 2; //update variable to 2, so to switch to player 2
  } else {
      $(this).css({ //when clicked set square css to trump
      backgroundImage : "url(images/trump.jpg)",
      backgroundSize : "100%"
    });
    $(this).addClass("playerTwo"); //add the class playerTwo. Testing this as marker to use to verify ones
    player = 1;
  }
});

//Can i add another click function, this will be for checking for wins.
  //above is function to update square values

//FUNCTION TO CHECK FOR WINS
var $classOne = $(this).hasClass("playerOne");
var $classTwo = $(this).hasClass("playerTwo");

var checkWin = function () {
  if ()
};



//Then a function would need to be run to check if the condition of a match to be true
  //If it is return win theme
    // If not continue play
// When the square is clicked, an additional marker needs to be added so that
// the game can keep track of player 1 tiles vs player 2 tiles

//what value will determine a win, how does it know if 3 are in a row
  //How do I capture the value of the square
    //If that equals the next 2 horizontally or vertically or diagonally log winner

  // $square.each( function (index, domNode) {
  //   console.log(this === domNode);
  //   console.log($(this).getClass);
  // });


    // //you've got a whole bunch of paragraphs, i want to loop through them and update
    // // i is the same as index.
    // // domNode can be called anything, jQuery will assume that is the current node you want
    // //
    // $allLorems.each( function ( index, domNode ) {
    //   console.log( this === domNode ); //this is true
    //   $(this).css( "opacity", Math.random() );
    //   $(this).html( "Paragraph: " + index );













































});
