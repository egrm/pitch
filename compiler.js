
const tokenize = (input) => {
	const dictionary = [
	{
		type: 	'slide separator',
		re: 	/^[\-]+\n/gm
	},
	{
		type: 	'subheading',
		re: 	/^\#\#(.*)/
	},
	{
		type: 	'heading',
		re: 	/^\#(.*)/
	},
	{
		type: 	'text',
		re: 	/^\n*(.+)\n*/
	},
	]

	const splitSlides = (input) => {
		return input.trim().split(dictionary[0].re);
	}

	// TODO: secure inputs
	const tokenizeSlide = (slide) => {
		const lines = slide.trim().split("\n");

		const result = lines.map((line, i) => {
			// TODO: throw on not-matching-type
			let content  = '';
			for (let definition of dictionary) {
				if (definition.re.test(line)) {
					type = definition.type;
					content = line.match(definition.re)[1].trim();
					// content = definition.match(test)
					break;
				}
			}
			return {type, content}
		});

		return result;
	}

	let slides = splitSlides(input);

	slides.forEach((slide, i) => {
		slides[i] = tokenizeSlide(slide);
	})

	return slides;
}


const compile = (input) => {
	const slides = tokenize(input);
	const compileToken = (token) => {
		// {type: "heading", content: "some kind of heading"}
		let result = '';
		switch (token.type) {
			case "text": {
				result = `<p>${token.content}</p>`
				break;
			}
			case "heading": {
				result = `<h1>${token.content}</h1>`
				break;
			}
			case "subheading": {
				result = `<h2>${token.content}</h2>`
				break;
			}
		}
		return result;
	}
	return slides.reduce((html, slide) => {
		return html + `<div class="slide">${
			slide.reduce((result, token) => (result + compileToken(token)), '')
		}</div>`
	}, '')
}


const render = (html) => {
	const display = document.getElementById('display');
	display.innerHTML = html;
}

const input = `
# some kind of heading
## some sort of subheading
---
*hello world* in bold
---
*hello world* in bold
`
