import { fetchWithAuth } from "../api/helpers/fetchWithAuth";
import { useAuth } from "../views/AuthContext";
import { Video as VideoType } from "../views/ForYou";
import { InteractionButton } from "./InteractionButton";

export const Video = ({ video }: { video: VideoType }) => {
  const { user } = useAuth();
  const disabled = !user;

  const handleLike = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const url =
      import.meta.env.VITE_API_URL + "/videos" + "/" + video.id + "/like";
    const response = await fetchWithAuth(url, { method: "POST" });
    console.log(response);
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
            />
            <div>{video.likes_count}</div>
          </div>
          <div className="flex flex-col items-center">
            <InteractionButton
              symbol={"message"}
              disabled={disabled}
              action={async () => console.log("comment")}
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
