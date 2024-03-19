import { useEffect, useState } from "react";
import { fetchWithAuth } from "../api/helpers/fetchWithAuth";

export const ForYou = () => {
  const [videos, setVideos] = useState<any[]>([]);
  useEffect(() => {
    const fetchForYouVideos = async () => {
      const url = import.meta.env.VITE_API_URL + "/videos";
      const videos = await fetchWithAuth(url);
      setVideos(videos);
    };
    fetchForYouVideos();
  }, []);
  if (!videos.length)
    return <div className="flex items-center justify-center">Loading...</div>;
  return (
    <div className="flex flex-1 flex-col items-center justify-center">
      <div className="w-128">
        {videos.map((video) => {
          return (
            <div key={video.id} className="flex w-96 flex-col">
              <video className="h-96" controls src={video.video_url} />
              <div className="flex flex-col">
                <p>{video.title}</p>
                <p>{video.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
