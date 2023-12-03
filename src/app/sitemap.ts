import { BlogPostsResponse } from "@/models/BlogPost";
import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const response = await fetch("https://dummyjson.com/posts");
  const { posts }: BlogPostsResponse = await response.json();

  const postEntries: MetadataRoute.Sitemap = posts.map(({ id }) => ({
    url: `${process.env.NEXT_PUBLIC_BASE_URL}/posts/${id}`,
    // lastModified: new Date(post.updatedAt),
    // changeFrequency:,
    // priority:
  }));

  return [
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/about`,
      lastModified: new Date(),
    },
    ...postEntries,
  ];
}
