
    "use strict";

    /**
     * TODO:
     * Create an array of 4 people's names and store it in a variable called
     * 'names'.
     */
    var names = ["JJ" , "Alfred", "Brittany" , "Hannia"];



    /**
     * TODO:
     * Create a log statement that will log the number of elements in the names
     * array.
     */
    console.log("The number of elements on the array is "  + names.length);
    /**
     * TODO:
     * Create log statements that will print each of the names individually by
     * accessing each element's index.
     */
    var writeOut = function (str) {
        for (var i = 0; i <str.length; i++) {
            console.log(str[i]);

        }
    }

    console.log (names [0]);

    console.log (names [1]);

    console.log (names [2]);

    console.log (names [3]);

    /****************************
     * TODO:
     * Write some code that uses a for loop to log every item in the names
     * array.
     */




    for (var i = 0; i < names.length; i++) {

        console.log("This is my friend " + names[i] + ".");
    }



    /**
     * TODO:
     * Refactor your above code to use a `forEach` loop
     */

    var names = ["JJ" , "Alfred", "Brittany" , "Hannia"];


        names.forEach(function(name) {
            console.log("This is my friend "  + name + ".");
        });


    /**
     * TODO:
     * Create the following three functions, each will accept an array and
     * return an an element from it
     * - first: returns the first item in the array
     * - second: returns the second item in the array
     * - last: returns the last item in the array
     *
     * Example:
     *  > first([1, 2, 3, 4, 5]) // returns 1
     *  > second([1, 2, 3, 4, 5]) // returns 2
     *  > last([1, 2, 3, 4, 5]) // return 5
     */


     function first(input) {

    if (Array.isArray(input)) {
        return input [0];
    }

    function second(array) {
        if (Array.isArray(input)) {}
     return input [1];

        function secondToLast(input) {
            if (ArrayisArray(input)) {
                return input[input.length -2];
            }
        }



     function last(array) {

         if (ArrayisArray(input)) {
             return input[input.length -1];
         }
     }






