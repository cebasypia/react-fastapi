import { useState, useEffect } from "react";
import { APP_URL } from "../constants";

export const useGetUsers = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const api = "/users";

  useEffect(() => {
    let isMounted = true;
    setIsLoading(true);

    const getUsers = async () => {
      try {
        const response = await fetch(APP_URL + api);
        const data = await response.json();
        if (isMounted) {
          setUsers(data);
        }
      } catch (err) {
        throw new Error(err);
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    };

    getUsers();

    return () => {
      isMounted = false;
    };
  }, []);

  return [users, isLoading];
};
