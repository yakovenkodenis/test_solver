class Test extends React.Component {
  static propTypes = {
    id: React.PropTypes.number,
    name: React.PropTypes.string,
    questions: React.PropTypes.array,
    checked: React.PropTypes.bool,
    radioGroupName: React.PropTypes.string
  }

  render () {
    const {id, name, checked, radioGroupName} = this.props;
    return (
        <div>
          <input
            id={id}
            type='radio'
            value={name}
            name={radioGroupName}/>
          <label htmlFor={id}>{name}</label>
        </div>
    );
  }
}
