module.exports = {
	purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			colors: {
				'background-blue': '#2d3e50',
			},
			fontFamily: {
				robotomono: ['Roboto Mono'],
				terminator: ['Terminator'],
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
