import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { PostAsync } from "../../utilis/asyndata";
import { getapi, postapi } from "../../utilis/utilis";
import { store } from "../store";
const { dispatch } = store;
export const getdata = (url) => {
  return new Promise((resolve, reject) => {
    getapi(url)
      .then((res) => {
        console.log(res);
        return resolve(res);
      })
      .catch((error) => {
        console.log("error occur", error);
        return reject(error);
      });
  });
};

export const postData = (url, data, header = {}) => {
  return new Promise((resolve, reject) => {
    postapi(url, data, header)
      .then((res) => {
        console.log(res.data.token);
        return resolve(res);
      })
      .catch((er) => {
        console.log("error occur", er);
        return reject(er);
      });
  });
};
