// Get the id for add the countdown

const daysEl = document.querySelector('#days');
const hoursEl = document.querySelector('#hours');
const minutesEl = document.querySelector('#minutes');
const secondsEl = document.querySelector('#seconds');

const halvingDay = '24 March 2024';

function countdown(){
    let currentDay = new Date(); 
    let nextHalving = new Date(halvingDay);

    const totalSeconds = (nextHalving - currentDay) / 1000;

    const days              = Math.floor(totalSeconds / 3600 / 24);
    const hours             = Math.floor(totalSeconds / 3600) % 24;
    const minutes           = Math.floor(totalSeconds / 60) % 60;
    const seconds           = Math.floor(totalSeconds) % 60;

    daysEl.innerHTML = days;
    hoursEl.innerHTML = hours;
    minutesEl.innerHTML = minutes;
    secondsEl.innerHTML = seconds;
}

countdown();

setInterval(countdown, 1000);