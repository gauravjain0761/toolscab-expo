import { ThunkAction } from "redux-thunk";
import { AnyAction } from "redux";
import { makeAPIRequest } from "../helper/apiGlobal";
import { GET, POST, api } from "../helper/apiConstants";
import { RootState } from "../helper/types";
import axios from "axios";

export const getCatalogue =
  (request: any): ThunkAction<void, RootState, unknown, AnyAction> =>
  async (dispatch) => {
    let headers = {
      Accept: 'application/json'
    };
    fetch('http://secret.hetk.ee/Catalogue')
    .then(res => res.json())
    .then(res=>console.log(res)
    );
    return makeAPIRequest({
      method: GET,
      url: api.catalogue,
      headers: headers,
      data:null
    })
      .then(async (response: any) => {
        if (response.status === 200) {
         console.log('response',response);
         
        }
      })
      .catch((error) => {
    console.log('errr',error);
    
        if (request.onFailure) request.onFailure(error.response);
      });
  };
