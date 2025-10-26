import { error } from '@sveltejs/kit';

/**
 * @typedef {import('svelte').ComponentType} MarkdownFileContent
 */

/**
 * @typedef {Object} MarkdownFileMetadata
 * @property {string} title - The title of the content
 * @property {string} description - The description of the content
 * @property {string} date - The update date of the content
 */

/**
 * @typedef {Object} MarkdownFile
 * @property {MarkdownFileContent} default - The content of the markdown file
 * @property {MarkdownFileMetadata} metadata - The metadata of the markdown file
 */

/**
 * Load a markdown post
 * @returns {Promise<MarkdownFile>} - The markdown file
 */
const loadMarkdownContent = async () => {
	const modules = import.meta.glob('../now.md');
	const module = modules['../projects.md'];
	const markdown = /** @type {MarkdownFile} */ (await module());
	if (!markdown.metadata) {
		throw new Error('Metadata is required');
	}
	return markdown;
};

/**
 * @type {import('@sveltejs/kit').RequestHandler}
 * @returns {Promise<{metadata: MarkdownFileMetadata, content: MarkdownFileContent}>}
 */
export async function load() {
	try {
		const markdown = await loadMarkdownContent();
		const metadata = markdown.metadata;
		const content = markdown.default;
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
