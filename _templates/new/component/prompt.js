module.exports = [
	{
		type: 'input',
		name: 'name',
		message: 'Component Name (Title Case):',
		validate(name) {
			if (!name.length) {
				return 'Component must have a name.';
			}

			return true;
		},
	},
];
