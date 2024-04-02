import React from "react";
import { InteractionButton } from "./InteractionButton";
import { Video } from "../(dashboard)/foryou/page";
import { likeVideo } from "../api/likeVideo";

export const VideoModal = ({ video }: { video: Video }) => {
  const handleLike = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    const updatedVideo = await likeVideo(video.id);
    setVideos((prevVideos) =>
      prevVideos.map((v) => {
        if (v.id === video.id) {
          return {
            ...v,
            likes_count: updatedVideo.likes_count,
            user_like: updatedVideo.user_like,
          };
        }
        return v;
      })
    );
  };
  return (
    <div key={video.id} className="flex w-96 flex-col p-4">
      {/* title */}
      <div className="flex flex-col">
        <h3 className="font-bold">{video.title}</h3>
        <p className="text-sm">{video.description}</p>
      </div>
      <div className="flex gap-5">
        <video className="h-96 rounded-lg" controls src={video.video_url} />
        {/* buttons */}
        <div className="flex flex-col items-center justify-end">
          <div className="flex flex-col items-center">
            <InteractionButton
              symbol={"like"}
              action={handleLike}
              disabled={disabled}
              highlighted={!!video.user_like}
            />
            <div>{video.likes_count}</div>
          </div>
          <div className="flex flex-col items-center">
            <InteractionButton
              symbol={"message"}
              disabled={disabled}
              action={handleComment}
            />
            <div>{video.comments_count}</div>
          </div>
          <div className="flex flex-col items-center">
            <InteractionButton
              symbol={"save"}
              disabled={disabled}
              action={async () => console.log("comment")}
            />
            <div>3</div>
          </div>
          <div className="flex flex-col items-center">
            <InteractionButton
              symbol={"share"}
              disabled={disabled}
              action={async () => console.log("comment")}
            />
            <div>4</div>
          </div>
        </div>
      </div>
    </div>
  );
};
