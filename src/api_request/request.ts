import axios from "axios";

const BASE_URL =
  "https://cors.bridged.cc/https://jobs.github.com/positions.json";

export const getJobPostings = () => axios.get(BASE_URL);
