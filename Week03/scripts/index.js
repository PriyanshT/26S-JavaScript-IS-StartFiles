// Get all the list items for the various airports
var airportListItems = document.getElementsByTagName('li');
// Create a new array to hold just the text in the list items
var airports = new Array();
// Loop through the list items, and for each one, extract the text and add it to the airports array

// Delete all the existing list items so we can create new ones
var airportUL = document.querySelector('body ul');
airportUL.innerHTML = '';
// Loop through the airports array
for (var i = 0; i < airports.length; i++) {
    var input = airports[i];

    // 1. Find the character index of the comma, and assign it to a variable called commaLocation

    // 2. Obtain the full name of the airport using the comma index as a reference, store it in airportName

    // 3. Capture the 3-letter airport code at the end of the string, store it as airportCode
    //    (hint: use .length and .slice)

    // 4. Get the Google Maps short URL from the string using commaLocation, store it as googleUrl

    // 5. Build an HTML anchor element using the above variables, store it as result
    // <a href="googleUrl">airportCode - airportName</a>

    /* ----------------------------------------------- */
    // Create a new list item element, inject the anchor inside it, and append to the UL
}
