export interface State {
  jobs: Job[];
  isDarkMode: boolean;
  isFullTime: boolean;
  params: params;
  hasMoreJobs: boolean;
  isLoading: boolean;
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
  isLoading: true,
  params: {
    page: 1,
  },
  hasMoreJobs: true,
};

const ADD_JOBS = "ADD_JOBS";
const UPDATE_PARAMS = "UPDATE_PARAMS";
const TOGGLE_FULL_TIME = "TOGGLE_FULL_TIME";
const LOAD_MORE_JOBS = "LOAD_MORE_JOBS";
const TOGGLE_DARK_MODE = "TOGGLE_DARK_MODE";
const SET_LOADING_STATUS = "SET_LOADING_STATUS";

export const reducer = (state = intialState, action: Action): State => {
  switch (action.type) {
    case ADD_JOBS:
      return {
        ...state,
        jobs: action.payload,
        params: { ...state.params, page: state.params.page + 1 },
        hasMoreJobs: action.payload.length >= 50 ? true : false,
        isLoading: false,
      };
    case UPDATE_PARAMS:
      return {
        ...state,
        params: { ...action.payload, page: 0 },
        isLoading: true,
      };
    case SET_LOADING_STATUS:
      return { ...state, isLoading: true };
    case LOAD_MORE_JOBS:
      return {
        ...state,
        jobs: [...state.jobs, ...action.payload],
        params: { ...state.params, page: state.params.page + 1 },
        hasMoreJobs: action.payload.length >= 50 ? true : false,
        isLoading: false,
      };
    case TOGGLE_FULL_TIME:
      return {
        ...state,
        isFullTime: !state.isFullTime,
      };
    case TOGGLE_DARK_MODE:
      return { ...state, isDarkMode: !state.isDarkMode };
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

export const toggleDarkMode = (payload: null) => ({
  type: TOGGLE_DARK_MODE,
  payload,
});

export const setLoadingStatus = () => ({
  type: SET_LOADING_STATUS,
  payload: null,
});
