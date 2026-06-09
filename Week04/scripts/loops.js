var courses = ['Intro to Web Programming', 'Client-Side JavaScript', 'Bitmap & Vector Graphics',
    'Web UI Design with CSS', 'Relational Database', 'Advanced Java'
];
var courseList = 'My courses this term are ';
var msg = document.querySelector('#courses');

/* STEP 1a: A simple FOR loop
A loop needs an initializer (counter variable), an exit conditional, and an incrementor/decrementor.
Loop through the courses array and build a sentence listing all courses. */

// STEP 1b: Add a conditional for the last item so we can finish the sentence with a period.

/* STEP 2: Exit a loop with break */
var cities = ['Toronto', 'Montreal', 'Ottawa', 'Vancouver', 'Halifax'];
var result = document.querySelector('#searchResult');
var input = document.querySelector('input');
var btn = document.querySelector('button#cities');

// Add a click event to the button
btn.addEventListener('click', function () {
    var searchName = input.value;
    input.value = '';
    input.focus();
    /* STEP 2a: Create a FOR loop to iterate through the cities array */
    /* STEP 2b: Build an IF/ELSE that compares searchName with each city.
    If found, output a success message and break. Otherwise output a not-found message. */
});

/* STEP 3: Skip a loop iteration with continue
Loop from 1 to 50 and output only numbers whose square root is a whole integer.
Use Number.isInteger() and continue to skip non-integer square roots. */

/* STEP 4: WHILE and DO/WHILE loops */
// STEP 4a: WHILE loop - iterate through the courses array and build the same sentence as STEP 1

// STEP 4b: DO/WHILE loop - do the same thing with a do/while structure

// This page inspired by and adapted from https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Looping_code
