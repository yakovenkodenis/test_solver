class AnswerGroup extends React.Component {

  static propTypes = {
    children: React.PropTypes.array
  }

  render () {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}
