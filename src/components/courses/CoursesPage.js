import React from "react";

class CoursesPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      course: {
        title: "",
      },
    };
  }

  handleChange(event) {
    const course = { ...this.state.course, title: event.target.value };
    this.setState({ course });
  }

  render() {
    return (
      <form>
        <h2>Courses</h2>
        <h3>Add course</h3>
        <input
          type="text"
          onChange={this.handleChange.bind(this)} // Without this bind, the "this" context inside the fuynction will be undefined. With this, we are binding the function context to the class.
          value={this.state.course.title}
        />
        <button>Submit</button>
      </form>
    );
  }
}

export default CoursesPage;
