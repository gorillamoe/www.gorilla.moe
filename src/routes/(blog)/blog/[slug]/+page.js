import { error } from '@sveltejs/kit';

/**
 * @typedef {import('svelte').ComponentType} PostContent
 */

/**
 * @typedef {Object} PostMetadata
 * @property {string} title - The title of the post
 * @property {string} description - The description of the post
 * @property {string} created - The date the post was created
 * @property {string|undefined} updated - The date the post was last updated
 * @property {boolean} published - Whether the post is published
 */

/**
 * @typedef {Object} Post
 * @property {PostContent} default - The content of the post
 * @property {PostMetadata} metadata - The metadata of the post
 */

/**
 * Load a markdown post
 * @param {string} moduleKey - The module key of the post
 * @returns {Promise<Post>} - The post
 */
const loadMarkdownPost = async (moduleKey) => {
	const modules = import.meta.glob('../../posts/*.md');
	const module = modules[moduleKey];
	const post = /** @type {Post} */ (await module());
	if (!post.metadata) {
		throw new Error('Metadata is required');
	}
	if (!post.metadata.published) {
		throw new Error('Post is not published');
	}
	return post;
};

/**
 * @type {import('@sveltejs/kit').RequestHandler}
 * @returns {Promise<{metadata: PostMetadata, content: PostContent}>}
 */
export async function load({ params }) {
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
		const ex = /** @type {Error} */ (e);
		console.log('error', ex.toString());
	}
	error(404, 'Not found');
}
