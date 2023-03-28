import { getReducers } from "../reducer/StatusLogin";
import { store } from "../store";
const {dispatch}=store
export const datasend=(data)=>{
    dispatch(getReducers(data))
}
