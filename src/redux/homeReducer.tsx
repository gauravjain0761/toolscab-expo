import { GET_DASHBOARD_DATA, ITEM_DEATILS, TOGGLE_DRAWER } from "../actions/dispatchTypes";

const initialState = {
  dashBoardData: {
    banners: [],
  },
  itemDetails: {},
  toggleDrawer: false
};

export default function (state = initialState, action: any) {
  switch (action.type) {
    case GET_DASHBOARD_DATA: {
      return { ...state, dashBoardData: action.payload };
    }
    case ITEM_DEATILS: {
      return { ...state, itemDetails: action.payload };
    }


    case TOGGLE_DRAWER: {
      return { ...state, toggleDrawer: action.payload }
    }
    default:
      return state;
  }
}
