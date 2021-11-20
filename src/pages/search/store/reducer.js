import { Map } from "immutable";
import * as actionTypes from "./constants";

const defaultState = Map({
  searchList:[]
})

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = defaultState, action) => {
  switch(action.type) {
    case actionTypes.CHANGE_SEARCH:
      return state.set("searchList", action.list);
    default:
      return state;
  }
}