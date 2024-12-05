"use strict";

//Cache DOM 
const countEl = document.getElementById("count-element");
const addButton = document.getElementById("add-btn");
const subtractButton = document.getElementById("subtract-btn");
const saveButton = document.getElementById("save-btn");
const previousCount = document.getElementById("previous-count");

/*
 When the add button is click the count gets updated by one (1) each time.
 */
//Global counter variable
let counter = 0;

//Function declaration syntax
function addCount() {
  counter ++;
  countEl.textContent = counter;
}
//function Expression syntax
const subtractCount = function () {
  counter --;
  countEl.textContent = counter;
};
//Arrow Function syntax
const saveCount = () => {
  let countStr = counter + " - ";
  previousCount.textContent += countStr;
  countEl.textContent = 0;
  counter = 0;
};
//Add button logic to add (1) to count on each click
addButton.addEventListener("click", addCount);
//Subtract button logic that subtract (1) from the count on each click
subtractButton.addEventListener("click", subtractCount);
//Save button logic that prints the save results to the page
saveButton.addEventListener("click", saveCount);
