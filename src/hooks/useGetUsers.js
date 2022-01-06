import { useState, useEffect } from "react";
import { APP_URL } from "../constants";

export const useGetUsers = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const api = "/users";

  useEffect(() => {
    setIsLoading(true);

    const getUsers = async () => {
      try {
        const response = await fetch(APP_URL + api);
        const data = await response.json();
        setUsers(data);
      } catch (err) {
        throw new Error(err);
      } finally {
        setIsLoading(false);
      }
    };

    getUsers();
  }, []);

  return [users, isLoading];
};
