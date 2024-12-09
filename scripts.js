"use strict" 
// set initial count 

let count = 0;

// Select Value and Buttons
const value = document.querySelector('#value');
const btns = document.querySelectorAll(".btn");

// Iterate through all buttons
btns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    const styles = e.currentTarget.classList;

    // Check the button type
    if (styles.contains('decrease')) {
      count--;
    } else if (styles.contains('increase')) {
      count++;
    } else {
      count = 0;
    }
    if (count > 0) {
      value.style.color = "green";
    } else if (count < 0) {
      value.style.color = "red";
    } else {
      value.style.color = "black";
    }
  });
});

