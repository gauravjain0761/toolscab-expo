import { ThunkAction } from "redux-thunk";
import { AnyAction } from "redux";
import { makeAPIRequest } from "../helper/apiGlobal";
import { GET, POST, api } from "../helper/apiConstants";
import { RootState } from "../helper/types";
import axios from "axios";
import { GET_CATALOGUE_LIST_DATA } from "./dispatchTypes";

export const getCatalogueAction =
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
         dispatch({ type: GET_CATALOGUE_LIST_DATA, payload: response?.data });
        }
      })
      .catch((error) => {  
        if (request.onFailure) request.onFailure(error.response);
      });
  };

  