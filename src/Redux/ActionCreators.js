import * as actionTypes from "./ActionTypes";

export const addComment = (dishId, author, rating, comment, date) => ({
  type: actionTypes.ADD_COMMENT,
  payload: {
    dishId: dishId,
    author: author,
    rating: rating,
    comment: comment,
    date: date,
  },
});
