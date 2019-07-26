import _ from "lodash";
import {
  CREATE_POST,
  FETCH_POSTS,
  FETCH_POST,
  DELETE_POST,
  EDIT_POST,
  FETCH_POST_SUCCESS,
  FETCH_POST_FAILURE
} from "../actions/types";

export default (state = {}, action) => {
  switch (action.type) {
    case CREATE_POST:
      return { ...state, [action.payload.id]: action.payload };
    case FETCH_POSTS:
      return { ...state, ..._.mapKeys(action.payload, "id") };
    case FETCH_POST:
      return {
        ...state,
        isFetching: true,
        error: null
      };
    case FETCH_POST_SUCCESS:
      return {
        ...state,
        [action.payload.id]: action.payload,
        isFetching: false,
        error: null
      };
    case FETCH_POST_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.payload.error
      };
    case EDIT_POST:
      return { ...state, [action.payload.id]: action.payload };
    case DELETE_POST:
      return _.omit(state, action.payload);
    default:
      return state;
  }
};
