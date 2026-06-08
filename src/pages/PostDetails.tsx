import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { getPost } from "../services/postService";
import type { Post } from "../types/post";

export const PostDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState<Post | null>(null);

  useEffect(() => {
    async function fetchPost() {
      if (!id) return;

      try {
        const data = await getPost(Number(id));
        setPost(data);
      } catch (error) {
        console.error(error);
      }
    }

    fetchPost();
  }, [id]);

  if (!post) {
    return <div className="text-center mt-10">Loading...</div>;
  }

  return (
    <div className="max-w-4xl mx-auto p-5">
      <button
        onClick={() => navigate(-1)}
        className="
          mb-6
          px-4
          py-2
          bg-gray-200
          rounded
          hover:bg-gray-300
          transition
        "
      >
        ← Back
      </button>
      <h1 className="text-4xl font-bold mb-4">{post.title}</h1>

      <div className="text-gray-500 mb-6">By {post.author}</div>

      <div className="prose max-w-none">{post.description}</div>
    </div>
  );
};
