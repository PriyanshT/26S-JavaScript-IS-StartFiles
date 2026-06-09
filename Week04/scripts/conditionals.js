var output = document.querySelector('body p:nth-of-type(2)');

/* STEP 1a: A simple if|else statement
Declare a variable homeWorkDone and set it to 1.
Declare an empty variable coffeeTime.
Build an if/else that sets coffeeTime to 20 if homework is done, or 5 if not.
Output the result to the paragraph. */

// STEP 1b: Any value that is not false, undefined, null, 0, NaN, or an empty string
// will evaluate to TRUE when tested in a conditional

/* STEP 2: The more complex if|elseif|else */
var page = document.querySelector('html');
var select = document.querySelector('select');
var icon = document.querySelector('#weatherIcon');
var temp = document.querySelector('#temp');
var comments = document.querySelector('#commentary');
var comments2 = document.querySelector('#commentary2');

/* STEP 2a: Add an event listener for the 'change' event that invokes the setWeather() function */

function setWeather() {
    var choice = select.value;
    var temperature = temp.value;

    /* STEP 2b: Craft an IF/ELSEIF/ELSE that changes the src attribute of the icon element
    to the appropriate .svg file in the images folder (sunny.svg, rainy.svg, windy.svg) */

    /* STEP 3: Add a nested IF/ELSE inside the 'sunny' condition that tests temperature -
    if >= 15, turn the page background orange, otherwise turn it lightblue */

    /* STEP 4: Logical operators - and &&, or ||, not ! */
    // STEP 4a: AND - if sunny AND temp < 15, output a cool weather comment

    // STEP 4b: AND - if sunny AND temp >= 15, output a warm weather comment

    // STEP 4c: OR - if windy OR rainy, output a dreary weather comment

    // STEP 4d: NOT - if NOT rainy, output one comment, else output another
}

/* STEP 5: Switch statements */
var windSpeed = document.querySelector('#windSpeed');
var windComment = document.querySelector('#windComment');

// Add a change event listener that calls getWindSpeed

function getWindSpeed() {
    var speed = Number(windSpeed.value);
    // STEP 5a: Build a SWITCH block with cases for 100, 80, 60, 40, 20, and a default
}

/* STEP 6: Ternary operator
Declare a coffeeBreak variable set to true.
Use the ternary operator to output one of two messages to the #breakTime paragraph. */

// This page inspired by and adapted from https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/conditionals
