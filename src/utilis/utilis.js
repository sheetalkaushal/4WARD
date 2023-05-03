import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
// props
export const apiReq = (url, method, header, data) => {
  return new Promise((resolve, reject) => {
    axios({
      url: url,
      method: method,
      data: data,
      header: header,
    })
      .then((response) => {
        return resolve(response.data);
      })
      .catch((error) => {
        return reject(error);
      });
  });
};
//get  api
export const getapi = (url, header = {}) => {
  return apiReq(url, "GET", header);
};

// post api
export const postapi = (url, data, header = {}) => {
  return apiReq(url, "POST", header, data);
};
