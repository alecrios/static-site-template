module.exports = [
	{
		type: 'input',
		name: 'name',
		message: 'Page Name (Title Case):',
		validate(name) {
			if (!name.length) {
				return 'Page must have a name.';
			}

			return true;
		},
	},
];
