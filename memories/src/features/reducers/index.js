import { combineReducers } from "redux";
import memoriesReducer from "./memories";

const rootReducer = combineReducers({
    memoriesReducer:memoriesReducer
})

export default rootReducer;