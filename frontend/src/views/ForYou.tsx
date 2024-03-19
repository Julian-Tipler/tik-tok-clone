import { useEffect } from "react";
import { fetchForYouVideos } from "../api/fetchForYouVideos";

export const ForYou = () => {
  useEffect(() => {
    fetchForYouVideos();
  });
  return (
    <div className="align-center flex flex-1 flex-col justify-center"></div>
  );
};
