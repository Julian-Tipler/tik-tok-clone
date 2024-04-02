"use client";
import { fetchWithAuth } from "@/app/api/helpers/fetchWithAuth";
import React, { useEffect, useState } from "react";
import { Video } from "./Video";
import { Video as VideoType, useVideos } from "@/app/contexts/VideosContext";

export type Like = {
  id: number;
  likeable_type: string;
  likeable_id: number;
  user_id: number;
  created_at: string;
  updated_at: string;
};

const ForYou = ({}) => {
  const { videos, setVideos } = useVideos();
  useEffect(() => {
    const fetchForYouVideos = async () => {
      const url = process.env.NEXT_PUBLIC_API_URL + "/videos";
      const videos: VideoType[] = await fetchWithAuth(url);
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
