import React from "react";
import { connect } from "react-redux";
import * as courseActions from "../../redux/actions/courseActions";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux"; //Function that will help us to not have to manually wrape the action creators in a dispatch call

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

const mapDispatchToProps = {
  //I can declare it as an object. When I do this, each property of the object is automaticlly bound to dispatch function
  createCourse: courseActions.createCourse,
};

export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage); //The Connect function will automatically go throught and bind each of the object function in a call to the dispatch for me

CoursesPage.propTypes = {
  createCourse: PropTypes.func.isRequired, //I keep using this as a function
  courses: PropTypes.array.isRequired,
};
