const switchTheme = (name) => {
	const themeLink = document.getElementById('theme_link');
	themeLink.href = `${encodeURI(name)}.css`;
}

const themeSelector = document.getElementById('theme');
const manualInput = document.getElementById('presentation_text');

manualInput.oninput = (e) => {
	// render(compile(e.target.value))
	slider.load(e.target.value)
	slider.to(slider.current())
}

themeSelector.onchange = (e) => {
	switchTheme(e.target.value);
}

const controls = document.getElementById('controls');

controls.onmouseover = (e) => {
	controls.classList.remove('hidden')
}

controls.onmouseleave = (e) => {
	controls.classList.add('hidden')
}
