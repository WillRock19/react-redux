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
    this.props.actions.createCourse(this.state.course);
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
  return {
    actions: bindActionCreators(courseActions, dispatch), //The bindActionCreators can accept a function or an object, so I can pass it all of my actions, and it will return them all wrapped. Another way whould be pass only one action in order to wrap it.
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage); //I call my mapDispatchToprops as the second parameter in the connect, and all properties of the object it returns will be injected in my props

CoursesPage.propTypes = {
  actions: PropTypes.object.isRequired, //The bindActionCreators will return an object mimicking the original object, but with each function wrapped in a call to dispatch
  courses: PropTypes.array.isRequired,
};
