export interface State {
  jobs: Job[];
  isDarkMode: boolean;
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
  jobs: [],
  isDarkMode: false,
};

const ADD_JOBS = "ADD_JOBS";

export const reducer = (
  state = intialState,
  { type, payload }: Action
): State => {
  switch (type) {
    case ADD_JOBS:
      return { ...state, jobs: [...state.jobs, ...payload] };

    default:
      return state;
  }
};

export const addJobs = (payload: Job[]) => ({
  type: ADD_JOBS,
  payload,
});
