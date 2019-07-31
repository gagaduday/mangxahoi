import { SIGN_IN_FB, SIGN_OUT_FB } from "../actions/types";

const INITIAL_STATE = {
  isSignedIn: null,
  userId: null
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SIGN_IN_FB:
      return { ...state, isSignedIn: true, userId: action.payload };
    case SIGN_OUT_FB:
      return { ...state, isSignedIn: false, userId: null };
    default:
      return state;
  }
};
