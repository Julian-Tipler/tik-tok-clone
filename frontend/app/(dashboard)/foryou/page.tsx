"use client";
import { fetchWithAuth } from "@/app/api/helpers/fetchWithAuth";
import React, { useEffect, useState } from "react";
import { Video } from "./Video";

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
  user_like?: boolean;
};

const ForYou = ({}) => {
  const [videos, setVideos] = useState<Video[]>([]);
  useEffect(() => {
    const fetchForYouVideos = async () => {
      const url = process.env.NEXT_PUBLIC_API_URL + "/videos";
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
          return <Video key={video.id} video={video} setVideos={setVideos} />;
        })}
      </div>
    </div>
  );
};

export default ForYou;
