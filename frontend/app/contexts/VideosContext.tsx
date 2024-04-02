"use client";

import { useContext, useEffect, useState, createContext } from "react";
import { fetchWithAuth } from "../api/helpers/fetchWithAuth";

const VideosContext = createContext<VideosContextType>({} as VideosContextType);

export type Video = {
  id: number;
  title: string;
  description: string;
  video_url: string;
  likes_count: number;
  comments_count: number;
  user_like: boolean;
};

type VideosContextType = {
  videos: Video[];
  setVideos: React.Dispatch<React.SetStateAction<Video[]>>;
};

export function useVideos() {
  return useContext(VideosContext);
}

export const VideosProvider = ({ children }: { children: React.ReactNode }) => {
  const [videos, setVideos] = useState<Video[]>([]);
  useEffect(() => {
    const fetchForYouVideos = async () => {
      const url = process.env.NEXT_PUBLIC_API_URL + "/videos";
      const videos: Video[] = await fetchWithAuth(url);
      setVideos(videos);
    };
    fetchForYouVideos();
  }, []);

  return (
    <VideosContext.Provider value={{ videos, setVideos }}>
      {children}
    </VideosContext.Provider>
  );
};
