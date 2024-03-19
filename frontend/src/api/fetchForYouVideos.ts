export const fetchForYouVideos = async () => {
  const url = import.meta.env.VITE_API_URL + "/videos";
  console.log(url);
  const response = await fetch(url);
  console.log(response);
  // vite api env
};
