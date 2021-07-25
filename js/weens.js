
// ===============================================================================
// Enlarge ween photo interface

const images = document.querySelectorAll(".images .weens");
const modal = document.querySelector(".modal");
const modalImg = document.querySelector(".modalImg");
const modalTxt = document.querySelector(".modalTxt");
const close = document.querySelector(".close");

close.addEventListener("click", () => {
    modal.classList.remove("appear");
});
images.forEach(addImageEventListener);

function addImageEventListener(image) {
    image.addEventListener("click", () => {
        modalImg.src = image.src;
        modalTxt.innerHTML = image.alt;
        modal.classList.add("appear");
    });
}