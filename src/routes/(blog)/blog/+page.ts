import type { Load } from '@sveltejs/kit';

export const load: Load = async ({ fetch }) => {
	const response = await fetch(`/api/blog/posts`);
	const posts = await response.json();

	return {
		posts
	};
};
