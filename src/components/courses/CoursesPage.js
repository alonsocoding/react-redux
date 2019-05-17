import React from "react";
import { connect } from "react-redux";
import * as courseActions from "../../redux/actions/courseActions";
import PropTypes from "prop-types";

class CoursesPage extends React.Component {
  state = {
    course: {
      title: ""
    }
  };

  /* Utilize arrow functions not to handle the methods every time the component renders */

  handleChange = event => {
    const course = { ...this.state.course, title: event.target.value }; // Create new state with the new title value
    this.setState({ course }); // Set the new state
  };

  handleSubmit = event => {
    event.preventDefault(); // Prevent to refresh the page when submit the form
    this.props.dispatch(courseActions.createCourse(this.state.course)); // Instead of mapDispatchToProps
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h2>Courses</h2>
        <h3>Add Course</h3>
        <input
          type="text"
          onChange={this.handleChange}
          value={this.state.course.title}
        />
        <input className="btn btn-primary" type="submit" value="Save" />
        {this.props.courses.map(course => (
          <div key={course.title}>{course.title}</div>
        ))}
      </form>
    );
  }
}

CoursesPage.protoTypes = {
  courses: PropTypes.array.isRequired,
  dispatch: PropTypes.func.isRequired // Only when we delete the mapDispatchToProps, set that we expect a dispatch to Courses Page
};

function mapStateToProps(state) {
  // Set the courses to the new state courses
  return {
    courses: state.courses
  };
}

export default connect(mapStateToProps)(CoursesPage);
