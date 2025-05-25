module.exports = {
	parser: "@typescript-eslint/parser",
	extends: [
		"eslint:recommended",
		"plugin:@typescript-eslint/recommended",
		"prettier",
	],
	plugins: ["@typescript-eslint"],
	root: true,
	env: {
		node: true,
		es6: true,
	},
};
