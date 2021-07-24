// Random 'who i am' photo loader

var images = [
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
    './img/me/me13.jpg'
];

var image = 
    document.getElementById('random-image');

image.src = images[Math.floor(Math.random() * Math.floor(images.length))]
// ===============================================================================
// Enlarge ween photo interface
$(document).ready(function() {
    $('.weens').click(function() {
      $(this).css('width', function(_, cur) {
        return cur === '100px' ? '100%' : '100px'
      });
    });
  });
 