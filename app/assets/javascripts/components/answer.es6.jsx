class Answer extends React.Component {

  static propTypes = {
    answer: React.PropTypes.string
  }

  render () {
    return (
      <div>{this.props.answer}</div>
    );
  }
}
