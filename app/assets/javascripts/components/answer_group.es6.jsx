class AnswerGroup extends React.Component {

  static propTypes = {
    children: React.PropTypes.array.isRequired
  }

  render () {
    return (
      <ul>
        {this.props.children}
      </ul>
    );
  }
}
