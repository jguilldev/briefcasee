const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
const slides = document.querySelector('.slides');
const slideImages = document.querySelectorAll('.imagen-slider');

let counter = 0;
const slideCount = slideImages.length;

nextBtn.addEventListener('click', () => {
  counter++;
  if (counter === slideCount) {
    counter = 0;
  }
  updateSlide();
});

prevBtn.addEventListener('click', () => {
  counter--;
  if (counter < 0) {
    counter = slideCount - 1;
  }
  updateSlide();
});

function updateSlide() {
  slides.style.transform = `translateX(-${counter * 100}%)`;
}

let currentSlide = 0;
const slideInterval = setInterval(() => {
  counter++;
  if (counter === slideCount) {
    counter = 0;
  }
  updateSlide();
}, 5000); // Cambia de slide cada 3 segundos (ajustable según preferencia)


// logica del menu hamburguesa

const hamburgerMenu = document.querySelector('.hamburger-menu');
const navMenu = document.querySelector('.nav-menu');

hamburgerMenu.addEventListener('click', () => {
 navMenu.classList.toggle('active');
});
