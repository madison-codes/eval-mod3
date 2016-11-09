import React, { Component } from 'react';
import './App.css';
import AllQuizzes from './AllQuizzes';
import axios from 'axios';

export default class App extends Component {
  constructor(){
    super();
    this.state = {
      quizzes: null
    };
  }

  componentWillMount() {
    this.getAllQuizzes();
  }

  // componentWillUpdate(nextProps) {
  //   if (this.state.quizzes !== nextProps.quizzes) {
  //     this.state.quizzes = nextProps.quizzes
  //   }
  // }

  getAllQuizzes(){
    axios.get('/quizzes', { })
    .then((response) => {
      this.setState({ quizzes: response.data.quizzes });
    }).catch(() => {
      console.log('get request failed');
    });
  }


  // getSingleQuiz(){
  //   axios.get('/quizzes', {
  //     params: {
  //       ID: 1
  //     }
  //    })
  //   .then((response) => {
  //     console.log('a single ploop', response.data.quizzes);
  //   }).catch(() => {
  //     console.log('get request failed');
  //   });
  // }

  render(){
    return (
      <main>
        <section className='quiz'>
          <h1>What JavaScript Error Are You?</h1>
          <article className='question'>
            <h2>On average, how many npm packages do you install per app?</h2>
            <ul>
              <li>None. Everything I build is lovingly hand-made from scratch</li>
              <li>It depends on the size and scope of the application.',
              score</li>
              <li>At least a trillion</li>
              <li>npm WARN UNMET PEER DEPENDENCY</li>
            </ul>
          </article>
          <article className='question'>
          <h2>On average, how many npm packages do you install per app?</h2>
          <ul>
            <li>None. Everything I build is lovingly hand-made from scratch</li>
            <li>It depends on the size and scope of the application.',
            score</li>
            <li>At least a trillion</li>
            <li>npm WARN UNMET PEER DEPENDENCY</li>
          </ul>
          </article>
        </section>
        {/* <AllQuizzes quizzes={this.state.quizzes} /> */}
      </main>
    )
  }
}
