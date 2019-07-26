import sns from "../apis/sns";
import history from "../history";
import {
  SIGN_IN,
  SIGN_OUT,
  CREATE_POST,
  FETCH_POSTS,
  FETCH_POST,
  FETCH_POST_FAILURE,
  FETCH_POST_SUCCESS,
  DELETE_POST,
  EDIT_POST
} from "./types";

// đăng nhập bằng google
export const signIn = userId => {
  return {
    type: SIGN_IN,
    payload: userId
  };
};

export const signOut = () => {
  return {
    type: SIGN_OUT
  };
};

// // tạo post
export const createPost = values => async (dispatch, getState) => {
  const { userId } = getState().auth;
  const response = await sns.post("/posts", { ...values, userId });
  dispatch({ type: CREATE_POST, payload: response.data });
  history.push("/");
};

// hiện nhiều post
export const fetchPosts = () => async dispatch => {
  const response = await sns.get("/posts");
  dispatch({ type: FETCH_POSTS, payload: response.data });
};

// hiện 1 post
export const fetchPost = id => async dispatch => {
  dispatch({ type: FETCH_POST });
  try {
    const response = await sns.get(`/posts/${id}`);
    dispatch({ type: FETCH_POST_SUCCESS, payload: response.data });
  } catch (e) {
    dispatch({ type: FETCH_POST_FAILURE, error: e });
  }
};

// sửa post
export const editPost = (id, values) => async dispatch => {
  const response = await sns.patch(`/posts/${id}`, values);
  dispatch({ type: EDIT_POST, payload: response.data });
  history.push("/");
};

// xoắ post
export const deletePost = id => async dispatch => {
  await sns.delete(`posts/${id}`);
  dispatch({ type: DELETE_POST, payload: id });
  history.push("/");
};
