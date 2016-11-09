import React from 'react';

export default class Answer extends React.Component {
  render() {
    let {title, score} = {...this.props.data};
    return (
      <label >
        <input
          className='answer'
          type='checkbox'
          value={score}
        />
        {title}
        <br/>
      </label>
    );
  }
}
