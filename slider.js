const log = console.log;

const createSlider = () => {
	const slides = [...document.querySelectorAll('.slide')];
	let currentSlide = 0;

	const goTo = (slideIndex) => {
		if (slides[slideIndex]) {
			currentSlide = slideIndex;
			slides[slideIndex].scrollIntoView();
		}
	}

	return {
		next() {
			goTo(currentSlide + 1)
		},
		previous() {
			goTo(currentSlide - 1)
		},
		to(i) {
			goTo(i);
		}
	}
}

slider = createSlider();

// interface
onkeydown = (e) => { 
	if (e.key === 'ArrowRight') {
		slider.next();
	}

	if (e.key === 'ArrowLeft') {
		slider.previous();
	}

	if (e.key.match(/[0-9]/)) {
		slider.to(e.key)
	}
}