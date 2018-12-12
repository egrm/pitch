const log = console.log;

const createSlider = () => {
	const slides = [...document.querySelectorAll('.slide')];
	let currentSlide = 0;

	const goTo = (slideIndex) => {
		if (slides[slideIndex]) {
			currentSlide = slideIndex;
			slides[slideIndex].scrollIntoView();
			log(slideIndex)
		}
	}

	goTo(0);

	return {
		next() {
			goTo(currentSlide + 1)
		},
		previous() {
			goTo(currentSlide - 1)
		},
		to(i) {
			goTo(i);
		},
		current() {
			return currentSlide;
		}
	}
}

slider = createSlider();

// interface
onkeydown = (e) => { 
	if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
		slider.next();
	}

	if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
		slider.previous();
	}

	if (e.key.match(/[0-9]/)) {
		slider.to(e.key)
	}
}

// fix resizing issues
onresize = (e) => {
	slider.to(slider.current())
}