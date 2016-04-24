class AddButton extends React.Component {

  static propTypes = {
    onClick: React.PropTypes.func,
    text: React.PropTypes.string
  }

  render () {
    const { text, onClick } = this.props;

    return (
      <div className='btn-add-block'>
        <a className='btn-add' onClick={onClick}>{text}</a>
      </div>
    );
  }
}
