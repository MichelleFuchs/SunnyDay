import useApi from "./useApi.js";

const getForecast = coords => {
  const QUERY = "forecast";
  const config = {
    method: "POST",
    data: {
      coords: coords
    }
  };

  // eslint-disable-next-line react-hooks/rules-of-hooks
  return useApi(QUERY, config);
};

const fetchService = {
  getForecast
};

export default fetchService;
