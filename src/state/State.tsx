import { filterJobs } from "../utils/jobFilter";

export interface State {
  jobs: Job[];
  filteredjobs: Job[];
  isDarkMode: boolean;
  isFullTime: boolean;
}

export type Action = {
  type: string;
  payload: any;
};

export interface Job {
  id: string;
  type: string;
  url: string;
  created_at: string;
  company: string;
  company_url: string;
  location: string;
  title: string;
  description: string;
  how_to_apply: string;
  company_logo: string;
}

export const intialState: State = {
  isFullTime: false,
  jobs: [],
  filteredjobs: [],
  isDarkMode: false,
};

const ADD_JOBS = "ADD_JOBS";
const ADD_SEARCHED_JOBS = "ADD_SEARCHED_JOBS";
const FILTER_JOBS = "FILTER_JOBS";
const TOGGLE_FULL_TIME = "TOGGLE_FULL_TIME";

export const reducer = (state = intialState, action: Action): State => {
  switch (action.type) {
    case ADD_JOBS:
      return { ...state, jobs: [...state.jobs, ...action.payload] };
    case ADD_SEARCHED_JOBS:
      return { ...state, jobs: [...action.payload] };
    case FILTER_JOBS:
      return { ...action.payload };
    case TOGGLE_FULL_TIME:
      return {
        ...state,
        isFullTime: !state.isFullTime,
        jobs: [...filterJobs(state.jobs, !state.isFullTime)],
      };
    default:
      return state;
  }
};

export const addJobs = (payload: Job[]) => ({
  type: ADD_JOBS,
  payload,
});

export const toggleIsFullTime = (payload: null) => ({
  type: TOGGLE_FULL_TIME,
  payload,
});
