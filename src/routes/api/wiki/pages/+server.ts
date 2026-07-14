import { convertDateToUnixTime, fetchMarkdownPages } from '$lib/utils/wiki';
import { json } from '@sveltejs/kit';

export const GET = async () => {
  const allPosts = await fetchMarkdownPages();

  // Sort posts by "created" date, or by "updated" date if it exists
  const sortedPosts = allPosts.sort((a, b) => {
    const dateA = a.metadata.updated ? new Date(a.metadata.updated) : new Date(a.metadata.created);
    const dateB = b.metadata.updated ? new Date(b.metadata.updated) : new Date(b.metadata.created);
    return convertDateToUnixTime(dateB) - convertDateToUnixTime(dateA);
  });

  return json(sortedPosts);
};
