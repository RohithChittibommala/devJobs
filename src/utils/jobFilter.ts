import { Job } from "./../state/State";
export const filterJobs = (jobs: Job[], filter: boolean): Job[] => {
  const type = filter ? "Full Time" : "Part Time";
  return jobs.filter((job) => job.type === type);
};
