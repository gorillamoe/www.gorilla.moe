import type { Load } from '@sveltejs/kit';

export const load: Load = async ({ fetch }) => {
  const response = await fetch(`/api/wiki/pages`);
  const posts = await response.json();

  return {
    posts,
  };
};
