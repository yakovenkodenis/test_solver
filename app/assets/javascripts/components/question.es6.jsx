class Question extends React.Component {

  static propTypes = {
    question: React.PropTypes.string,
    answers: React.PropTypes.array
  }

  render () {

    let answersProp = this.props.answers;
    const answers = answersProp && answersProp.map((answer, index) => {
      return (
        <Answer key={index} answer={answer.answer} />
      );
    });

    return (
      <div>
        <div>{this.props.question}</div>
        <AnswerGroup>
          {
            answers && answers.length > 0 ?
            answers
            : <li>Ответа пока что нет.</li>}
        </AnswerGroup>
      </div>
    );
  }
}
