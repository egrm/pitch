const switchTheme = (name) => {
	const themeLink = document.getElementById('theme_link');
	themeLink.href = `${name}.css`;
}

const themeSelector = document.getElementById('theme');
themeSelector.onchange = (e) => {
	switchTheme(e.target.value);
}
