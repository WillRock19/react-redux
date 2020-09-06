import React from "react";
import CourseForm from "./CourseForm";
import { cleanup, render } from "react-testing-library";

//cleans test environment aftear each test runs
afterEach(cleanup);

function renderCourseForm(args) {
  const defaultProps = {
    authors: [],
    course: {},
    saving: false,
    errors: {},
    onSave: () => {},
    onChange: () => {},
  };

  const props = { ...defaultProps, ...args };
  return render(<CourseForm {...props} />);
}

it("should render Add Course header", () => {
  const { getByText } = renderCourseForm(); //the render function returns an object with a number of different methos inside, and we use destructuring to get the method that finds our object by it's text
  getByText("Add Course"); // I don't have to recall "expect" to make the test run with the assertion. The assertion is part of the query
});

it("should label save button as 'Save' when not saving", () => {
  const { getByText } = renderCourseForm();
  getByText("Save");
});

it("should label save button as 'Saving...' when saving", () => {
  const { getByText, debug } = renderCourseForm({ saving: true });
  debug(); // I could call the debug function, that will return the element as it is rendered inside my console (GOD DAMN!)
  getByText("Saving...");
});
