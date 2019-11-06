// Describe the list of unsplash users
import * as ACTION_TYPES from "../constants/action-types";

const initialState = {
  searchTerm: '',
  list: undefined,
  isLoading: false,
  error: undefined,
  isFailed: false
};

export default (state = initialState, action) => {
  const { type, payload, error } = action;

  switch (type) {
    case ACTION_TYPES.UNSP_USER_SEARCH_REQUESTED:
      return {
        ...state,
        isLoading: true,
        isFailed: false
      };
    case ACTION_TYPES.UNSP_USER_SEARCH_SUCCESS:
      return {
        list: payload.data,
        isLoading: false,
        isFailed: false
      };
    case ACTION_TYPES.UNSP_USER_SEARCH_FAILED:
      return {
        error: error.data,
        isLoading: false,
        isFailed: true
      };
    default:
      return state;
  }
};
