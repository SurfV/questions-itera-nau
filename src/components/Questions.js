import React, { Component } from "react";
import PropTypes from "prop-types"
import axios from "axios"

import Question from "./Question"

class Questions extends Component {

    questionsUrl = 'http://questions-itera-nau.herokuapp.com/questions?page=0&size=2';
      
    state = {
        questions: this.props.questions
      }

    componentDidMount() {
        axios.get(this.questionsUrl)
        .then(res => {
          console.log(res);
          const newQuestions = res.data.content.map(c => { return {
              id: c.id,
              name: c.title
          }});

          const newState = Object.assign({}, this.state, {
              questions: newQuestions
          });

          this.setState(newState);

        })
        .catch(error=> {
          console.log(error);
        });
    }

    render() {
    return (
        <ul>
            { this.state.questions.map(c=> <Question key={c.id} name={c.name} />)}
       </ul>
    );
    }
}

Questions.propTypes = {
    questions: PropTypes.arrayOf(Question)
   }

Questions.defaultProps = {questions:[]}


export default Questions;