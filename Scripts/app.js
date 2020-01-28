/*
    Student Name  : Karandeep.
    StudentID     : 100734535
    Date Completed: January 28,2019
*/

"use strict";
//IIFE - Immediately Invoked Function Expression
// mean? -> anonymous self-executing function

let app;

// Part 1-A Variables
let newButton;

// Part 1-B Variables
let largeButtonLI;
let largeButtonLIParent;
let detailLI;

// Part 1-C Variables
let replacePara;

(function(app){

    // Declare Function Variables here...
    console.log("%cDeclaring Variables", "color: red;")

    /**
     * Variable initialization in this function
     *
     */
    function Start()
    {

        // Part 1-A
        newButton = document.getElementById("largeButton");
        newButton.innerHTML="Learn More";

        // Part 1-B
        largeButtonLI = document.getElementById('largeButton');
        largeButtonLIParent = largeButtonLI.parentNode;

        detailLI = document.createElement("p");
        detailLI.innerHTML = "<h3>Karandeep 100734535</h3>";

        largeButtonLIParent.insertBefore(detailLI, largeButtonLI);

        // Part 1-C
        replacePara = document.getElementById("firstParagraph");
        replacePara.textContent = "JavaScript is a prototype-based language, and every object in JavaScript has a hidden internal property called Prototype that can be used to extend object properties and methods.";

        Main();
    }

    /**
     * Main Program entry point is here
     *
     */
    function Main()
    {

    }



    window.addEventListener("load", Start);
})(app || (app = {}));

