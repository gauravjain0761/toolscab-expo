import { GET_DASHBOARD_DATA, GET_PAYMENT_DETAILS_LIST, GET_PROFILE_DETAILS_LIST, ITEM_DEATILS, TOGGLE_DRAWER } from "../actions/dispatchTypes";

const initialState = {
  getProfileList: {},
};

export default function (state = initialState, action: any) {
  switch (action.type) {
    case GET_PROFILE_DETAILS_LIST: {
      return { ...state, getProfileList: action.payload };
    }
    default:
      return state;
  }
}
