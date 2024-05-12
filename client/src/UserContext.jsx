import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const UserContext = createContext({});

export function UserContextProvider({ children }) {
  const [user, setUser] = useState(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get('/api/profile');
        setUser(response.data);
        setReady(true);
      } catch (error) {
        console.error("Error while fetching user data:", error);
        setReady(true); // Set ready to true even in case of an error
      }
    };

    if (!user) {
      fetchUserData();
    }
  }, [user]);

  return (
    <UserContext.Provider value={{ user, setUser, ready }}>
      {children}
    </UserContext.Provider>
  );
}
