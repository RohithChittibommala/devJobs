import { Job } from "./../state/State";
export const filterJobs = (jobs: Job[]): Job[] => {
  const type = "Full Time";
  return jobs.filter((job) => job.type === type);
};
