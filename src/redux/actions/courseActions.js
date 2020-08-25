import * as types from "./actionTypes";
import * as courseApi from "../../api/courseApi";

export function createCourse(course) {
  return { type: types.CREATE_COURSE, course: course };
}

export function loadCourseSuccess(courses) {
  return { type: types.LOAD_COURSES_SUCCESS, courses };
}

export function loadCourses() {
  //This function is going to be use by thunk, and redux-thunk injects dispatch for us in it
  return function (dispatch) {
    return courseApi
      .getCourses()
      .then((courses) => {
        dispatch(loadCourseSuccess(courses)); //after the call, this function will be called and the we are going to dispatch this event
      })
      .catch((error) => {
        throw error;
      });
  };
}
