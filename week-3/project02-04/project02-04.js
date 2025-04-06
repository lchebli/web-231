/*    JavaScript 7th Edition
      Chapter 2
      Project 02-04

      Application to calculate the cost of a restaurant order plus tax
      Author: Leslie Khattarchebli
      Date: 4/4/25

      Filename: project02-04.js
 */

//Declaring global constants for food: , , and

const CHICKEN_PRICE = 10.95;    // price of Chicken
const HALIBUT_PRICE = 13.95;    // price of Halibut
const BURGER_PRICE = 9.95;    // price of Burger
const SALMON_PRICE = 18.95;   // price of Salmon
const SALAD_PRICE = 7.95;   // price of Salad
const SALES_TAX= 0.07;    // Sales Tax per item

//Add event handler to calcTotal function when checked
document.getElementById("chicken").onchange = calcTotal;
document.getElementById("halibut").onchange = calcTotal;
document.getElementById("burger").onchange = calcTotal;
document.getElementById("salmon").onchange = calcTotal;
document.getElementById("salad").onchange = calcTotal;

//Estimation of meals total
function calcTotal () {
  var cost = 0;
  var buyChicken = document.getElementById("chicken").checked;
  var buyHalibut = document.getElementById("halibut").checked;
  var buyBurger = document.getElementById("burger").checked;
  var buySalmon = document.getElementById("salmon").checked;
  var buySalad = document.getElementById("salad").checked;


cost += buyChicken ? CHICKEN_PRICE : 0;

cost += buyHalibut ? HALIBUT_PRICE : 0;

cost += buyBurger ? BURGER_PRICE : 0;

cost += buySalmon ? SALMON_PRICE : 0;

cost += buySalad ? SALAD_PRICE : 0;

// inner HTML property Display cost of food total
document.getElementById("foodTotal").innerHTML = formatCurrency(cost);

// Declared Variables
var tax = cost * SALES_TAX;

// innerHTML property Food Tax added to food cost
document.getElementById("foodTax").innerHTML = formatCurrency(tax);

// Declared totalCOst variable = to cost + sales tax
var totalCost = (cost + tax);

// innerHTML property for totalBill
document.getElementById("totalBill").innerHTML = formatCurrency(totalCost);


}

// Function to display a numeric value as a text string in the format $##.##
 function formatCurrency(value) {
    return "$" + value.toFixed(2);
 }
