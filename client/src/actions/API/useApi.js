import axios from "axios";

const API_BASE_URI =
  process.env.NODE_ENV === "production"
    ? "/"
    : "http://localhost:" +
      (process.env.PORT ? process.env.PORT : "4545") +
      "/";

const useApi = (query, config = null) => {
  return axios(API_BASE_URI + query, { ...config });
};

export default useApi;
