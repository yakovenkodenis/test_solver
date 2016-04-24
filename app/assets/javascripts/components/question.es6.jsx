class Question extends React.Component {

  static propTypes = {
    question: React.PropTypes.string.isRequired,
    answers: React.PropTypes.array.isRequired
  }

  render () {
    let answersProp = this.props.answers;
    const answers = answersProp && answersProp.map((answer, index) => {
      return (
        <Answer key={index} answer={answer.answer} />
      );
    });

    return (
      <div className='question'>
        <h2>{this.props.question}</h2>
        <AnswerGroup>
          {
            answers && answers.length > 0 ?
            answers
            : <li className='no-answer'>Ответа пока что нет.</li>}
        </AnswerGroup>
      </div>
    );
  }
}
