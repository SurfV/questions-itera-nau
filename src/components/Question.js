import React, { Component } from "react";
import PropTypes from "prop-types"

class Question extends Component {
    render() {
      return(
        <li className="question">
          <span>{this.props.name}</span>
        </li>
      );
    }
  }
  
  Question.propTypes = {
    id: PropTypes.string,  
    name: PropTypes.string.isRequired
  }

export default Question;
