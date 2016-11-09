import React from 'react';
import Answer from './Answer';

export default class Question extends React.Component {
  render() {
    let {title, answers} = { ...this.props.data }
    return (
      <article className='question'>
        <h2>{title}</h2>
        {answers.map((answer, index) =>
          <Answer
            key={index}
            data={answer}/>
        )}
      </article>
    );
  }
}
