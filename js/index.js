// Random 'who i am' portrait loader with some math


var portrait = [
    './img/me/me01.jpg',
    './img/me/me02.jpg',
    './img/me/me03.jpg',
    './img/me/me04.jpg',
    './img/me/me05.jpg',
    './img/me/me06.jpg',
    './img/me/me07.jpg',
    './img/me/me08.jpg',
    './img/me/me09.jpg',
    './img/me/me10.jpg',
    './img/me/me11.jpg',
    './img/me/me12.jpg',
    './img/me/me13.jpg',
    './img/me/me14.jpg',
    './img/me/me15.jpg',
    './img/me/me16.jpg',
    './img/me/me17.jpg',
    './img/me/me18.jpg',
    './img/me/me19.jpg'
    ];

var image = 
    document.getElementById('random-image');

image.src = portrait[Math.floor(Math.random() * Math.floor(portrait.length))]
