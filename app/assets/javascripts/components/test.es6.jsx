class Test extends React.Component {
  static propTypes = {
    id: React.PropTypes.number,
    name: React.PropTypes.string,
    questions: React.PropTypes.array,
    checked: React.PropTypes.bool,
    radioGroupName: React.PropTypes.string,
    onClick: React.PropTypes.func
  }

  render () {
    const {id, name, checked, radioGroupName, onClick} = this.props;
    return (
        <div>
          <input
            id={id}
            type='radio'
            value={name}
            onClick={onClick}
            name={radioGroupName}/>
          <label htmlFor={id}>{name}</label>
        </div>
    );
  }
}
