class Subject extends React.Component {

  static propTypes = {
    id: React.PropTypes.number.isRequired,
    name: React.PropTypes.string.isRequired,
    tests: React.PropTypes.array,
    checked: React.PropTypes.bool,
    radioGroupName: React.PropTypes.string.isRequired,
    onClick: React.PropTypes.func.isRequired
  }

  render () {
    const {id, name, checked, radioGroupName, onClick} = this.props;
    return (
        <div className='subject'>
          <input
            id={radioGroupName + id}
            type='radio'
            value={name}
            onClick={onClick}
            name={radioGroupName}
            defaultChecked={checked}/>
          <label htmlFor={radioGroupName + id}>{name}</label>
        </div>
    );
  }
}
