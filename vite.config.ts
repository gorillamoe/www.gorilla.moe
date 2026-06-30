import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig, type PluginOption } from 'vite-plus';
import { svelteSitemap } from 'svelte-sitemap/vite';

export default defineConfig({
  staged: {
    '*': 'vp check --fix',
  },
  logLevel: process.env.NODE_ENV === 'production' ? 'silent' : 'info',
  lint: {
    plugins: ['oxc', 'typescript', 'unicorn', 'react'],
    categories: {
      correctness: 'warn',
    },
    env: {
      builtin: true,
    },
    ignorePatterns: ['pnpm-lock.yaml', '**node_modules/**', '**build/**', '**.svelte-kit/**'],
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
    ignorePatterns: ['pnpm-lock.yaml', '**node_modules/**', '**build/**', '**.svelte-kit/**'],
  },
  plugins: [
    sveltekit() as unknown as PluginOption,
    svelteSitemap({
      domain: 'https://gorilla.moe',
      trailingSlashes: false,
      ignore: ['/404.html', '/500.html', '/google*.html'],
    }) as unknown as PluginOption,
  ],
});
