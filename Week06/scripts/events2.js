// Declare and initialize variables
var elem = document.querySelector('h1');
var elem2 = document.querySelector('p');

// Build a random() helper function that returns a random number between 0 and the given number

/* STEP 1a: Event Objects
Build a bgChange(event) function that accepts the event as a parameter and changes the background
color of event.target (not the document body) to a random RGB color */

/* STEP 1b: Change the element that has the click event listener to target the H1 instead */

// Add click event listeners to elem and elem2

/* STEP 2a: Prevent Default Behavior
Examine the form in the HTML, then grab the form elements you need */
var form = document.querySelector('form');
var email = document.getElementById('email');
var submit = document.getElementById('submit');
var para = document.querySelector('#formErrors');

// STEP 2b: Add a click event to the submit button - if the email field is empty,
// show an error message in #formErrors and call event.preventDefault()

// This page inspired by and adapted from https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events
