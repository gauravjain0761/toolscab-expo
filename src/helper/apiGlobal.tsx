import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { api } from "./apiConstants";
import { screenName } from "./constants";
import { navigationRef } from "../navigations/MainNavigator";
import { clearAsync } from "./asyncStorage";

interface makeAPIRequestProps {
  method?: any;
  url?: any;
  data?: any;
  headers?: any;
  params?: any;
}

export const makeAPIRequest = ({
  method,
  url,
  data,
  headers,
  params,
}: makeAPIRequestProps) =>
  new Promise((resolve, reject) => {
    const option = {
      method,
      baseURL: api.BASE_URL,
      url,
      data,
      headers,
      params,
    };
    axios(option)
      .then((response) => {
        console.log("response-->", response);
        if (response.status === 200) {
          resolve(response);
        } else {
          reject(response);
        }
      })
      .catch((error) => {
        console.log("error?.response?", error?.response); 
        reject(error);
      });
  });
