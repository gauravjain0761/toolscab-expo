import { GET_CATALOGUE_LIST_DATA } from "../actions/dispatchTypes";

const initialState = {
  catalogueList:[]

};




export default function (state = initialState, action: any) {
  switch (action.type) {
    case GET_CATALOGUE_LIST_DATA: {
      return { ...state,catalogueList: action.payload };
    }
    default:
      return state;
  }
}
