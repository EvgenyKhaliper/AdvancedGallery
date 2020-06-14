import axios from "axios";
import { SAVE_QUERY_URL, GET_QUERY_URL } from "./constants";

export const saveQuery = (query) => {
  return axios.post(SAVE_QUERY_URL, { query });
};

export const getQuery = () => {
  return axios.get(GET_QUERY_URL);
};
