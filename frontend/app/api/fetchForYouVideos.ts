import { fetchWithAuth } from "./helpers/fetchWithAuth";

export const fetchForYouVideos = async () => {
  const url = process.env.NEXT_PUBLIC_API_URL + "/videos";
  const data = await fetchWithAuth(url);
  return data;
};
