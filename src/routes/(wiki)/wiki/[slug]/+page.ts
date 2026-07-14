import { error } from '@sveltejs/kit';
import { fetchMarkdownPages } from '$lib/utils/wiki';
import type { Component } from 'svelte';
import type { Load } from '@sveltejs/kit';

/** Tells the static prerender which `/wiki/[slug]` paths exist (crawl does not discover API-driven links). */
export const entries = async () => {
  const posts = await fetchMarkdownPages();
  return posts.filter((p) => p.metadata.published).map((p) => ({ slug: p.path.replace(/^wiki\//, '') }));
};

interface PostMetadata {
  title: string;
  description: string;
  created: string;
  updated?: string;
  published: boolean;
}

interface Post {
  default: Component;
  metadata: PostMetadata;
}

/**
 * Load a markdown post
 * @param moduleKey - The module key of the post
 * @returns The post
 */
const loadMarkdownPost = async (moduleKey: string): Promise<Post> => {
  const modules = import.meta.glob<Post>('../../../../wiki-data/*.md');
  const module = modules[moduleKey];
  if (!module) {
    throw new Error('Module not found');
  }
  const post = await module();
  if (!post.metadata) {
    throw new Error('Metadata is required');
  }
  return post;
};

export const load: Load = async ({ params }) => {
  const slug = params.slug?.replace(/[^a-z0-9-_]/gi, '');
  const moduleKey = `../../../../wiki-data/${slug}.md`;
  try {
    const post = await loadMarkdownPost(moduleKey);
    const metadata = post.metadata;
    const content = post.default;
    return {
      metadata,
      content,
    };
  } catch (e) {
    const ex = e as Error;
    console.log('error', ex.toString());
  }
  error(404, 'Not found');
};
