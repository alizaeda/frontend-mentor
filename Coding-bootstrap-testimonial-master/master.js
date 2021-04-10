let nextBtn = document.querySelector('.next');
let prevBtn = document.querySelector('.prev');
let slides = document.querySelectorAll('.slide');
let current = 0;

reset(current);

function reset(current) {

  slides.forEach(slide => {

    slide.style.display = 'none';

  })

  slides[current].style.display = 'flex';

}

function nextSlide() {

  current++;

  if (current > slides.length - 1) {

    current = slides.length - 1;

  }

  reset(current);


}

function prevSlide() {

  current--;

  if (current < 0) {

    current = slides.length - 1;

  }

  reset(current);


}
nextBtn.addEventListener('click', nextSlide);
prevBtn.addEventListener('click', prevSlide);