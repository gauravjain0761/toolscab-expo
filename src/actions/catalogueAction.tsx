import { ThunkAction } from "redux-thunk";
import { AnyAction } from "redux";
import { makeAPIRequest } from "../helper/apiGlobal";
import { GET, POST, api } from "../helper/apiConstants";
import { RootState } from "../helper/types";
import {
  GET_CATALOGUE_CATEGORY_LIST_DATA,
  GET_CATALOGUE_CATEGORY_PRODUCT_LIST_DATA,
  GET_CATALOGUE_CATEGORY_SEARCH_LIST_DATA,
  GET_CATALOGUE_FILTER_FROM_LIST_DATA,
  GET_PRODUCT_DETAILS_DATA,
  GET_PRODUCT_LOCATION_DETAILS_DATA,
  GET_PRODUCT_SPECS_DETAILS_DATA,
  GET_SEARCH_TEXT,
} from "./dispatchTypes";

export const getCatalogueCategorySearchAction =
  (request: any): ThunkAction<void, RootState, unknown, AnyAction> =>
  async (dispatch) => {
    let headers = {
      Accept: "text/plain",
    };

    return makeAPIRequest({
      method: GET,
      url: api.catalogue,
      headers: headers,
      // data:null
    })
      .then(async (response: any) => {
        if (response.status === 200) {
          console.log("response", response?.data);
          if (request.onSuccess) request.onSuccess(response?.data);
          dispatch({
            type: GET_CATALOGUE_CATEGORY_LIST_DATA,
            payload: response?.data,
          });
        }
      })
      .catch((error) => {
        if (request.onFailure) request.onFailure(error.response);
      });
  };

export const catalogueCategorySearchAction =
  (request: any): ThunkAction<void, RootState, unknown, AnyAction> =>
  async (dispatch) => {
    let headers = {
      Accept: "text/plain",
    };

    return makeAPIRequest({
      method: GET,
      url: api.productSearch,
      headers: headers,
      params: request.params,
    })
      .then(async (response: any) => {
        if (response.status === 200) {
          console.log("responsedada", response?.data);
          if (request.onSuccess) request.onSuccess(response?.data);
          dispatch({
            type: GET_CATALOGUE_CATEGORY_SEARCH_LIST_DATA,
            payload: response?.data,
          });
          dispatch({ type: GET_SEARCH_TEXT, payload: request.params?.search });
        }
      })
      .catch((error) => {
        if (request.onFailure) request.onFailure(error.response);
      });
  };

export const getCatalogueCategoryProductsAction =
  (request: any): ThunkAction<void, RootState, unknown, AnyAction> =>
  async (dispatch) => {
    let headers = {
      Accept: "application/json",
    };

    return makeAPIRequest({
      method: GET,
      url: api.categoryProducts,
      headers: headers,
      params: request?.params,
    })
      .then(async (response: any) => {
        if (response.status === 200) {
          console.log("responsesssssss", response?.data);
          if (request.onSuccess) request.onSuccess(response?.data);
          const finalADD = [
            // {
            //   brand: request?.data1?.brand,
            // },
            ...response?.data,
          ];

          dispatch({
            type: GET_CATALOGUE_CATEGORY_PRODUCT_LIST_DATA,
            payload: finalADD,
          });
        }
      })
      .catch((error) => {
        if (request.onFailure) request.onFailure(error.response);
      });
  };
export const getCatalogueFilterFormAction =
  (request: any): ThunkAction<void, RootState, unknown, AnyAction> =>
  async (dispatch) => {
    let headers = {
      Accept: "application/json",
    };

    return makeAPIRequest({
      method: GET,
      url: api.catalogueFilterForm,
      headers: headers,
    })
      .then(async (response: any) => {
        if (response.status === 200) {
          console.log("responsesssssss", response?.data);
          if (request.onSuccess) request.onSuccess(response?.data);
          dispatch({
            type: GET_CATALOGUE_FILTER_FROM_LIST_DATA,
            payload: response?.data,
          });
        }
      })
      .catch((error) => {
        if (request.onFailure) request.onFailure(error.response);
      });
  };

