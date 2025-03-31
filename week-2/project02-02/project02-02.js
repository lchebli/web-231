/*    JavaScript 7th Edition
      Chapter 2
      Project 02-02

      Application to test for completed form
      Author: Leslie Khattarchebli
      Date: 03/30/25

      Filename: project02-02.js
 */

function verifyForm() {
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let phone = document.getElementById("phone").value;

  (document.getElementById (submit).value) ?
  //code to run if condition is true :
  let submit = (name === "name" && email === "email" && phone === "phone") verifyForm() : null;

  (submit) ? window.alert("Thank you!") :
                 window.alert("Please fill in all fields");
}

//execute submit button
document.getElementById("submit").addEventListener("click", verifyForm ())