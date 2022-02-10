import {combineReducers} from "redux";
import todo from "./todo";
import employees from "./employees";

const rootReducers = () =>  combineReducers({todo, employees});

export default rootReducers