import { combineReducers } from "redux";
import memoriesReducer from "./memories";
import userReducer from "./user";

const rootReducer = combineReducers({
    memoriesReducer:memoriesReducer,
    userReducer:userReducer
})

export default rootReducer;