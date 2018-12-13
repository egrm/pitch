const input = `
# heading
## subheading
---
*hello world* in bold
`

const tokenize = (input) => {
	const tokens = [
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
	]

	const splitSlides = (input) => {
		return input.trim().split(tokens[0].re);
	}

	// TODO: secure inputs
	const tokenizeSlide = (slide) => {
		const lines = slide.trim().split("\n");

		const result = lines.map((line, i) => {
			let type = 'text'
			for (let token of tokens) {
				if (token.re.test(line)) {
					type = token.type;
					break;
				}
			}
			return {
				type: type,
				content: line
			}
		});

		return result;
	}

	let slides = splitSlides(input);

	slides.forEach((slide, i) => {
		slides[i] = tokenizeSlide(slide);
	})

	log(slides)
}

tokenize(input)
