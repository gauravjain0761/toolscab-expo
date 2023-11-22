import { ThunkAction } from "redux-thunk";
import { AnyAction } from "redux";
import { makeAPIRequest } from "../helper/apiGlobal";
import { GET, POST, api } from "../helper/apiConstants";
import { RootState } from "../helper/types";
import axios from "axios";
import { GET_CATALOGUE_CATEGORY_LIST_DATA, GET_CATALOGUE_CATEGORY_PRODUCT_LIST_DATA } from "./dispatchTypes";

export const getCatalogueCategorySearchAction =
  (request: any): ThunkAction<void, RootState, unknown, AnyAction> =>
  async (dispatch) => {
    let headers = {
      Accept: 'application/json'
    };

    return makeAPIRequest({
      method: GET,
      url: api.catalogue,
      headers: headers,
      data:null
    })
      .then(async (response: any) => {
        if (response.status === 200) {
         console.log('response',response?.data);
         dispatch({ type: GET_CATALOGUE_CATEGORY_LIST_DATA, payload: response?.data });
        }
      })
      .catch((error) => {  
        if (request.onFailure) request.onFailure(error.response);
      });
  };

  export const getCatalogueCategoryProductsAction=
  (request: any): ThunkAction<void, RootState, unknown, AnyAction> =>
  async (dispatch) => {
    let headers = {
      Accept: 'application/json'
    };

    return makeAPIRequest({
      method: GET,
      url: api.categoryProducts,
      headers: headers,
      params:request?.params
    })
      .then(async (response: any) => {
        if (response.status === 200) {
         console.log('responsesssssss',response?.data);
         if (request.onSuccess) request.onSuccess(response?.data);
         dispatch({ type: GET_CATALOGUE_CATEGORY_PRODUCT_LIST_DATA, payload: response?.data });
        }
      })
      .catch((error) => {  
        if (request.onFailure) request.onFailure(error.response);
      });
  };

  