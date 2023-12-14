import { GET_DASHBOARD_DATA, GET_PAYMENT_DETAILS_LIST, ITEM_DEATILS, TOGGLE_DRAWER } from "../actions/dispatchTypes";

const initialState = {

  getPaymentList: {},
};

export default function (state = initialState, action: any) {
  switch (action.type) {
    case GET_PAYMENT_DETAILS_LIST: {
      return { ...state, getPaymentList: action.payload };
    }
    default:
      return state;
  }
}
