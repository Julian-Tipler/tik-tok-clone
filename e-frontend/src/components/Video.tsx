import { fetchWithAuth } from "../api/helpers/fetchWithAuth";
import { useAuth } from "../views/AuthContext";
import { Video as VideoType } from "../views/ForYou";
import { useModal } from "../views/ModalContext";
import { InteractionButton } from "./InteractionButton";
import { VideoModal } from "./VideoModal";

export const Video = ({
  video,
  setVideos,
}: {
  video: VideoType;
  setVideos: React.Dispatch<React.SetStateAction<VideoType[]>>;
}) => {
  const { user } = useAuth();
  const { showModal } = useModal();
  const disabled = !user;

  const handleLike = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const url =
      import.meta.env.VITE_API_URL + "/videos" + "/" + video.id + "/like";
    const updatedVideo = await fetchWithAuth(url, { method: "POST" });
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
      }),
    );
  };

  const handleComment = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    showModal(<VideoModal />);
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
