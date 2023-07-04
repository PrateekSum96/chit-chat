import { createContext, useContext, useEffect, useState } from "react";

const UserContext = createContext();

const useUser = () => useContext(UserContext);

const UserProvider = ({ children }) => {
  const [user, setUser] = useState([]);
  const getPost = async () => {
    try {
      const response = await fetch("/api/users");
      const result = await response.json();
      setUser(result.users);
    } catch (e) {
      console.error(e);
    }
  };
  useEffect(() => {
    getPost();
  }, []);
  return (
    <UserContext.Provider value={{ user }}>{children}</UserContext.Provider>
  );
};

export { UserContext, UserProvider, useUser };
