import { ThunkAction } from "redux-thunk";
import { AnyAction } from "redux";
import { makeAPIRequest } from "../helper/apiGlobal";
import { POST, api } from "../helper/apiConstants";
import { RootState } from "../helper/types";
import { setAsyncUserInfo } from "../helper/asyncStorage";


export const addItemToCartAction =
  (request: any): ThunkAction<void, RootState, unknown, AnyAction> =>
    async (dispatch) => {
      let headers = {
        Accept: 'application/json'
      };

      return makeAPIRequest({
        method: POST,
        url: api.addItemToCart,
        headers: headers,
        params: request.params
      })
        .then(async (response: any) => {
          if (response.status === 200) {
            if (request.onSuccess) request.onSuccess(response?.data);
            // dispatch({ type: GET_PRODUCT_SPECS_DETAILS_DATA, payload: response?.data });
          }
        })
        .catch((error) => {
          alert(error?.response?.data?.detail)
          
          if (request.onFailure) request.onFailure(error.response);
        });
    };