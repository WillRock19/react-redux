import React from "react";
import { connect } from "react-redux";
import * as courseActions from "../../redux/actions/courseActions";
import PropTypes from "prop-types";

class CoursesPage extends React.Component {
  state = {
    course: {
      title: "",
    },
  };

  handleChange = (event) => {
    const course = { ...this.state.course, title: event.target.value };
    this.setState({ course });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.createCourse(this.state.course);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h2>Courses</h2>
        <h3>Add course</h3>
        <input
          type="text"
          onChange={this.handleChange}
          value={this.state.course.title}
        />
        <button>Submit</button>
        {this.props.courses.map((course) => (
          <div key={course.title}>{course.title}</div>
        ))}
      </form>
    );
  }
}

function mapStateToProps(state) {
  return {
    courses: state.courses,
  };
}

function mapDispatchToProps(dispatch) {
  //This is a second way to dispatch an action to redux. We create a function that returns a object with functions as properties; each function will be able to call a specific dispatch, so I don't have to do it inside my class
  return {
    createCourse: (course) => dispatch(courseActions.createCourse(course)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage); //I call my mapDispatchToprops as the second parameter in the connect, and all properties of the object it returns will be injected in my props

CoursesPage.propTypes = {
  createCourse: PropTypes.func.isRequired, //since I'm no longer letting the redux inject the dispatch function, I need to change this props to the function that will be inject and will handle the dispatch
  courses: PropTypes.array,
};
