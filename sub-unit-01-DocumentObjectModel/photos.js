/*    Exercise 01_05_01

 *    Photo gallery
 *    Variables and functions
 *    Author: Micah Fischer
 *    Date:   

 *    Filename: photos.js
 */

"use strict"; // interpret document contents in JavaScript strict mode

/* global variables */
var photoOrder = [1,2,3,4,5];

/* open center figure in separate window */
function zoomFig() {
   
}

/* shift all images one figure to the left, and change values in photoOrder array to match  */
function rightArrow() {
   alert("right arrow clicked");
   for (var i = 0; i < 5; i++) {
      if ((photoOrder[i] + 1) === 6) {
         photoOrder[i] = 1;
      } else {
         photoOrder[i] += 1;
      }
      populateFigures();
   }
}

/* shift all images one figure to the right, and change values in photoOrder array to match  */
function leftArrow() {
   alert("left arrow clicked");
   for (var i = 0; i < 5; i++) {
      if ((photoOrder[i] - 1) === 0) {
         photoOrder[i] = 5;
      } else {
         photoOrder[i] -= 1;
      }
      populateFigures();
   }
}

function createEventListeners() {
   var leftArrow = document.getElementById("leftarrow");
   if (leftArrow.addEventListener) {
      leftArrow.addEventListener("click", leftArrow, false);
   } else if (leftArrow.attachEvent) {
      leftArrow.attachEvent("onclick", leftArrow);
   }
}

/* create event listeners and populate image elements */
function setUpPage() {
   createEventListeners();
   populateFigures();
}

/* run setUpPage() function when page finishes loading */
if (window.addEventListener) {
  window.addEventListener("load", setUpPage, false); 
} else if (window.attachEvent)  {
  window.attachEvent("onload", setUpPage);
}