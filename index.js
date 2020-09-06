

//grab all carousel items:

const slides = document.querySelectorAll('.carousel-item')

let slidePosition = 0

const totalSlides = slides.length

const previousButton = document.querySelector('#carousel-button-prev')

const nextButton = document.querySelector('#carousel-button-next')

const hideAllSlides = () => {
  for ( let slide of slides ) {
    slide.classList.remove('carousel-item-visible')
    slide.classList.add('carousel-item-hidden')
  }
}

const moveToNextSlide = () => {

  hideAllSlides()

  if ( slidePosition === totalSlides - 1 ) {
    slidePosition = 0
  } else {
    slidePosition ++
  }
  slides[ slidePosition ].classList.add("carousel-item-visible")
}

const moveToPrevSlide = () => {

  hideAllSlides()
  
  if ( slidePosition === 0 ) {
    slidePosition = totalSlides - 1
  } else {
    slidePosition --
  }
  slides[ slidePosition ].classList.add("carousel-item-visible")
}



nextButton.addEventListener('click', moveToNextSlide)
previousButton.addEventListener('click', moveToPrevSlide)


