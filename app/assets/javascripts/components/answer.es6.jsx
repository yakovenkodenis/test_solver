class Answer extends React.Component {

  static propTypes = {
    answer: React.PropTypes.string.isRequired
  }

  render () {
    return (
      <li>{this.props.answer}</li>
    );
  }
}
