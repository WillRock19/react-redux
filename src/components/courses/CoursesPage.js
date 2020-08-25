import React from "react";
import { connect } from "react-redux";
import * as courseActions from "../../redux/actions/courseActions";
import * as authorActions from "../../redux/actions/authorActions";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import CoursesList from "./CoursesList";

class CoursesPage extends React.Component {
  componentDidMount() {
    if (this.props.courses.length === 0) {
      this.props.actions.loadCourses().catch((error) => {
        alert(`Loading courses have failed whit error: ${error}`);
      });
    }

    if (this.props.authors.length === 0) {
      this.props.actions.loadAuthors().catch((error) => {
        alert(`Loading authors have failed whit error: ${error}`);
      });
    }
  }

  render() {
    return (
      <>
        <h2>Courses</h2>
        <CoursesList courses={this.props.courses}></CoursesList>
      </>
    );
  }
}

function mapStateToProps(state) {
  //Gonna increase this function habilities mapping all courses of my state and adding to then a new property, "authorName"
  return {
    courses:
      state.authors.length === 0
        ? []
        : state.courses.map((course) => {
            return {
              ...course, //I copy all course current values
              authorName: state.authors.find(
                (author) => author.id === course.authorId
              ).name, //and then I add this property, mapping to it the specific value from the "authors" in the state
            };
          }),
    authors: state.authors, //must pass authors too, so if it changes, the changes shall be
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      //I'm gonna still using actions, but adding properties inside of it to represent the actions I'll be using in this component (loadCourses and loadAuthors)
      loadCourses: bindActionCreators(courseActions.loadCourses, dispatch),
      loadAuthors: bindActionCreators(authorActions.loadAuthors, dispatch),
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);

CoursesPage.propTypes = {
  actions: PropTypes.object.isRequired,
  authors: PropTypes.array.isRequired,
  courses: PropTypes.array.isRequired,
};
