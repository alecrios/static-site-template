module.exports = {
	root: true,
	env: {
		browser: true,
		node: true,
	},
	parserOptions: {
		parser: 'babel-eslint',
	},
	extends: [
		'@nuxtjs',
		'plugin:nuxt/recommended',
	],
	rules: {
		'arrow-parens': ['warn', 'always'],
		'comma-dangle': ['warn', 'always-multiline'],
		'indent': ['warn', 'tab'],
		'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
		'no-tabs': 0,
		'semi': ['warn', 'always'],
		'vue/component-name-in-template-casing': ['warn', 'PascalCase'],
		'vue/html-closing-bracket-spacing': ['warn', {
			'selfClosingTag': 'never',
		}],
		'vue/html-indent': ['warn', 'tab'],
		'vue/no-v-html': 0,
		'vue/singleline-html-element-content-newline': 0,
	},
}
