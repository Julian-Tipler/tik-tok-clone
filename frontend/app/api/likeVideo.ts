import { fetchWithAuth } from "./helpers/fetchWithAuth";

export const likeVideo = async (videoId: number) => {
  const url = process.env.NEXT_PUBLIC_API_URL + "/videos/" + videoId + "/like";
  const response = await fetchWithAuth(url, {
    method: "POST",
  });
  return response;
};
