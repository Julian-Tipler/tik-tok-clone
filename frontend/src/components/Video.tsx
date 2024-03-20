import { Video as VideoType } from "../views/ForYou";
import { InteractionButton } from "./InteractionButton";

export const Video = ({ video }: { video: VideoType }) => {
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
          <div>
            <InteractionButton symbol={"like"} />
            <div>number</div>
          </div>
          <div>
            <InteractionButton symbol={"message"} />
            <div>number</div>
          </div>
          <div>
            <InteractionButton symbol={"save"} />
            <div>number</div>
          </div>
          <div>
            <InteractionButton symbol={"share"} />
            <div>number</div>
          </div>
        </div>
      </div>
    </div>
  );
};
