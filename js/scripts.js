// Random 'who i am' photo loader

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
    './img/me/me13.jpg'
    ];

var image = 
    document.getElementById('random-image');

image.src = portrait[Math.floor(Math.random() * Math.floor(portrait.length))]
// ===============================================================================
// Enlarge ween photo interface

// const images = document.querySelectorAll(".images .weens");
// const modal = document.querySelector(".modal");
// const modalImg = document.querySelector(".modalImg");
// const modalTxt = document.querySelector(".modalTxt");
// const close = document.querySelector(".close");

// images.forEach((image) => {
//     image.addEventListener("click", () => {
//         modalImg.src = image.src;
//         modalTxt.innerHTML = image.alt;
//         modal.classList.add("appear");
        
//         close.addEventListener("click", () => {
//             modal.classList.remove("appear");
//         });
//     });
// });

// var modal = document.getElementsByClassName("modal");

// var img = document.getElementsByClassName("weens");
// var modalImg = document.getElementById("");

// for(i = 0; i < image.length; i++)
//     {
//         img[i].onclick = function*() {
//             modal.style.display = "block";
//                 modalImg.src =
//         }
//     }