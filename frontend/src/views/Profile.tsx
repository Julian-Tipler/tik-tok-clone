import { useEffect, useState } from "react";
import { fetchWithAuth } from "../api/helpers/fetchWithAuth";
import { Loading } from "../components/Loading";
import { useParams } from "react-router-dom";
import { User } from "./AuthContext";

export const Profile = () => {
  const [user, setUser] = useState<User | null>(null);
  const { id } = useParams();
  const url = import.meta.env.VITE_API_URL + "/users" + "/" + id;
  useEffect(() => {
    const fetchUser = async () => {
      const user = await fetchWithAuth(url);
      setUser(user);
    };
    fetchUser();
  }, [url]);

  if (!user) return <Loading />;
  return (
    <div>
      <div>{user.id}</div>
      <div>{user.username}</div>
      <div>{user.email}</div>
    </div>
  );
};