export const postcatalogueFilterProductAction =
  (request: any): ThunkAction<void, RootState, unknown, AnyAction> =>
  async (dispatch) => {
    let headers = {
      Accept: "application/json",
    };

    return makeAPIRequest({
      method: POST,
      url: api.catalogueFilterProducts,
      headers: headers,
      data: request?.data,
    })
      .then(async (response: any) => {
        if (response.status === 200) {
          console.log("getcatalogueFilterProductActio res", response?.data);
          if (request.onSuccess) request.onSuccess(response?.data);
          const finalADD = [
            {
              brand: request?.data1?.brand,
            },
            ...response?.data,
          ];

          dispatch({
            type: GET_CATALOGUE_CATEGORY_PRODUCT_LIST_DATA,
            payload: finalADD,
          });
        }
      })
      .catch((error) => {
        if (request.onFailure) request.onFailure(error.response);
      });
  };

export const getProductAction =
  (request: any): ThunkAction<void, RootState, unknown, AnyAction> =>
  async (dispatch) => {
    let headers = {
      Accept: "application/json",
    };

    return makeAPIRequest({
      method: GET,
      url: api.get_product,
      headers: headers,
      params: request.params,
    })
      .then(async (response: any) => {
        if (response.status === 200) {
          if (request.onSuccess) request.onSuccess(response?.data);
          dispatch({ type: GET_PRODUCT_DETAILS_DATA, payload: response?.data });
        }
      })
      .catch((error) => {
        if (request.onFailure) request.onFailure(error.response);
      });
  };

export const getProductSpecsAction =
  (request: any): ThunkAction<void, RootState, unknown, AnyAction> =>
  async (dispatch) => {
    let headers = {
      Accept: "application/json",
    };

    return makeAPIRequest({
      method: GET,
      url: api.product_specs,
      headers: headers,
      params: request.params,
    })
      .then(async (response: any) => {
        if (response.status === 200) {
          if (request.onSuccess) request.onSuccess(response?.data);
          dispatch({
            type: GET_PRODUCT_SPECS_DETAILS_DATA,
            payload: response?.data,
          });
        }
      })
      .catch((error) => {
        if (request.onFailure) request.onFailure(error.response);
      });
  };

export const getProductLocationAction =
  (request: any): ThunkAction<void, RootState, unknown, AnyAction> =>
  async (dispatch) => {
    let headers = {
      Accept: "application/json",
    };

    return makeAPIRequest({
      method: GET,
      url: api.product_location,
      headers: headers,
      params: request.params,
    })
      .then(async (response: any) => {
        if (response.status === 200) {
          if (request.onSuccess) request.onSuccess(response?.data);
          dispatch({
            type: GET_PRODUCT_LOCATION_DETAILS_DATA,
            payload: response?.data,
          });
        }
      })
      .catch((error) => {
        if (request.onFailure) request.onFailure(error.response);
      });
  };

export const onReviewAddAction =
  (request: any): ThunkAction<void, RootState, unknown, AnyAction> =>
  async (dispatch) => {
    let headers = {
      Accept: "application/json",
    };

    return makeAPIRequest({
      method: POST,
      url: api.terminateInvalidStart,
      headers: headers,
      params: request.params,
    })
      .then(async (response: any) => {
        if (response.status === 200) {
          if (request.onSuccess) request.onSuccess(response?.data);
        }
      })
      .catch((error) => {
        if (request.onFailure) request.onFailure(error.response);
      });
  };

  export const onRatingAddAction =
  (request: any): ThunkAction<void, RootState, unknown, AnyAction> =>
  async (dispatch) => {
    let headers = {
      Accept: "application/json",
    };

    return makeAPIRequest({
      method: POST,
      url: api.rateService,
      headers: headers,
      params: request.params,
    })
      .then(async (response: any) => {
        if (response.status === 200) {
          if (request.onSuccess) request.onSuccess(response?.data);
        }
      })
      .catch((error) => {
        if (request.onFailure) request.onFailure(error.response);
      });
  };