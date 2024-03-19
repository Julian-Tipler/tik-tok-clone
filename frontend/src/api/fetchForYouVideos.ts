import { fetchWithAuth } from "./helpers/fetchWithAuth";

export const fetchForYouVideos = async () => {
  const url = import.meta.env.VITE_API_URL + "/videos";
  const data = await fetchWithAuth(url);
  console.log(data)
  return data;
};
