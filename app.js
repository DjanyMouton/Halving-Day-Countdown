// Selected Element 

let body = document.querySelector("body");

// Created Element

let countdownContainer = document.createElement('div');


// Body parameter

body.style.display = 'flex';
body.style.alignItems = 'center';
body.style.justifyContent = 'center';
body.style.backgroundColor = 'Black';
body.style.margin = '0';
body.style.height = '100vh';

// Countdown container style

countdownContainer.style.width = '90vw';
countdownContainer.style.height = '80vh';
countdownContainer.style.border = '0.2px solid white';
countdownContainer.style.borderRadius = '10px';
countdownContainer.style.color = 'white';

document.body.append(countdownContainer);

// Create the title of the countdown container

countdownContainer.innerHTML = "<h1>Halving day of bitcoin</h1>"



