import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { api } from "./apiConstants";
import { screenName } from "./constants";
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
      headers: {
        Accept: "text/plain",
        ...headers
      },
      params,
    };
    console.log('option---- ',option );
    
    axios(option)
      .then((response) => {
        console.log("response-->", response);
        if (response.status === 200 || response.status === 204) {
          resolve(response);
        } else {
          reject(response);
        }
      })
      .catch((error) => {
        console.log("error?.response?", error); 
        reject(error);
      });
  });
