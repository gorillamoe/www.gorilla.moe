import { error } from '@sveltejs/kit';
import type { ComponentType } from 'svelte';
import type { Load } from '@sveltejs/kit';

interface PostMetadata {
	title: string;
	description: string;
	created: string;
	updated?: string;
	published: boolean;
}

interface Post {
	default: ComponentType;
	metadata: PostMetadata;
}

/**
 * Load a markdown post
 * @param moduleKey - The module key of the post
 * @returns The post
 */
const loadMarkdownPost = async (moduleKey: string): Promise<Post> => {
	const modules = import.meta.glob<Post>('../../posts/*.md');
	const module = modules[moduleKey];
	if (!module) {
		throw new Error('Module not found');
	}
	const post = await module();
	if (!post.metadata) {
		throw new Error('Metadata is required');
	}
	if (!post.metadata.published) {
		throw new Error('Post is not published');
	}
	return post;
};

export const load: Load = async ({ params }) => {
	const slug = params.slug?.replace(/[^a-z0-9-_]/gi, '');
	const moduleKey = `../../posts/${slug}.md`;
	try {
		const post = await loadMarkdownPost(moduleKey);
		const metadata = post.metadata;
		const content = post.default;
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
