import { useState } from "react";
import { useUser } from "../../context/UserContext/UserContext";
import "./PostsCard.css";

export const PostsCard = (post) => {
  const [likeCount, setLikeCount] = useState(post.likes.likeCount);
  const [liked, setLiked] = useState(false);

  const { user } = useUser();
  const getUserImage = (postUserName) => {
    const userFound = user.find(({ username }) => username === postUserName);
    return userFound.avatarUrl;
  };
  const Media = ({ url }) => {
    if (url.includes("image")) {
      return <img src={url} alt="" />;
    } else if (url.includes("video")) {
      return (
        <video controls id="video">
          <source src={url} type="video/mp4" />
        </video>
      );
    }
  };
  const likePost = () => {
    if (liked) {
      setLiked(false);
      setLikeCount(() => likeCount - 1);
    } else {
      setLiked(true);
      setLikeCount(() => likeCount + 1);
    }
  };
  return (
    <div>
      <div className="card-post-container">
        <div className="user-info">
          <div className="user-image">
            <img src={getUserImage(post.username)} alt={post.firstname[0]} />
          </div>
          <div className="user-name">
            <div>
              <span> {post.firstname}</span>
              <span> {post.lastname}</span>
            </div>
            <div>@{post.username}</div>
          </div>
        </div>
        <hr />
        <div id="post-content">{post.content}</div>
        <div className="post-image">
          <Media url={post.mediaURL} />
        </div>
        <hr />
        <div className="explore-post-icons">
          <i
            class={`${liked ? "fa-solid" : "fa-regular"} fa-heart fa-lg`}
            style={{ color: liked ? "red" : "" }}
            onClick={likePost}
          ></i>
          <span id="like-count" style={{ color: liked ? "red" : "" }}>
            {likeCount}
          </span>
          <i class="fa-regular fa-bookmark fa-lg" id="explore-bookmark"></i>
        </div>
      </div>
    </div>
  );
};
