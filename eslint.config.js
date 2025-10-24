import prettier from 'eslint-config-prettier';
import svelte from 'eslint-plugin-svelte';
export default [
	prettier,
	...svelte.configs['flat/prettier'],
	{
		ignores: ['node_modules/**', 'build/**', '.svelte-kit/**']
	}
];
