import React from "react";
import { connect } from "react-redux";
import * as courseActions from "../../redux/actions/courseActions";
import * as authorActions from "../../redux/actions/authorActions";
import PropTypes from "prop-types";

class ManageCoursePage extends React.Component {
  componentDidMount() {
    const { courses, authors, loadAuthors, loadCourses } = this.props;

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
  }

  render() {
    return (
      <>
        <h2>Manage Course</h2>
      </>
    );
  }
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
