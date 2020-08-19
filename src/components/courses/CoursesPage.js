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

  handleChange = (event) => {
    //Different from the later aproach, this is called "class fields". The arrow functions will inherit the binding context of their enclosing scope - in other words: the "this" keyword works with the class context;
    const course = { ...this.state.course, title: event.target.value };
    this.setState({ course });
  };

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
