export interface BlogPost {
  id: number;
  title: string;
  body: string;
}

export interface BlogPostsResponse {
  posts: BlogPost[];
}
