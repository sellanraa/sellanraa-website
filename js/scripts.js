// Random 'who i am' photo loader

var images = [
    './img/me/me1.jpg',
    './img/me/me2.jpg',
    './img/me/me3.jpg',
    './img/me/me4.jpg',
    './img/me/me5.jpg',
    './img/me/me6.jpg',
    './img/me/me7.jpg',
    './img/me/me8.jpg',
    './img/me/me9.jpg',
    './img/me/me10.jpg',
    './img/me/me11.jpg',
    './img/me/me12.jpg',
    './img/me/me13.jpg'
];

var image = 
    document.getElementById('random-image');

image.src = images[Math.floor(Math.random() * Math.floor(images.length))]

// Enlarge ween photo interface

