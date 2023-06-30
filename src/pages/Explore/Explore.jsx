import { PostsCard } from "../../components/CardComponent/PostsCard";
import { usePost } from "../../context/PostContext/PostContext";

export const Explore = () => {
  const { posts } = usePost();
  console.log(posts);
  return (
    <div>
      <div className="post-card">
        {posts.map((post) => (
          <div key={post._id}>
            <PostsCard {...post} />
          </div>
        ))}
      </div>
    </div>
  );
};
