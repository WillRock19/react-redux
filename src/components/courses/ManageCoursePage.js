import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import * as courseActions from "../../redux/actions/courseActions";
import * as authorActions from "../../redux/actions/authorActions";
import PropTypes from "prop-types";
import CourseForm from "./CourseForm";
import { newCourse } from "../../../tools/mockData";

function ManageCoursePage({
  courses,
  authors,
  loadAuthors,
  loadCourses,
  ...props //"The spread operator in props ( '...props') says that 'assign any props I haven't destructured on the left to a variable called props'."
}) {
  const [course, setCourse] = useState({ ...props.course });
  const [errors, setErrors] = useState({}); //Initial state will be empty

  useEffect(() => {
    if (courses.length === 0) {
      loadCourses().catch((error) => {
        alert(`Loading courses have failed whit error: ${error}`);
      });
    }

    if (authors.length === 0) {
      loadAuthors().catch((error) => {
        alert(`Loading authors have failed whit error: ${error}`);
      });
    }
  }, []);

  function handleChange(event) {
    const { name, value } = event.target; //This destructure avoids the event getting garbage collected so that it's avaiable witthin the nested setCourse callback (that is a async function, and end's up losing the reference to the event for performance reasons).

    //I can pass a function to setState so I can safely set a new state that's based on the existing one
    setCourse((previousCourse) => ({
      ...previousCourse,
      [name]: name === "authorId" ? parseInt(value, 10) : value, //events return numbers as string, so we need to convert the authorId to an int here
    }));
  }

  return (
    <>
      <CourseForm
        course={course}
        errors={errors}
        authors={authors}
        onChange={handleChange}
      ></CourseForm>
    </>
  );
}

function mapStateToProps(state) {
  return {
    course: newCourse,
    courses: state.courses,
    authors: state.authors,
  };
}

//I'm going to declare it as an object, and each property will automatically be wrapped into a call to dispatch
const mapDispatchToProps = {
  loadCourses: courseActions.loadCourses,
  loadAuthors: authorActions.loadAuthors,
};

export default connect(mapStateToProps, mapDispatchToProps)(ManageCoursePage);

ManageCoursePage.propTypes = {
  actions: PropTypes.object.isRequired,
  authors: PropTypes.array.isRequired,
  course: PropTypes.object.isRequired,
  courses: PropTypes.array.isRequired,
  loadCourses: PropTypes.func.isRequired,
  loadAuthors: PropTypes.func.isRequired,
};
