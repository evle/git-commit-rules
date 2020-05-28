module.exports = {
    rules: {
		'subject-empty': [2, 'never'],
		'type-empty': [2, 'never'],
		'type-case': [2, 'always', 'lower-case'],
		'type-enum': [
			2,
			'always',
			[
				'chore',
				'bugfix',
				'docs',
				'feat',
				'jira',
				'refactor',
				'misc',
				'style',
			]
		]
	}
};
