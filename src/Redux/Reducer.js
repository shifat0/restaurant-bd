import DISHES from "../data/dishes";
import COMMENTS from "../data/comments";
import { combineReducers } from "redux";

const dishReducer = (state = DISHES, action) => {
  return state;
};

const commentReducer = (state = COMMENTS, action) => {
  if (action.type === "ADD_COMMENT") {
    let comment = action.payload;
    comment.id = state.length;
    return state.concat(comment);
  }
  return state;
};

export const Reducer = combineReducers({
  dishes: dishReducer,
  comments: commentReducer,
});
