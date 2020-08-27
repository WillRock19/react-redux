import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const CoursesList = ({ courses }) => (
  <table>
    <thead>
      <tr>
        <th></th>
        <th>Title</th>
        <th>Author</th>
        <th>Category</th>
      </tr>
    </thead>
    <tbody>
      {courses.map((course) => {
        return (
          <tr key={course.id}>
            <td>
              <a
                className="btn btn-light"
                href={`http://pluralsight.com/courses${course.slug}`}
              >
                Watch
              </a>
            </td>
            <td>
              <Link to={`/courses/${course.slug}`}>{course.title}</Link>
            </td>
            <td>{course.authorName}</td>
            <td>{course.category}</td>
          </tr>
        );
      })}
    </tbody>
  </table>
);

CoursesList.propTypes = {
  courses: PropTypes.array.isRequired,
};

export default CoursesList;