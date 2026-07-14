/**
  * @typedef {Object} PostMetadata
  * @property {string} title - The title of the post
  * @property {string} excerpt - The excerpt of the post - used in the preview card
  * @property {string} description - The description of the post - used in the meta description tag
  * @property {string} created - The creation date of the post in the format YYYY-MM-DD
  * @property {string} [updated] - The last updated date of the post in the format YYYY-MM-DD (optional)
  * @property {string[]} tags - The tags of the post
  */
export interface PostMetadata {
  title: string;
  excerpt: string;
  description: string;
  created: string;
  updated?: string;
  tags: string[];
}

export interface Post {
  path: string;
  metadata: PostMetadata;
}

interface PostModule {
  default: unknown;
  metadata: PostMetadata;
}

/**
 * Fetch all markdown posts
 * @returns All markdown posts
 */
export const fetchMarkdownPages = async (): Promise<Post[]> => {
  const allPostFiles = import.meta.glob<PostModule>('./../../../wiki-data/*.md');

  const allPosts = await Promise.all(
    Object.entries(allPostFiles).map(async ([p, resolver]) => {
      const post = await resolver();
      const slug = p.split('/').pop()?.replace(/\.md$/, '') ?? '';
      const path = `wiki/${slug}`;
      const metadata = post.metadata;

      return {
        metadata,
        path,
      };
    }),
  );

  return allPosts;
};

/**
 * Get the unix time from a date object
 * @param date - The date object
 * @returns The unix time
 */
export const convertDateToUnixTime = (date: Date): number => {
  return Math.floor(date.getTime() / 1000);
};
