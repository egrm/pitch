const render = (html) => {
	const display = document.getElementById('display');
	display.innerHTML = html;
}

const createSlider = () => {
	let slides = [...document.querySelectorAll('.slide')];
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
		load(file) {
			render(compile(file))
			slides = [...document.querySelectorAll('.slide')];
		},
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

const slider = createSlider();

// interface
window.onkeydown = (e) => { 
	if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
		slider.next();
	}

	if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
		slider.previous();
	}

	if ((/[0-9]/).test(e.key)) {
		slider.to(e.key - 1)
	}
}

// fix resizing issues
window.onresize = (e) => {
	slider.to(slider.current())
}