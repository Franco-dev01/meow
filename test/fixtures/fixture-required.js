#!/usr/bin/env node
import meow from '../../index.js';

const cli = meow({
	importMeta: import.meta,
	description: 'Custom description',
	help: `
		Usage
		  foo <input>
  `,
	flags: {
		test: {
			type: 'string',
			alias: 't',
			isRequired: true,
		},
		number: {
			type: 'number',
			isRequired: true,
		},
		kebabCase: {
			type: 'string',
			isRequired: true,
		},
		notRequired: {
			type: 'string',
		},
	},
});

console.log(`${cli.flags.test},${cli.flags.number}`);
