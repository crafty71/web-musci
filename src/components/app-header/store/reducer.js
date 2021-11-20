import { Map } from "immutable";
import * as actionTypes from "./constants";

const defaultState = Map({
  searchValue:['周杰伦']
})

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = defaultState, action) => {
  switch(action.type) {
    case actionTypes.SEARCH_VALUE:
      return state.set("searchValue", action.value);
    default:
      return state;
  }
}