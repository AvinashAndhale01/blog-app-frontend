import { useNavigate } from "react-router-dom";
import type { Post } from "../types/post";

interface PostCardProps {
  post: Post;
}

const PostCard = ({ post }: PostCardProps) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/posts/${post.id}`);
  };

  return (
    <div
      onClick={handleClick}
      className="
        bg-white
        rounded-lg
        shadow-md
        p-5
        cursor-pointer
        hover:shadow-xl
        transition-shadow
        duration-300
        border
      "
    >
      <h2 className="text-2xl font-bold mb-2">{post.title}</h2>

      <p className="text-gray-600 mb-3 line-clamp-2">{post.description}</p>

      <div className="flex justify-between text-sm text-gray-500">
        <span>{post.author}</span>

        <span>{new Date(post.created_at).toLocaleDateString()}</span>
      </div>
    </div>
  );
};

export default PostCard;
