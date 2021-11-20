import * as actionTypes from './constants';


import {
  getSearchList
} from "@/services/search.js";


export const getSearchAction = (res) => ({
  type: actionTypes.CHANGE_SEARCH,
  list: res
})



export const getSearch = (keywords) => {
  return dispatch => {
    getSearchList(keywords).then(res => {
      dispatch(getSearchAction(res.result.songs));
    })
  }
}


