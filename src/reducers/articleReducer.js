import { actionType } from "./../actions/actionType";
const globalState = {
  articles: []
};
export const articleReducer = (state = globalState, action) => {
  switch (action.type) {
    case actionType.FETCH_ARTICLE:
      return { ...state, articles: action.payload };
    case actionType.ADD_ARTICLE:
      return { ...state, articles: action.payload };
    case actionType.DELETE_ARTICLE:
      return { articles: action.payload };
    case actionType.UPDATE_ARTICLE:
      return state;
    default:
      return state;
  }
};
