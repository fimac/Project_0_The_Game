# Project_0_The_Game
////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////
/////////////////CLINTON VS CHEETO TIC TAC TOE//////////////////////
////////////////////////////////////////////////////////////////////
//////////////////////////////by Fiona McCawley/////////////////////
////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////
Technologies used:
  -html5
  -css3
  -Javascript
  -jQuery
  -animate.css

Approach taken:-
Before creating anything, I worked out a plan on paper. As I worked
on the game, these things evolved. Initially I wanted to drag tokens over to
the gameboard, to put into place. I was making it more complex than it needed
to be.

I started off with what Data was involved.
  - I needed a token/marker for each player (2)
  - To be able to keep track and know where a token has been added/placed
  - Map out what the winning combinations are
  - I need to be able to switch from player one to player two
  - I need to keep track for the number of turns, so if there isn't a match
    after 9 turns, then it will be a tie.
  - I need something to check whether a win/match has taken place
  - I need something to indicate that this has happened

Presentation/Style
  - Use one main div, with multiple divs inside it
  - I'm going to have the squares flip to either a clinton face or trump face
  - American colors as the theme red/white/blue
  - When match happens, a winning theme triggered. Or when tie happens a tie theme.

DOM manipulation
  - Use jQuery to flip between background image and face, using a click function
  - For animations for winning theme and buttons to restart game

First stage
  - I created basic html, and css for the gameboard. Separate divs, with
    a background image. The divs had 2 classes, square plus the number square.
  - I then worked out how to flip a specified square to show a particular image, by
    selecting the square element using jQuery, then using the .on(click) with the function
    to update the css using the .css, to change the background image url to the image I wanted.
  - To make it dynamic, I used the 'this' word on the jquery selector for .square
    I was then able to click on any square to show an image. Although, it was
    showing the same image. It was not switching between players.
Second stage
  - I created a variable for player that was === to 1. I created an if else statement
    so that I could say, if player === 1 then on click do this, otherwise if not 1 then
    on click show the other image. This was still hardcoded, but I could see if I changed
    the variable from 1 to 2 I could get the squares showing different images depending on player.
  - To solve this, after changing the background image, I made the player variable === to the other player. So
    at the end of player 1's click event, the variable would be changed to 2, on the next click event, as player
    did not === 1 it would then switch player 2's image.
  - I need to be able to track which squares player one had clicked, and which squares player two had clicked.
  - I initially tried doing that by getting the attribute of the squares, I was thinking if I could find out what
    the url was on each square, I could match that up with the winning combos. I couldn't get this working.
  - So I tried adding a css class of player one or player two, again utilising the $(this) keyword, and using
    .addClass.
  - I then needed to be able to check if after each go any player had matched. I created a second if/else statement within
    the same click function. The if statement was to check playerOne, else playerTwo 
