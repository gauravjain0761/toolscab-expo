import { GET_ACTIVE_RENTALS_DETAILS_DATA, GET_DASHBOARD_DATA, GET_PAYMENT_DETAILS_LIST, GET_PROFILE_DETAILS_LIST, ITEM_DEATILS, TOGGLE_DRAWER } from "../actions/dispatchTypes";

const initialState = {
  getProfileList: {},
  getActiveRental:[]
};

export default function (state = initialState, action: any) {
  switch (action.type) {
    case GET_PROFILE_DETAILS_LIST: {
      return { ...state, getProfileList: action.payload };
    }
    case GET_ACTIVE_RENTALS_DETAILS_DATA: {
      return { ...state, getActiveRental: action.payload };
    }
    default:
      return state;
  }
}
