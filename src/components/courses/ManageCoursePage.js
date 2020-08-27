import React, { useEffect } from "react";
import { connect } from "react-redux";
import * as courseActions from "../../redux/actions/courseActions";
import * as authorActions from "../../redux/actions/authorActions";
import PropTypes from "prop-types";

function ManageCoursePage({ courses, authors, loadAuthors, loadCourses }) {
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
  }, []); //the second parameter is the elements that will make my function re-render everytime they change (if I don't declare nothing, it will re-render everytime the component renders). Declaring an empty array as a second parameter means the effect will run only once, when the component mounts.

  return (
    <>
      <h2>Manage Course</h2>
    </>
  );
}

function mapStateToProps(state) {
  return {
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
  courses: PropTypes.array.isRequired,
  loadCourses: PropTypes.func.isRequired,
  loadAuthors: PropTypes.func.isRequired,
};
