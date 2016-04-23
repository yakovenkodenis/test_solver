class QuestionContainer extends React.Component {
  render () {
    return (
      <div>
        <div>Questions: {this.props.questions}</div>
      </div>
    );
  }
}

QuestionContainer.propTypes = {
  questions: React.PropTypes.array
};
