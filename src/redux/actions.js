import { LOADING_DATA, SUCCESS_DATA, ERROR_DATA } from "./types";

export const loading_data = () => {
  return {
    type: LOADING_DATA,
  };
};

export const success_data = (data) => {
  return {
    type: SUCCESS_DATA,
    payload: data,
  };
};

export const error_data = (error) => {
  return {
    type: ERROR_DATA,
    payload: error,
  };
};
