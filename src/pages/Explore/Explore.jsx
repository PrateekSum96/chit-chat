import { PostsCard } from "../../components/CardComponent/PostsCard";
import { usePost } from "../../context/PostContext/PostContext";
import "./Explore.css";

export const Explore = () => {
  const { posts } = usePost();
  console.log(posts);
  return (
    <div>
      <div>
        <h2>Explore</h2>
        <hr />
      </div>

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
