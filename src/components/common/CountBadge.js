import React from "react";
import PropTypes from "prop-types";
import {connect} from 'react-redux';

const CountBadge = ({count}) => {

  return (
   <>
       <span className="badge" style={{color: "white", background:'darkGrey', borderRadius:'50%', marginLeft:'5px'}}>{count}</span>
   </>
  );
};

CountBadge.propTypes = {
    count: PropTypes.number.isRequired,
  };

export default CountBadge; 

