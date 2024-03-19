import { useEffect, useState } from "react";
import { fetchWithAuth } from "../api/helpers/fetchWithAuth";
import { Loading } from "../components/Loading";
import { useNavigate } from "react-router-dom";

export const Following = () => {
  const navigate = useNavigate();
  const [following, setFollowing] = useState<any[]>([]);
  useEffect(() => {
    const fetchFollowing = async () => {
      const url = import.meta.env.VITE_API_URL + "/following";
      const following = await fetchWithAuth(url);
      setFollowing(following);
    };
    fetchFollowing();
  }, []);
  if (following.length === 0) return <Loading />;
  return (
    <div className="w-128 flex flex-1 flex-col items-start justify-start">
      {following.map((fol) => {
        return (
          <div className="flex items-start justify-start gap-2">
            <a
              className="cursor-pointer"
              onClick={() => navigate(`/profile/${fol.id}`)}
            >
              {fol.username}
            </a>
          </div>
        );
      })}
    </div>
  );
};
