import { error } from '@sveltejs/kit';
import type { ComponentType } from 'svelte';
import type { Load } from '@sveltejs/kit';

interface MarkdownFileMetadata {
  title: string;
  description: string;
  date: string;
}

interface MarkdownFile {
  default: ComponentType;
  metadata: MarkdownFileMetadata;
}

/**
 * Load a markdown file
 * @returns The markdown post
 */
const loadMarkdownContent = async (): Promise<MarkdownFile> => {
  const modules = import.meta.glob<MarkdownFile>('../uses.md');
  const module = modules['../uses.md'];
  if (!module) {
    throw new Error('Module not found');
  }
  const markdown = await module();
  if (!markdown.metadata) {
    throw new Error('Metadata is required');
  }
  return markdown;
};

export const load: Load = async () => {
  try {
    const markdown = await loadMarkdownContent();
    const metadata = markdown.metadata;
    const content = markdown.default;
    return {
      metadata,
      content
    };
  } catch (e) {
    const ex = e as Error;
    console.log('error', ex.toString());
  }
  error(404, 'Not found');
};
