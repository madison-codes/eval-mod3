
require(axios);

export default ({}) => {
  axios.get('/quizzes', { })
  .then((response) => {
    this.setState({ quizzes: response.data.quizzes });
  }).catch(() => {
    console.log('get request failed');
  });
};
