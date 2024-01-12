import { GET_CATALOGUE_CATEGORY_LIST_DATA, GET_CATALOGUE_CATEGORY_PRODUCT_LIST_DATA, GET_CATALOGUE_CATEGORY_SEARCH_LIST_DATA, GET_CATALOGUE_FILTER_FROM_LIST_DATA, GET_PRODUCT_DETAILS_DATA, GET_PRODUCT_LOCATION_DETAILS_DATA, GET_PRODUCT_SPECS_DETAILS_DATA, GET_SEARCH_TEXT } from "../actions/dispatchTypes";

const initialState = {
  catalogueCategorySearchList:[],
  catalogueSearchList:[],
  catalogueCategoryProductList:[],
  productDetails:[],
  catalogueCategoryFilterList:[],
  getProductSpecs:[],
  getProductLocations:[],
  searchText:''
};




export default function (state = initialState, action: any) {
  switch (action.type) {
    case GET_CATALOGUE_CATEGORY_LIST_DATA: {
      return { ...state,catalogueCategorySearchList: action.payload };
    }
    case GET_CATALOGUE_CATEGORY_SEARCH_LIST_DATA : {
      return { ...state,catalogueSearchList: action.payload };
    }
    case GET_SEARCH_TEXT : {
      return { ...state,searchText: action.payload };
    }
    case GET_CATALOGUE_CATEGORY_PRODUCT_LIST_DATA: {
      return { ...state,catalogueCategoryProductList: action.payload };
    }
    case GET_PRODUCT_DETAILS_DATA: {
      return { ...state,productDetails: action.payload };
    }
    case GET_CATALOGUE_FILTER_FROM_LIST_DATA: {
      return { ...state,catalogueCategoryFilterList: action.payload };
    }
    case GET_PRODUCT_SPECS_DETAILS_DATA: {
      return { ...state,getProductSpecs: action.payload };
    }
    case GET_PRODUCT_LOCATION_DETAILS_DATA: {
      return { ...state,getProductLocations: action.payload };
    }
    default:
      return state;
  }
}
