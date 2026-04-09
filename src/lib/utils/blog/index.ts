export interface PostMetadata {
  title: string;
  description: string;
  created: string;
  updated?: string;
  published: boolean;
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
export const fetchMarkdownPosts = async (): Promise<Post[]> => {
  const allPostFiles = import.meta.glob<PostModule>('./../../../routes/(blog)/posts/*.md');

  const allPosts = await Promise.all(
    Object.entries(allPostFiles).map(async ([p, resolver]) => {
      const post = await resolver();
      const slug = p.split('/').pop()?.replace(/\.md$/, '') ?? '';
      const path = `blog/${slug}`;
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
