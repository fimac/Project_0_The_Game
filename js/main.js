$(document).ready(function () {
// console.log("js is working");

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
    // 1, 7 & 4 || 1, 2 & 3 || 1, 5 & 9
    // 2, 5 & 8
    // 3, 6 & 9 || 3, 5 & 7
    //Horizontal Combo wins

    // 4, 5 & 6
    // 7, 8 & 9
    //Diagonal wins

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
var player = 1;

$square = $(".square");
$square.one("click", function (){ //I only want the square clickable once.
  if (player === 1) {

      $(this).addClass("animated flipInX");
      $(this).css({ //When clicked set square css to image clinton
      backgroundImage : "url(images/clintonTwo.jpg)",
      backgroundSize : "100%"
    });

      $(this).addClass("playerOne"); //add a class marker, so I can check what squares playerOne has
      player = 2; //update variable to 2, so to switch to player 2

  } else {
      $(this).addClass("animated flipInX");
      $(this).css({ //when clicked set square css to trump cheeto
      backgroundImage : "url(images/trump.jpg)",
      backgroundSize : "100%"
    });

      $(this).addClass("playerTwo"); //add a class marker, so I can check what squares playerTwo has
      player = 1;
  }

  if ( //horizontal
      ($(".square.one").hasClass("playerOne") && $(".square.two").hasClass("playerOne") &&                             $(".square.three").hasClass("playerOne")) ||

      $(".square.four").hasClass("playerOne") && $(".square.five").hasClass("playerOne") && $(".square.six").hasClass("playerOne") ||

      $(".square.seven").hasClass("playerOne") && $(".square.eight").hasClass("playerOne") && $(".square.nine").hasClass("playerOne") ||
        //vertical
      $(".square.one").hasClass("playerOne") && $(".square.four").hasClass("playerOne") && $(".square.seven").hasClass("playerOne") ||

      $(".square.two").hasClass("playerOne") && $(".square.five").hasClass("playerOne") && $(".square.eight").hasClass("playerOne") ||

      $(".square.three").hasClass("playerOne") && $(".square.six").hasClass("playerOne") && $(".square.nine").hasClass("playerOne") ||
        //diagonal
      $(".square.three").hasClass("playerOne") && $(".square.five").hasClass("playerOne") && $(".square.seven").hasClass("playerOne") ||

      $(".square.one").hasClass("playerOne") && $(".square.five").hasClass("playerOne") && $(".square.nine").hasClass("playerOne")) {
    clintonWin();
  } else if (
      //horizontal
    $(".square.one").hasClass("playerTwo") && $(".square.two").hasClass("playerTwo") &&                             $(".square.three").hasClass("playerTwo") ||

    $(".square.four").hasClass("playerTwo") && $(".square.five").hasClass("playerTwo") && $(".square.six").hasClass("playerTwo") ||

    $(".square.seven").hasClass("playerTwo") && $(".square.eight").hasClass("playerTwo") && $(".square.nine").hasClass("playerTwo") ||
    //vertical
    $(".square.one").hasClass("playerTwo") && $(".square.four").hasClass("playerTwo") && $(".square.seven").hasClass("playerTwo") ||

    $(".square.two").hasClass("playerTwo") && $(".square.five").hasClass("playerTwo") && $(".square.eight").hasClass("playerTwo") ||

    $(".square.three").hasClass("playerTwo") && $(".square.six").hasClass("playerTwo") && $(".square.nine").hasClass("playerTwo") ||
    //diagonal
    $(".square.three").hasClass("playerTwo") && $(".square.five").hasClass("playerTwo") && $(".square.seven").hasClass("playerTwo") ||

    $(".square.one").hasClass("playerTwo") && $(".square.five").hasClass("playerTwo") && $(".square.nine").hasClass("playerTwo")) {

    cheetoWin();
  } else {
    console.log("no winner");
  }
});

///////////THEMES/////////////////////
// Clinton winning theme
// Update container background
// Make selected squares flash
// Clinton wins in big words across screen
  // add button to this to play again


var clintonWin = function () {
var $clintonTheme = $(".clintonTheme");
$clintonTheme.css({
  display: "inline-block"

  });
};
// Cheeto winning theme
  //Update container background
  //Make selected squares flash
  //Cheeto wins in big letters
  //add button to this to play again

var cheetoWin = function () {
var $cheetoTheme = $(".cheetoTheme");
$cheetoTheme.css({
  display: "inline-block",
});
};



// FUNCTIONS TO HIGHLIGHT WHICH PLAYER IS NEXT
// var $playerOne = $(".clinton");
// var $playerTwo = $(".trump");
// var playerOneTurn = function () {
//   $playerOne.css({
//     border: "1px solid yellow"
//   });
// };
//
// var playerTwoTurn = function () {
//   $playerTwo.css({
//     border: "1px solid yellow"
//   });
// };








///////////below to end $(document).ready thing from 1st line
});
