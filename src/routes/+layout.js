export const prerender = true;

/**
 * Load the layout data
 * @type {import('@sveltejs/kit').Load}
 */
export const load = ({ url }) => {
	const { pathname } = url;

	return {
		pathname
	};
};
