import React from "react";
import CourseForm from "./CourseForm";
import renderer from "react-test-renderer";
import { courses, authors } from "../../../tools/mockData";

it("sets submit button label to 'Saving'... when saving is true", () => {
  //The tree is an object that represents the output of a react component
  const tree = renderer.create(
    <CourseForm
      course={courses[0]}
      authors={authors}
      onSave={jest.fn()}
      onChange={jest.fn()}
      saving //with boolean props, the existing of the prop in the component calls already ensures it's value as true (I dont need to type it)
    />
  );
  expect(tree).toMatchSnapshot();
});

it("sets submit button label to 'Saving'... when saving is false", () => {
  const tree = renderer.create(
    <CourseForm
      course={courses[0]}
      authors={authors}
      onSave={jest.fn()}
      onChange={jest.fn()}
      saving={false}
    />
  );
  expect(tree).toMatchSnapshot();
});
