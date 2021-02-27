import { loadMoreJobs, params } from "./../state/State";
import axios from "axios";
const BASE_URL =
  "https://cors.bridged.cc/https://jobs.github.com/positions.json";

export const fetchJobPostings = (params: params) =>
  axios.get(BASE_URL, {
    headers: { "X-Requested-With": "XMLHttpRequest" },
    params: params,
  });

export const fetchMoreJobs = async (params: params, dispatch: any) => {
  const { data } = await axios.get(BASE_URL, {
    headers: { "X-Requested-With": "XMLHttpRequest" },
    params: params,
  });
  dispatch(loadMoreJobs(data));
};
