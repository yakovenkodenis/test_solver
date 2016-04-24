class AddForm extends React.Component {

  static propTypes = {
    onSubmit: React.PropTypes.func,
    onCancel: React.PropTypes.func,
    placeholder: React.PropTypes.string,
    btnPlace: React.PropTypes.string
  }

  render () {
    const { onCancel, placeholder, btnPlace } = this.props;
    return (
      <div className='add-form-block'>
        <form className='add-form'>
          <input
            type='text'
            placeholder={placeholder} />
          <AddButton text='Add' place={btnPlace} />
          <AddButton text='Cancel' onClick={onCancel} place={btnPlace} />
        </form>
      </div>
    );
  }
}
