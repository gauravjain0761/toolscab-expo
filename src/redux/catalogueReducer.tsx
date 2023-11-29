import { GET_CATALOGUE_CATEGORY_LIST_DATA, GET_CATALOGUE_CATEGORY_PRODUCT_LIST_DATA, GET_PRODUCT_DETAILS_DATA } from "../actions/dispatchTypes";

const initialState = {
  catalogueCategorySearchList:[],
  catalogueCategoryProductList:[],
  productDetails:[]
};




export default function (state = initialState, action: any) {
  switch (action.type) {
    case GET_CATALOGUE_CATEGORY_LIST_DATA: {
      return { ...state,catalogueCategorySearchList: action.payload };
    }
    case GET_CATALOGUE_CATEGORY_PRODUCT_LIST_DATA: {
      return { ...state,catalogueCategoryProductList: action.payload };
    }
    case GET_PRODUCT_DETAILS_DATA: {
      return { ...state,productDetails: action.payload };
    }
    default:
      return state;
  }
}
