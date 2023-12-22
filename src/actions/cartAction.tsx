import { ThunkAction } from "redux-thunk";
import { AnyAction } from "redux";
import { makeAPIRequest } from "../helper/apiGlobal";
import { GET, POST, api } from "../helper/apiConstants";
import { RootState } from "../helper/types";
import { setAsyncUserInfo } from "../helper/asyncStorage";
import { Alert } from "react-native";
import { GET_ACTIVE_RENTALS_DETAILS_DATA, GET_CART_DETAILS_DATA } from "./dispatchTypes";

export const addItemToCartAction =
  (request: any): ThunkAction<void, RootState, unknown, AnyAction> =>
  async (dispatch) => {
    let headers = {
      Accept: "application/json",
    };

    return makeAPIRequest({
      method: POST,
      url: api.addItemToCart,
      headers: headers,
      params: request.params,
    })
      .then(async (response: any) => {
        if (response.status === 200) {
          if (request.onSuccess) request.onSuccess(response?.data);
          // dispatch({ type: GET_PRODUCT_SPECS_DETAILS_DATA, payload: response?.data });
        }
      })
      .catch((error) => {
        alert(error?.response?.data?.detail);
        if (request.onFailure) request.onFailure(error.response);
      });
  };

export const getShoppingCartAction =
  (request: any): ThunkAction<void, RootState, unknown, AnyAction> =>
  async (dispatch) => {
    let headers = {
      Accept: "application/json",
    };

    return makeAPIRequest({
      method: GET,
      url: api.shoppingCart,
      headers: headers,
      params: request.params,
    })
      .then(async (response: any) => {
        if (response.status === 200) {
          if (request.onSuccess) request.onSuccess(response?.data);
          dispatch({ type: GET_CART_DETAILS_DATA, payload: response?.data });
        }
      })
      .catch((error) => {
        console.log("errorerror", error?.response);

        alert(error?.response?.data?.detail);
        if (request.onFailure) request.onFailure(error.response);
      });
  };

export const getActiveRentalsAction =
  (request: any): ThunkAction<void, RootState, unknown, AnyAction> =>
  async (dispatch) => {
    let headers = {
      Accept: "application/json",
    };

    return makeAPIRequest({
      method: GET,
      url: api.activeRentals,
      headers: headers,
      params: request.params,
    })
      .then(async (response: any) => {
        if (response.status === 200) {
          if (request.onSuccess) request.onSuccess(response?.data);
          dispatch({ type: GET_ACTIVE_RENTALS_DETAILS_DATA, payload: response?.data });
        }
      })
      .catch((error) => {
        console.log("errorerror", error?.response);

        alert(error?.response?.data?.detail);
        if (request.onFailure) request.onFailure(error.response);
      });
  };

  export const getStartRentalsAction =
  (request: any): ThunkAction<void, RootState, unknown, AnyAction> =>
  async (dispatch) => {
    let headers = {
      Accept: "application/json",
    };

    return makeAPIRequest({
      method: POST,
      url: api.startRental,
      headers: headers,
      params: request.params,
    })
      .then(async (response: any) => {
        if (response.status === 200) {
          if (request.onSuccess) request.onSuccess(response?.data);
        }
      })
      .catch((error) => {
        alert(error?.response?.data?.detail);
        if (request.onFailure) request.onFailure(error.response);
      });
  };

  export const getFinishRentalAction =
  (request: any): ThunkAction<void, RootState, unknown, AnyAction> =>
  async (dispatch) => {
    let headers = {
      Accept: "application/json",
    };

    return makeAPIRequest({
      method: POST,
      url: api.finishRental,
      headers: headers,
      params: request.params,
    })
      .then(async (response: any) => {
        if (response.status === 200) {
          if (request.onSuccess) request.onSuccess(response?.data);
        }
      })
      .catch((error) => {
        alert(error?.response?.data?.detail);
        if (request.onFailure) request.onFailure(error.response);
      });
  };