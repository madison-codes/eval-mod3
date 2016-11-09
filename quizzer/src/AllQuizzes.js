import React from 'react';
import Question from './Question';
import { map } from 'lodash';

// export default class AllQuizzes extends React.Component {
export default ({ quizzes }) => {
  debugger;

  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     quizzes: this.props.quizzes
  //   };
  // }
  //
  // componentWillUpdate(nextProps) {
  //   if (this.state.quizzes) {
  //     if (this.state.quizzes !== nextProps.quizzes) {
  //       console.log('hey');
  //     }
  //   }
  // }
  //
  // render(){
    return(
      <section>
        <p>ALL QUIZZES</p>
        <p>
        {quizzes > 0  ?  map(quizzes[0].questions, (question) => {
                 return <Question key={question.id} {...question} />
               }): ''}
        </p>

      </section>
    )
}
