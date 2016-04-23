class QuestionContainer extends React.Component {

  static propTypes = {
    questions: React.PropTypes.array
  }

  render () {

    let questionsProp = this.props.questions;
    const questions = questionsProp && questionsProp.map((question, index) => {
      return (
        <Question
          key={index}
          question={question.question}
          answers={question.answers} />
      );
    });

    return (
      <div>
        {questions}
      </div>
    );
  }
}
