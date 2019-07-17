import { SIGN_IN, SIGN_OUT } from "./types";

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
