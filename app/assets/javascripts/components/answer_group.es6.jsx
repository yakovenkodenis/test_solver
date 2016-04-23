class AnswerGroup extends React.Component {

  static propTypes = {
    children: React.PropTypes.array
  }

  render () {
    return (
      <ul>
        {this.props.children}
      </ul>
    );
  }
}
