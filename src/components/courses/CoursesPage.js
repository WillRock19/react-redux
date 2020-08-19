import React from "react";

class CoursesPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      course: {
        title: "",
      },
    };

    this.handleChange = this.handleChange.bind(this); // The problem with the last commit aproach is that it will create a new function and associate it with the class context each time the component renders itself. That is a little too much.
    //With this aproach (called "binding in the constructor"), the function is binding only once, not in every render.
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
          onChange={this.handleChange}
          value={this.state.course.title}
        />
        <button>Submit</button>
      </form>
    );
  }
}

export default CoursesPage;
