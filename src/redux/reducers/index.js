import { combineReducers } from "redux";
import courses from "./courseReducer"; //Since the function is exported as default, I can name it as I wanna

const rootReducer = combineReducers({
  courses: courses, // I could use only "courses" because the name of the property and the value are the same
});

export default rootReducer;
