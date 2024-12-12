"use strict";

//Cache DOM
const countEl = document.getElementById("count-element");
const addButton = document.getElementById("add-btn");
const subtractButton = document.getElementById("subtract-btn");
const saveButton = document.getElementById("save-btn");
const previousCount = document.getElementById("previous-count");
const container = document.querySelector(".counter-container");

/*
 When the add button is click the count gets updated by one (1) each time.
 */
//Global counter variable
let counter = 0;
container.addEventListener("click", (event) => {
  const targetBtn = event.target;
  const addCount = targetBtn.dataset.addCount;
  const subtractCount = targetBtn.dataset.subtractCount;
  const saveCount = targetBtn.dataset.saveCount;
  //cognitional statements to update the counter based on the button we click
  if (addCount) {
    counter++;
    countEl.textContent = counter;
  }
  if (subtractCount) {
    counter--;
    countEl.textContent = counter;
  }
  if (saveCount) {
    let countStr = counter + " - ";
    previousCount.textContent += countStr;
    countEl.textContent = 0;
    counter = 0;
    
  }
});
