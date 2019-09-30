module.exports = [
	{
		type: 'input',
		name: 'name',
		message: 'Layout Name (Title Case):',
		validate(name) {
			if (!name.length) {
				return 'Layout must have a name.';
			}

			return true;
		},
	},
];
