module.exports = {
    extends: ['@commitlint/config-conventional'],
    rules: {
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
