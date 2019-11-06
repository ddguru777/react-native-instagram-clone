import * as ACTION_TYPES from "../constants/action-types";

export const searchUsers = (searchTerm) => ({
  types: [
    ACTION_TYPES.UNSP_USER_SEARCH_REQUESTED,
    ACTION_TYPES.UNSP_USER_SEARCH_SUCCESS,
    ACTION_TYPES.UNSP_USER_SEARCH_FAILED
  ],
  payload: {
    client: "unsplash",
    request: {
      method: "GET",
      url: "/search/users",
      params: {
        per_page: 20,
        query: searchTerm
      }
    }
  }
});

export const listUphotos = (username) => ({
  types: [
    ACTION_TYPES.UNSP_USER_PHOTOS_REQUESTED,
    ACTION_TYPES.UNSP_USER_PHOTOS_SUCCESS,
    ACTION_TYPES.UNSP_USER_PHOTOS_FAILED
  ],
  payload: {
    client: "unsplash",
    request: {
      method: "GET",
      url: "/users/"+username+"/photos",
      params: {
        per_page: 20,
      }
    }
  }
});