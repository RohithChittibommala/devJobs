export interface State {
  jobs: Job[];
  isDarkMode: boolean;
  isFullTime: boolean;
  params: params;
  hasMoreJobs: boolean;
}
export type params = {
  location?: string;
  description?: string;
  page: 0 | number;
};

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
  isDarkMode: false,
  params: {
    page: 1,
  },
  hasMoreJobs: true,
};

const ADD_JOBS = "ADD_JOBS";
const ADD_SEARCHED_JOBS = "ADD_SEARCHED_JOBS";
const UPDATE_PARAMS = "UPDATE_PARAMS";
const TOGGLE_FULL_TIME = "TOGGLE_FULL_TIME";
export const LOAD_MORE_JOBS = "LOAD_MORE_JOBS";

export const reducer = (state = intialState, action: Action): State => {
  switch (action.type) {
    case ADD_JOBS:
      return {
        ...state,
        jobs: action.payload,
        params: { ...state.params, page: state.params.page + 1 },
        hasMoreJobs: action.payload.length >= 50 ? true : false,
      };
    case UPDATE_PARAMS:
      return {
        ...state,
        params: { ...action.payload, page: 0 },
      };
    case LOAD_MORE_JOBS:
      return {
        ...state,
        jobs: [...state.jobs, ...action.payload],
        params: { ...state.params, page: state.params.page + 1 },
        hasMoreJobs: action.payload.length >= 50 ? true : false,
      };
    case TOGGLE_FULL_TIME:
      return {
        ...state,
        isFullTime: !state.isFullTime,
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

export const updateParams = (payload: params) => ({
  type: UPDATE_PARAMS,
  payload,
});

export const loadMoreJobs = (payload: any) => ({
  type: LOAD_MORE_JOBS,
  payload,
});
