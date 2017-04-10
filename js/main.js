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
    // 1, 7 & 4 || ||
    // 2, 5 & 8
    // 3, 6 & 9 ||

    //Horizontal Combo wins
    //1, 2 & 3
    // 4, 5 & 6
    // 7, 8 & 9
    //Diagonal wins
    //1, 5 & 9, 3, 5 & 7

  //How do I know if it's a draw, if all squares are full and none of the
  //win combos have activated
  //combo draw test
    // 3, 2, 4, 7, 9
    // 1, 5, 6, 8

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
//variable to keep track of number of turns so that if it reaches 9 and none of the winning combos have happened, then it should be a tie.
var player = 1;
var numberOfTurns = 0;

$square = $(".square");
$square.one("click", function (){ //I only want the square clickable once.
  if (player === 1) {

      $(this).addClass("animated flipInX");
      $(this).css({ //When clicked set square css to image clinton
      backgroundImage : "url(images/clintonTwo.jpg)",
      backgroundSize : "100%"
    });

      $(this).addClass("playerOne"); //add a class marker, so I can check what squares playerOne has
      numberOfTurns += 1; //add 1 to the number of turns
      player = 2; //update variable to 2, so to switch to player 2
      console.log("it's player " + player + "'s turn");

  } else {
      $(this).addClass("animated flipInX");
      $(this).css({ //when clicked set square css to trump cheeto
      backgroundImage : "url(images/trump.jpg)",
      backgroundSize : "100%"
    });

      $(this).addClass("playerTwo"); //add a class marker, so I can check what squares playerTwo has
      numberOfTurns += 1; //add 1 to the number of turns
      player = 1;
      console.log("it's player " + player + "'s turn");
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

    clintonWin(); //run clinton win theme

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

    cheetoWin(); //run cheeto win theme

  } else if (numberOfTurns === 9){
    tie(); //run tie theme

  } else {
    console.log("no winner");
  }
});

///////////THEMES AND ANIMATIONS/////////////////////
//Test animations//

// I want to animate the gameboard exploding and each square
// to fly out to the sides and up on a win


var animateBoard = function () {
  $(".gameboard").css ({
    border: "none"
  });
  $(".square.one").animate({
    right: "-1500px"
  }, 1500);
  $(".square.two").animate({
    top: "-1500px"
  }, 1500);
  $(".square.three").animate({
    left: "-1500px"
  }, 1500);
  $(".square.four").animate({
    right: "-1500px"
  }, 1500);
  $(".square.five").animate({
    top: "-1500px"
  }, 1500);
  $(".square.six").animate({
    left: "-1500px"
  }, 1500);
  $(".square.seven").animate({
    right: "-1500px"
  }, 1500);
  $(".square.eight").animate({
    bottom: "-1500px"
  }, 1500);
  $(".square.nine").animate({
    left: "-1500px"
  }, 1500);
};

boardCentre = ((window.innerWidth / 2) - 302 ) + "px";
$gameboard = $(".gameboard");
$gameboard.css({
  left: boardCentre
});

// Clinton winning theme
// Update container background
// Make selected squares flash
// Clinton wins in big words across screen
  // add button to this to play again


var clintonWin = function () {
  animateBoard();
var $clintonTheme = $(".clintonTheme");
$clintonTheme.css({
  display: "inline-block",
  left: boardCentre
  });
};
// Cheeto winning theme
  //Update container background
  //Make selected squares flash
  //Cheeto wins in big letters
  //add button to this to play again

var cheetoWin = function () {
  animateBoard();
var $cheetoTheme = $(".cheetoTheme");
$cheetoTheme.css({
  display: "inline-block",
  left: boardCentre
  });
};

//It's a tie theme
var tie = function () {
  animateBoard();
var $tieTheme = $(".tieTheme");
$tieTheme.css({
  display: "inline-block",
  left: boardCentre
  });
};









///////////below to end $(document).ready thing from 1st line
});
