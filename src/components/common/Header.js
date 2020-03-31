import React from "react";
import { NavLink } from "react-router-dom";
import CountBadge from '../common/CountBadge';
import {connect} from 'react-redux';

const Header = (props) => {
  const activeStyle = { color: "#F15B2A" };

  let courseCount = props.courses.length
  let authorCount = props.authors.length

  return (
    <nav>
      <NavLink to="/" activeStyle={activeStyle} exact>
        Home
      </NavLink>
      {" | "}
      <NavLink to="/courses" activeStyle={activeStyle}>
        Courses
      </NavLink>
      <CountBadge count={courseCount}/>
      {" | "}
      <NavLink to="/authors" activeStyle={activeStyle}>
        Authors
      <CountBadge count={authorCount}/>
      {" | "}
      </NavLink>
      <NavLink to="/about" activeStyle={activeStyle}>
        About
      </NavLink>
    </nav>
  );
};

const mapStateToProps = state => {
  return {
    courses: state.courses,
    authors: state.authors
  };
};
export default connect(mapStateToProps)(Header); 

