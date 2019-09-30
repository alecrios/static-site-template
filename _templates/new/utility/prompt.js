module.exports = [
	{
		type: 'input',
		name: 'name',
		message: 'Utility Name (Title Case):',
		validate(name) {
			if (!name.length) {
				return 'Utility must have a name.';
			}

			return true;
		},
	},
];
