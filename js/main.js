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






//Below function will switch between player 1 & 2
//Declare undefined variable
// Once player 1 finishes variable changes to 2, once player 2 finishes, variable goes back to 1
//variable to keep track of number of turns so that if it reaches 9 and none of the winning combos have happened, then it should be a tie.
var $one = $(".square.one");
var $two = $(".square.two");
var $three = $(".square.three");
var $four = $(".square.four");
var $five = $(".square.five");
var $six = $(".square.six");
var $seven = $(".square.seven");
var $eight = $(".square.eight");
var $nine = $(".square.nine");


  // I need a counter on each players column to display their score
    //I need the number pushed to that scoreboard as a string using .text

var player = 1;
var numberOfTurns = 0;
var playerOneWins = 0;
var playerTwoWins = 0;
//check to see if player one or player two reaches 3 wins


var $square = $(".square");
$square.on("click", function (){ //I only want the square clickable once.
  if (player === 1) {
      removePlayerTwoText();
      $(this).addClass("animated flipInX");
      $(this).css({ //When clicked set square css to image clinton
      backgroundImage : "url(images/clintonTwo.jpg)",
      backgroundSize : "100%"
    });

      $(this).addClass("playerOne"); //add a class marker, so I can check what squares playerOne has
      numberOfTurns += 1; //add 1 to the number of turns
      player = 2; //update variable to 2, so to switch to player 2
      // animatePlayerTwo();

  } else {
      removePlayerOneText();
      $(this).addClass("animated flipInX");
      $(this).css({ //when clicked set square css to trump cheeto
      backgroundImage : "url(images/trump.jpg)",
      backgroundSize : "100%"
    });

      $(this).addClass("playerTwo"); //add a class marker, so I can check what squares playerTwo has
      numberOfTurns += 1; //add 1 to the number of turns
      player = 1;
      // animatePlayerOne();
  }

  if ( //horizontal
    ($one.hasClass("playerOne") && ($two.hasClass("playerOne") && $three.hasClass("playerOne")) ||
    ($four.hasClass("playerOne") && $seven.hasClass("playerOne")) ||
    ($five.hasClass("playerOne") && $nine.hasClass("playerOne"))) ||

    ($five.hasClass("playerOne") && ($six.hasClass("playerOne") && $four.hasClass("playerOne")) ||
    ($two.hasClass("playerOne") && $eight.hasClass("playerOne")) ||
    ($seven.hasClass("playerOne") && $three.hasClass("playerOne"))) ||

    $three.hasClass("playerOne") && $six.hasClass("playerOne") && $nine.hasClass("playerOne") ||
    $seven.hasClass("playerOne") && $eight.hasClass("playerOne") && $nine.hasClass("playerOne"))
    {
      playerOneWins += 1; //add one to the win counter
      $(".scoreOne").text(playerOneWins); //push the number of wins to the players score panel
      clintonWin(); //run clinton win theme

} else if (
    ($one.hasClass("playerTwo") && ($two.hasClass("playerTwo") && $three.hasClass("playerTwo")) ||
    ($four.hasClass("playerTwo") && $seven.hasClass("playerTwo")) ||
    ($five.hasClass("playerTwo") && $nine.hasClass("playerTwo"))) ||

    ($five.hasClass("playerTwo") && ($six.hasClass("playerTwo") && $four.hasClass("playerTwo")) ||
    ($two.hasClass("playerTwo") && $eight.hasClass("playerTwo")) ||
    ($seven.hasClass("playerTwo") && $three.hasClass("playerTwo"))) ||

    $three.hasClass("playerTwo") && $six.hasClass("playerTwo") && $nine.hasClass("playerTwo") ||
    $seven.hasClass("playerTwo") && $eight.hasClass("playerTwo") && $nine.hasClass("playerTwo"))
    {
     playerTwoWins += 1; //add one to the win counter
     $(".scoreTwo").text(playerTwoWins); //push the number of ones to the players score panel
     cheetoWin(); //run cheeto win theme

  } else if (numberOfTurns === 9){
      tie(); //run tie theme

  } else {
      if (player === 2){
        animatePlayerTwo();
      } else {
        animatePlayerOne();
      }
  }
});

///////////THEMES AND ANIMATIONS/////////////////////

//animations to show who's turn is it next
// changes the p in col one and two to show, with a slight delay
var animatePlayerOne = function () {
  window.setTimeout(function(){
    $(".col-one p").addClass("animated bounce");
    $(".col-one p").css({
      display: "inline-block"
    });
  }, 500);
};

