class Answer extends React.Component {

  static propTypes = {
    answer: React.PropTypes.string.isRequired
  }

  render () {
    return (
      <li><p>{this.props.answer}</p></li>
    );
  }
}
