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
    this.props.dispatch(courseActions.createCourse(this.state.course)); //Since we didn't declare mapDispatchToProps, the connect function will automatically adds "dispatch" as a prop
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
      </form>
    );
  }
}

function mapStateToProps(state) {
  //determines what parte of the state is passed to our component via props
  return {
    courses: state.courses,
  };
}

export default connect(mapStateToProps)(CoursesPage); //We are not going to pass the second parameter, mapDispatchToProps. When we do that, our component gets a dispatch property injected automatically

CoursesPage.prototype = {
  //Adding proptypes as a validation to the props that my component will reaceive
  dispatch: PropTypes.func.isRequired,
};
