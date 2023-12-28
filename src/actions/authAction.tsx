import { ThunkAction } from "redux-thunk";
import { AnyAction } from "redux";
import { makeAPIRequest } from "../helper/apiGlobal";
import { GET, POST, api } from "../helper/apiConstants";
import { RootState } from "../helper/types";
import { setAsyncUserInfo } from "../helper/asyncStorage";
import {
  GET_PAYMENT_DETAILS_LIST,
  GET_PROFILE_DETAILS_LIST,
} from "./dispatchTypes";

export const userLogin =
  (request: any): ThunkAction<void, RootState, unknown, AnyAction> =>
  async (dispatch) => {
    let headers = {
      "Content-Type": "multipart/form-data",
    };
    return makeAPIRequest({
      method: POST,
      url: api.login,
      headers: headers,
      params: request.params,
    })
      .then(async (response: any) => {
        if (response.status === 200) {
          setAsyncUserInfo(response?.data);
          if (request.onSuccess) request.onSuccess(response?.data);
        }
      })
      .catch((error) => {
        if (request.onFailure) request.onFailure(error.response?.data);
      });
  };

export const userSaveProfile =
  (request: any): ThunkAction<void, RootState, unknown, AnyAction> =>
  async (dispatch) => {
    let headers = {
      "Content-Type": "multipart/form-data",
    };
    return makeAPIRequest({
      method: POST,
      url: api.save_profile,
      headers: headers,
      data: request.data,
    })
      .then(async (response: any) => {
        if (response.status === 200) {
          console.log("response", response);
          setAsyncUserInfo(response?.data);
          if (request.onSuccess) request.onSuccess(response?.data);
        }
      })
      .catch((error) => {
        if (request.onFailure) request.onFailure(error?.response?.data);
      });
  };

export const getPaymentMethods =
  (request: any): ThunkAction<void, RootState, unknown, AnyAction> =>
  async (dispatch) => {
    let headers = {
      "Content-Type": "multipart/form-data",
    };
    return makeAPIRequest({
      method: GET,
      url: api.getPaymentMethods,
      headers: headers,
      params: request.params,
    })
      .then(async (response: any) => {
        if (response.status === 200) {
          console.log("response", response);
          if (request.onSuccess) request.onSuccess(response?.data);
          dispatch({ type: GET_PAYMENT_DETAILS_LIST, payload: response?.data });
        }
      })
      .catch((error) => {
        if (request.onFailure) request.onFailure(error.response);
      });
  };

export const getProfileMethods =
  (request: any): ThunkAction<void, RootState, unknown, AnyAction> =>
  async (dispatch) => {
    let headers = {
      "Content-Type": "multipart/form-data",
    };
    return makeAPIRequest({
      method: GET,
      url: api.get_profile,
      headers: headers,
      params: request.params,
    })
      .then(async (response: any) => {
        if (response.status === 200) {
          console.log("response", response);
          if (request.onSuccess) request.onSuccess(response?.data);
          dispatch({ type: GET_PROFILE_DETAILS_LIST, payload: response?.data });
        }
      })
      .catch((error) => {
        if (request.onFailure) request.onFailure(error.response);
      });
  };

export const savePaymentMethod =
  (request: any): ThunkAction<void, RootState, unknown, AnyAction> =>
  async (dispatch) => {
    let headers = {
      "Content-Type": "multipart/form-data",
    };
    return makeAPIRequest({
      method: POST,
      url: api.savePaymentMethod,
      headers: headers,
      data: request.data,
    })
      .then(async (response: any) => {
        if (response.status === 200) {
          console.log("response", response);
          if (request.onSuccess) request.onSuccess(response?.data);
        }
      })
      .catch((error) => {
        if (request.onFailure) request.onFailure(error.response);
      });
  };

export const deletePaymentMethod =
  (request: any): ThunkAction<void, RootState, unknown, AnyAction> =>
  async (dispatch) => {
    let headers = {
      "Content-Type": "multipart/form-data",
    };
    return makeAPIRequest({
      method: POST,
      url: api.deletePaymentMethod,
      headers: headers,
      params: request.params,
    })
      .then(async (response: any) => {
        if (response.status === 200) {
          console.log("response", response);
          if (request.onSuccess) request.onSuccess(response?.data);
        }
      })
      .catch((error) => {
        if (request.onFailure) request.onFailure(error.response);
      });
  };
