const switchTheme = (name) => {
  const themeLink = document.getElementById("theme_link");
  themeLink.href = `${encodeURI(name)}.css`;
};

const themeSelector = document.getElementById("theme");
const manualInput = document.getElementById(
  "presentation_text",
);

// load example

manualInput.value = `# file test
---
## and it works
---
it absolutely does
---
img[./img/big-pic.jpg]
`;

slider.load(manualInput.value);

//

manualInput.onchange = (e) => {
  // render(compile(e.target.value))
  slider.load(e.target.value);
  slider.to(slider.current());
};

themeSelector.onchange = (e) => {
  switchTheme(e.target.value);
};

const controls = document.getElementById("controls");

controls.onmouseover = (e) => {
  controls.classList.remove("hidden");
};

controls.onmouseleave = (e) => {
  if (manualInput.value !== "") {
    controls.classList.add("hidden");
  }
};

const fileInput = document.getElementById(
  "presentation_file",
);
fileInput.onchange = (e) => {
  const file = e.target.files[0];
  const reader = new FileReader();
  reader.readAsText(file, "UTF-8");
  reader.onload = (e) => {
    const result = e.target.result;
    slider.load(result);
    manualInput.value = result;
  };
};
