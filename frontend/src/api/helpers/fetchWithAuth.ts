// Always use this wrapper, unauthorized requests will be handled by the server
type Options = {
  method?: "GET" | "POST" | "PUT" | "DELETE";
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  body?: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  headers?: any;
};

export const fetchWithAuth = async (url: string, options: Options = {}) => {
  const token = localStorage.getItem("authToken");
  const headers = {
    "Content-Type": "application/json",
    ...(token ? { Authorization: `Bearer ${token}` } : {}),
  };
  try {
    const response = await fetch(url, {
      ...options,
      headers: {
        ...options.headers,
        ...headers,
      },
    });

    const data = await response.json();
    if (!response.ok) {
      throw new Error(data.error || "Network response Error");
    }
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
