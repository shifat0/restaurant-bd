import * as actionTypes from "./ActionTypes";
import DISHES from "../data/dishes";

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

export const loadDisehs = (dishes) => ({
  type: actionTypes.LOAD_DISHES,
  payload: dishes,
});

export const dishesLoading = () => ({
  type: actionTypes.DISHES_LOADING,
});

export const fetchDishes = () => {
  return (dispatch) => {
    dispatch(dishesLoading());
    setTimeout(() => dispatch(loadDisehs(DISHES)), 2000);
  };
};
