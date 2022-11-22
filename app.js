// Body parameter

let body = document.querySelector("body");

body.style.display = 'flex';
body.style.alignItems = 'center';
body.style.justifyContent = 'center';
body.style.backgroundColor = 'Black';
body.style.margin = '0';
body.style.height = '100vh';


// Created Element for the countdown

let countdownContainer = document.createElement('div');

countdownContainer.style.width = '50vw';
countdownContainer.style.height = '40vh';
countdownContainer.style.border = '0.5px solid white';
countdownContainer.style.borderRadius = '10px';


document.body.append(countdownContainer);