console.log("All Hooked up!")

//grab all carousel items:

const slides = document.querySelectorAll('.carousel-item')

let slidePosition = 0

const totalSlides = slides.length

const previousButton = document.querySelector('#carousel-button-prev')

const nextButton = document.querySelector('#carousel-button-next')

const moveToNextSlide = () => {
  if ( slidePosition === totalSlides - 1 ) {
    slidePosition = 0
  } else {
    slidePosition ++
  }
  slides[ slidePosition ].classList.add("carousel-item-visible")
}

const moveToPrevSlide = () => {
  console.log("Next button was clicked")
}

nextButton.addEventListener('click', moveToNextSlide)
previousButton.addEventListener('click', moveToPrevSlide)


