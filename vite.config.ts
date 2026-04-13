import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite-plus';

export default defineConfig({
  logLevel: process.env.NODE_ENV === 'production' ? 'silent' : 'info',
  lint: {
    plugins: ['oxc', 'typescript', 'unicorn', 'react'],
    categories: {
      correctness: 'warn',
    },
    env: {
      builtin: true,
    },
    ignorePatterns: ['node_modules/**', 'build/**', '.svelte-kit/**'],
    rules: {},
    overrides: [
      {
        files: ['*.svelte', '**/*.svelte'],
        rules: {
          'no-inner-declarations': 'off',
          'no-self-assign': 'off',
          'svelte/comment-directive': 'error',
          'svelte/system': 'error',
        },
        jsPlugins: ['eslint-plugin-svelte'],
      },
    ],
    options: {
      typeAware: true,
      typeCheck: true,
    },
  },
  fmt: {
    useTabs: false,
    singleQuote: true,
    trailingComma: 'all',
    printWidth: 120,
    sortPackageJson: false,
    ignorePatterns: ['pnpm-lock.yaml', 'package-lock.json', 'yarn.lock'],
  },
  plugins: [sveltekit()],
});
