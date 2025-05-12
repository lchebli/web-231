"use strict";
/*    JavaScript 7th Edition
      Chapter 6
      Project 06-03

      Script to complete a form containing billing and shipping address information
      Author: Leslie Khattarchebli
      Date: 5/10/25

      Filename: project06-03.js
*/

//declare the useShip variable
let useShip = document.getElementById ("useShip");

//Event listener here

useShip.addEventListener ("click", copyShippingToBilling);

//function for shipping to billing

function copyShippingToBilling() {
  if (useShip.checked) {
    document.getElementById("firstnameBill").value = document.getElementById("firstnameShip").value;
    document.getElementById("lastnameBill").value = document.getElementById("lastnameShip").value;
    document.getElementById("address1Bill").value = document.getElementById("address1Ship").value;
    document.getElementById("address2Bill").value = document.getElementById("address2Ship").value;
    document.getElementById("cityBill").value = document.getElementById("cityShip").value;
    document.getElementById("countryBill").value = document.getElementById("countryShip").value;
    document.getElementById("codeBill").value = document.getElementById("codeShip").value;
    document.getElementById("stateBill").selectedIndex = document.getElementById("stateShip").selectedIndex;
  }
}

//declare formElements

var formElements = document.querySelectorAll("input[type='text']");

//declare fieldCount

let fieldCount = formElements.length;

//declare errorBox

let errorBox = document.getElementById("errorBox");

for (let i=0; i<fieldCount; i++) {
  formElements[i].addEventListener("invalid", showValidationError);
}

function showValidationError(evt) {
  evt.preventDefault();
  errorBox.textContent = "Complete all highlighted fields"
}