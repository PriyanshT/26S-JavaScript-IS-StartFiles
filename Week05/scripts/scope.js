// STEP 1: Declare and initialize a global variable (x = 1)

// STEP 2: Build a function fun1() that declares a local variable (y = 2) and calls output() with x, y, and z

// STEP 3: Build a function fun2() that declares a local variable (z = 3) and calls output() with z

/* STEP 4: Analyze the output() function below that accepts a value,
   creates an H2 element, appends it to the DOM, and sets its text to the value */
function output(value) {
    var elem = document.createElement('h2');
    document.body.appendChild(elem);
    elem.textContent = 'Value of variable is ' + value;
}

/* STEP 5: In the console, try:
output(x) - what happens?
output(y) - what happens?
output(z) - what happens? */

/* STEP 6a: Add output(y) inside fun1() and output(z) inside fun2(), then reload and call each in the console */
/* STEP 6b: Swap output(y) and output(z) between the two functions - what happens now?
Note that variables inside functions are only available inside those functions. */

// STEP 7: Calling functions within functions

// STEP 7a: Build a mainFun() that declares a variable (value = 500) and calls subFun()

// STEP 7b: Build subFun(myValue) that logs myValue to the console

// STEP 7c: Call mainFun() in your console after refreshing the page

// Next, open up custom.html
// This page inspired by and adapted from https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Functions
