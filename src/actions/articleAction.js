import axios from "axios";
import { actionType } from "./actionType";
export const fetchArticle = () => {
  return dispatch => {
    axios.get("http://www.api-ams.me/v1/api/articles?page=1&limit=15")
      .then(res => {
        dispatch({
          type: actionType.FETCH_ARTICLE,
          payload: res.data.DATA,
        });
      })
      .catch(err => console.log(err));
  };
};

export const addArticle = () => {
  return dispatch => {
    axios.post("http://www.api-ams.me/v1/api/articles").then(res =>
      dispatch({
        type: actionType.ADD_ARTICLE,
        payload: res.data.DATA
      })
    );
  };
};
export const deleteArticle = id => {
  return dispatch => {
    axios.delete("http://www.api-ams.me/v1/api/articles/" + id).then(res => {
      dispatch({
        type: actionType.DELETE_ARTICLE,
        payload: res.data,
        setState: {
          isAdd: false,
          isUpdate: false,
          isDelete: true
        }
      });
    });
  };
};
