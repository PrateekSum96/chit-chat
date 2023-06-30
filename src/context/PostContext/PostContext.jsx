import { createContext, useContext, useEffect, useState } from "react";

const PostContext = createContext();

const usePost = () => useContext(PostContext);

const PostProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);
  const getPost = async () => {
    try {
      const response = await fetch("/api/posts");
      const result = await response.json();
      setPosts(result.posts);
      console.log(result.posts);
    } catch (e) {
      console.error(e);
    }
  };
  useEffect(() => {
    getPost();
  }, []);

  return (
    <PostContext.Provider value={{ posts }}>{children}</PostContext.Provider>
  );
};

export { PostContext, PostProvider, usePost };
