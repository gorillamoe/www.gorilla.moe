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
  const identifer = '(blog)/posts/';
  const allPostFiles = import.meta.glob<PostModule>('/src/routes/\\(blog\\)/posts/*.md');
  const iterablePostFiles = Object.entries(allPostFiles);

  const allPosts = await Promise.all(
    iterablePostFiles.map(async ([p, resolver]) => {
      const post = await resolver();
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
 * @param date - The date object
 * @returns The unix time
 */
export const convertDateToUnixTime = (date: Date): number => {
  return Math.floor(date.getTime() / 1000);
};
