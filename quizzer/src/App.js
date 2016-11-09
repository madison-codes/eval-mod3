import React from 'react';
import './App.css';
import axios from 'axios';
import Quiz from './Quiz';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      quizzes: null
    };
  }

  componentDidMount() {
    axios
      .get('/quizzes')
      .then((response) => {
        this.setState({quizzes: response.data.quizzes});
      })
      .catch(() => {
        console.log('error');
      });
  }

  render() {
    let quizzes = this.state.quizzes;
    return (
      <main>
        {quizzes
          ? quizzes.map(quiz => <Quiz
            className='quiz'
            data={quiz}
            key={quiz.id}/>)
          : <p>Loading Quizzes...</p>
        }
      </main>
    );
  }
}
