import { useState, useEffect } from "react";
import {
  getAuth,
  onAuthStateChanged,
  getIdToken,
  updateProfile,
} from "firebase/auth";
import { APP_URL } from "../constants";

export const useGetUser = (id) => {
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const api = `/users/${id}`;
  const auth = getAuth();

  useEffect(() => {
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        setIsLoading(true);
        try {
          const idToken = await getIdToken(user);
          const response = await fetch(APP_URL + api, {
            method: "GET",
            headers: new Headers({
              Authorization: `Bearer ${idToken}`,
            }),
          });
          const data = await response.json();
          setUser(data);
        } catch (err) {
          throw new Error(err);
        } finally {
          setIsLoading(false);
        }
      } else {
        // User is signed out
        // ...
        console.log("User is not Authenticated");
      }
    });
  }, [auth, api]);

  return [user, isLoading];
};

