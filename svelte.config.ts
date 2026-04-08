import adapter from "@sveltejs/adapter-static";
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";
import { mdsvex } from "mdsvex";
import rehypeSlug from "rehype-slug-custom-id";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import { getMdsvexShikiHighlighter } from "@mistweaverco/mdsvex-shiki";
import type { Config } from "@sveltejs/kit";
import type { Plugin, Settings } from "unified";

const config: Config = {
  kit: {
    adapter: adapter({
      pages: "build",
      assets: "build",
      fallback: undefined,
      precompress: true,
      strict: true,
    }),
    alias: {
      $lib: "./src/lib",
    },
  },
  extensions: [".svelte", ".md"],
  preprocess: [
    vitePreprocess(),
    mdsvex({
      highlight: {
        highlighter: await getMdsvexShikiHighlighter({
          displayLanguage: true,
          displayPath: true,
        }),
      },
      rehypePlugins: [
        rehypeSlug as unknown as Plugin,
        [
          rehypeAutolinkHeadings as unknown as Plugin,
          {
            behavior: "wrap",
            content: {
              type: "element",
              tagName: "span",
              properties: {
                ariaHidden: "true",
                className: ["fa", "fa-link"],
              },
            },
          } as unknown as Settings,
        ],
      ],
      extension: ".md",
    }),
  ],
};

export default config;
