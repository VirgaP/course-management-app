import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";


const AuthorList = ({ authors, courses, onDeleteClick }) => (
  <table className="table">
    <thead>
      <tr>
        <th>Name and Surname</th>
        <th>Email</th>
        <th>Courses</th>
        <th />
      </tr>
    </thead>
    <tbody>
      {authors.map(author => {

        return (
          <tr key={author.id}>
            <td>
              <Link to={"/author/" + author.slug}>{author.name}</Link>
            </td>
            <td>{author.email}</td>
            <td>   
            <ul> 
                {author.courseIds !='undefined' && author.courseIds? 
                    courses.map(course => {
                            if(author.courseIds.includes(course.id)){
                                return <li key={course.id}>{course.title}</li>;
                            }                    
                        }):
                <li>No course yet added for this author</li>
                }
            </ul>
            </td>
            <td>
              <button
                className="btn btn-outline-danger"
                onClick={() => onDeleteClick(author)}
              >
                Delete
              </button>
            </td>
          </tr>
        );
      })}
    </tbody>
  </table>
);

AuthorList.propTypes = {
  authors: PropTypes.array.isRequired,
  courses: PropTypes.array.isRequired,
  onDeleteClick: PropTypes.func.isRequired
};

export default AuthorList;
