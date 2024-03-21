import { useEffect, useState } from "react";
import { fetchWithAuth } from "../api/helpers/fetchWithAuth";
import { Video } from "../components/Video";

export type Like = {
  id: number;
  likeable_type: string;
  likeable_id: number;
  user_id: number;
  created_at: string;
  updated_at: string;
};

export type Video = {
  id: number;
  created_at: string;
  description: string;
  thumbnail_url: string;
  title: string;
  updated_at: string;
  user_id: number;
  video_url: string;
  view_count: number;
  likes: Like;
  likes_count: number;
  comments_count: number;
};

export const ForYou = () => {
  const [videos, setVideos] = useState<Video[]>([]);
  useEffect(() => {
    const fetchForYouVideos = async () => {
      const url = import.meta.env.VITE_API_URL + "/videos";
      const videos: Video[] = await fetchWithAuth(url);
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
          return <Video video={video} />;
        })}
      </div>
    </div>
  );
};
