import { fetchMarkdownPosts, convertDateToUnixTime } from '$lib/utils/blog';
import { json } from '@sveltejs/kit';

export const GET = async () => {
	const allPosts = await fetchMarkdownPosts();

	// Sort posts by date, newest first
	const sortedPosts = allPosts.sort((a, b) => {
		const d1 = new Date(a.metadata.date);
		const u1 = convertDateToUnixTime(d1);
		const d2 = new Date(b.metadata.date);
		const u2 = convertDateToUnixTime(d2);
		return u2 - u1;
	});

	return json(sortedPosts);
};
