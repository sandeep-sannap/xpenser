import {
  ADD_EXPENSE,
  DELETE_EXPENSE,
  SEARCH_EXPENSE,
} from "../actionTypes/expenses";
export const addExpense = (data) => {
  console.log(data);
  return {
    type: ADD_EXPENSE,
    data,
  };
};

export const deleteExpense = (data) => {
  return {
    type: DELETE_EXPENSE,
    data,
  };
};

export const searchQuery = (query) => {
  return {
    type: SEARCH_EXPENSE,
    query,
  };
};
