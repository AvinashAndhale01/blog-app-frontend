import { useState, useEffect } from "react";
import { getPosts } from "../services/postService";
import type { Post } from "../types/post";
import PostCard from "../components/PostCard";

function Home() {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    async function fetchPosts() {
      try {
        const data = await getPosts();
        setPosts(data);
      } catch (error) {
        console.error("Failed to load posts:", error);
      }
    }

    fetchPosts();
  }, []);

  return (
    <div className="container mx-auto p-5">
      <h1 className="text-4xl font-bold mb-8">Blog Application</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}

export default Home;
