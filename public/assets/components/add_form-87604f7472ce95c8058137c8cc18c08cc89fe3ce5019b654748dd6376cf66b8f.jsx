class AddForm extends React.Component {

  static propTypes = {
    onSubmit: React.PropTypes.func,
    onCancel: React.PropTypes.func,
    placeholder: React.PropTypes.string,
    btnPlace: React.PropTypes.string,
    btnSyles: React.PropTypes.object
  }

  render () {
    const { onCancel, placeholder, btnPlace, btnStyles } = this.props;
    let styles = btnStyles ? btnStyles : '';
    return (
      <div className='add-form-block'>
        <form className='add-form'>
          <input
            type='text'
            placeholder={placeholder} />
          <AddButton
            text='Add'
            place={btnPlace}
            style={{styles}} />
          <AddButton
            text='Cancel'
            place={btnPlace}
            styles={{styles}}
            onClick={onCancel} />
        </form>
      </div>
    );
  }
}
