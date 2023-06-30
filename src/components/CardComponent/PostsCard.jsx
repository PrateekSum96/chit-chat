import "./PostsCard.css";

export const PostsCard = (post) => {
  return (
    <div>
      <div className="card-post-container">
        <div className="user-info">
          <div className="user-image">
            <img src="" alt={post.firstname[0]} />
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
        <div>{post.content}</div>
        <div className="post-image">
          <img src={post.mediaURL} alt="" />
        </div>
      </div>
    </div>
  );
};
