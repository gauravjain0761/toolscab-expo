import { ThunkAction } from "redux-thunk";
import { AnyAction } from "redux";
import { makeAPIRequest } from "../helper/apiGlobal";
import { POST, api } from "../helper/apiConstants";
import { RootState } from "../helper/types";

export const userLogin =
  (request: any): ThunkAction<void, RootState, unknown, AnyAction> =>
  async (dispatch) => {
    let headers = {
      "Content-Type": "multipart/form-data",
    };
    return makeAPIRequest({
      method: POST,
      url: api.signUp,
      headers: headers,
      data: request.data,
    })
      .then(async (response: any) => {
        if (response.status === 200) {
         console.log('response',response);
         
        }
      })
      .catch((error) => {
    
        if (request.onFailure) request.onFailure(error.response);
      });
  };
