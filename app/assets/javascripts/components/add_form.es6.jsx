class AddForm extends React.Component {

  static propTypes = {
    onSubmit: React.PropTypes.func
  }

  render () {
    return (
      <div>
        <div>On Submit: {this.props.onSubmit}</div>
      </div>
    );
  }
}
