// Started at 6:19 2-25-2022

'use strict'; 

const btnPark1 = document.querySelector('.park--park-1');
const btnPark2 = document.querySelector('.park--park-2');
const btnPark3 = document.querySelector('.park--park-3');
const btnPark4 = document.querySelector('.park--park-4');
const btnPark5 = document.querySelector('.park--park-5');
const btnPark6 = document.querySelector('.park--park-6');

const parkEl = document.querySelector('.park');

const displayMessage = function(message) {
    document.querySelector('.score').textContent = message;
}

const winner = function(win) {
    document.querySelector('.body').style.backgroundColor = 'green';
    document.querySelector('.score').textContent = "YOU WON!";
}

const btnNew = document.querySelector('.btn--again');

const guess = document.querySelector('.right');   

let park = Math.trunc(Math.random() * 6 ) + 1;
console.log(park);


    parkEl.classList.remove('hidden');
    parkEl.src = `park-${park}.png`;

btnPark1.addEventListener('click', function () {  
if (park === 1) {
    console.log("YOU WON!");
    winner();
} else if (park != guess) {
    displayMessage("WRONG PARK!")
}});

btnPark2.addEventListener('click', function () {  
if (park === 2) {
    console.log("YOU WON!");
    winner();
} else if (park != guess) {
    displayMessage("WRONG PARK!")
}});
btnPark3.addEventListener('click', function () {  
if (park === 3) {
    console.log("YOU WON!");
    winner();
} else if (park != guess) {
    displayMessage("WRONG PARK!")
}});

btnPark4.addEventListener('click', function () {  
if (park === 4) {
    console.log("YOU WON!");
    winner();
} else if (park != guess) {
    displayMessage("WRONG PARK!")
}});

btnPark5.addEventListener('click', function () {  
if (park === 5) {
    console.log("YOU WON!");
    winner();
} else if (park != guess) {
    displayMessage("WRONG PARK!")
}});
    
btnPark6.addEventListener('click', function () {  
if (park === 6) {
    console.log("YOU WON!");
    winner();
} else if (park != guess) {
    displayMessage("WRONG PARK!")
}});

btnNew.addEventListener('click', function () {

    park = Math.trunc(Math.random() * 6 ) + 1;

    displayMessage("");
    parkEl.classList.remove('hidden');
    parkEl.src = `park-${park}.png`;  
    document.querySelector('.body').style.backgroundColor = 'blue';
})

// Ended at 8:46 2-25-2022
