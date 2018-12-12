const log = console.log;

const slides = [...document.querySelectorAll('.slide')];

let currentSlide = 0;

const moveToSlide = (slideIndex) => {
	if (slides[slideIndex]) {
		slides[slideIndex].scrollIntoView();
	}
}

const moveToNextSlide = () => {
	if ((slides.length - 1) > currentSlide) {
		log('right')
		currentSlide += 1;
	}
	moveToSlide(currentSlide)
}

const moveToPreviousSlide = () => {
	if (0 < currentSlide) {
		log('left')
		currentSlide -= 1;
	}
	moveToSlide(currentSlide)
}

onkeydown = (e) => {
	if (e.key === 'ArrowRight') {
		moveToNextSlide()
	}

	if (e.key === 'ArrowLeft') {
		moveToPreviousSlide();
	}

	if (e.key.match(/[0-9]/)) {
		moveToSlide(e.key)
	}
}