var animatePlayerTwo = function () {
  window.setTimeout(function(){
    $(".col-two p").addClass("animated bounce");
    $(".col-two p").css({
      display: "inline-block"
    });
  }, 500);
};

//function to remove the text so it toggles back and forth between the two
 var removePlayerOneText = function () {
   $(".col-two p").css({
     display: "none"
   });
 };

 var removePlayerTwoText = function () {
   $(".col-one p").css({
     display: "none"
   });
 };
// I want to animate the gameboard exploding and each square
// to fly out to the sides and up on a win
var animateBoard = function () {
  $(".gameboard").css ({
    border: "none"
  });
  $(".square.one").animate({
    right: "-1500px"
  }, 3500);
  $(".square.two").animate({
    top: "-1500px"
  }, 3500);
  $(".square.three").animate({
    left: "-1500px"
  }, 3500);
  $(".square.four").animate({
    right: "-1500px"
  }, 3500);
  $(".square.five").animate({
    top: "-1500px"
  }, 3500);
  $(".square.six").animate({
    left: "-1500px"
  }, 3500);
  $(".square.seven").animate({
    right: "-1500px"
  }, 3500);
  $(".square.eight").animate({
    bottom: "-1500px"
  }, 3500);
  $(".square.nine").animate({
    left: "-1500px"
  }, 3500);
};
//I need my gameboard to be centre of screen
boardCentre = ((window.innerWidth / 2) - 302 ) + "px";
$gameboard = $(".gameboard");
$gameboard.css({
  left: boardCentre
});
themeCentre = ((window.innerWidth / 2) - 300 ) + "px";

//Winning themes

// Clinton winning theme
var $clintonTheme = $(".clintonTheme");
var $clintonButton = $(".clintonTheme button");
var clintonWin = function () {
  animateBoard(); //run exploding squares
  $clintonTheme.css({
    display: "inline-block",
    left: themeCentre
  });
};
//set button to reset panels, and clear classes
$clintonButton.on("click", function (){
  $clintonTheme.css({
    display: "none",
  });
  playAgain();
});

// Cheeto winning theme
var $cheetoButton = $(".cheetoTheme button");
var $cheetoTheme = $(".cheetoTheme");
var cheetoWin = function () {
  animateBoard(); //run exploding squares
  $cheetoTheme.css({
    display: "inline-block",
    left: themeCentre
  });
};

//reset button for cheeto theme
$cheetoButton.on("click", function (){
  $cheetoTheme.css({
    display: "none",
  });
  playAgain();
});

//It's a tie theme
var $tieTheme = $(".tieTheme");
var $tieButton = $(".tieTheme button");
var tie = function () {
  animateBoard(); //run exploding squares
  $tieTheme.css({
    display: "inline-block",
    left: themeCentre
  });
};

//reset button for tie theme
$tieButton.on("click", function (){
  $tieTheme.css({
    display: "none",
  });
  playAgain();
});

//I need a function to keep track of scoring, first to reach 3 wins.
  //If playerOne or two === 3 wins - then play win theme
  //When each game completes I need:
    //1 to be added to the scoreboard of the winner - done

      //The squares to reset to star background - done
      //PlayerOne and PlayerTwo classes & animated flipInX to be removed - done
      //numberOfTurns to reset to 0 - done

var playAgain = function () {
  numberOfTurns = 0;
  player = 1;
  $(".square").removeClass("playerOne");
  $(".square").removeClass("playerTwo");
  $(".square").removeClass("animated");
  $(".square").removeClass("flipInX");
  $(".gameboard").css ({
    display: "inline-block"
  });
  $(".square").css ({
    backgroundImage: "url(images/square_stars.png)"
  });
  $(".square.one").animate({
    right: "0px"
  }, 500);
  $(".square.two").animate({
    top: "0px"
  }, 500);
  $(".square.three").animate({
    left: "0px"
  }, 500);
  $(".square.four").animate({
    right: "0px"
  }, 500);
  $(".square.five").animate({
    top: "0px"
  }, 500);
  $(".square.six").animate({
    left: "0px"
  }, 500);
  $(".square.seven").animate({
    right: "0px"
  }, 500);
  $(".square.eight").animate({
    bottom: "0px"
  }, 500);
  $(".square.nine").animate({
    left: "0px"
  }, 500);
};




///////////below to end $(document).ready thing from 1st line
});
