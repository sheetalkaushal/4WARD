import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { PostAsync } from "../../utilis/asyndata";
import { getapi ,postapi} from "../../utilis/utilis";
import { store } from "../store";
const { dispatch } = store;
export const getdata = (url) => {
    getapi(url)
    .then((res) => {
      console.log(res)
      // dispatch(getapi(res));
    })
    .catch((error) => {
      console.log("error occur", error);
    });
};

export const postData =(url,data,header={}) =>{
    postapi(url, data, header) 
    .then((res) => {
      console.log(res.data.token);
      // PostAsync().then((res)=>{

      // })
    })
    .catch((error) => {
      console.log("error occur", error);
    });
};
