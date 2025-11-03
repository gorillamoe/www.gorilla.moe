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
 * @property {String} path - The path of the post
 * @property {PostMetadata} metadata - The metadata of the post
 */

/**
 * Fetch all markdown posts
 * @returns {Promise<Array<Post>>} - All markdown posts
 */
export const fetchMarkdownPosts = async () => {
	const identifer = '(blog)/posts/';
	const allPostFiles = import.meta.glob('/src/routes/\\(blog\\)/posts/*.md');
	const iterablePostFiles = Object.entries(allPostFiles);

	const allPosts = await Promise.all(
		iterablePostFiles.map(async ([p, resolver]) => {
			const post = /** @type Post */ (await resolver());
			const substringStart = p.lastIndexOf(identifer) + identifer.length;
			const path = 'blog/' + p.substring(substringStart).replace('.md', '');
			const metadata = post.metadata;

			return {
				metadata,
				path
			};
		})
	);

	return allPosts;
};

/**
 * Get the unix time from a date object
 * @param {Date} date - The date object
 * @returns {number} - The unix time
 */
export const convertDateToUnixTime = (date) => {
	return Math.floor(date.getTime() / 1000);
};
