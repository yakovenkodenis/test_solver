class AddButton extends React.Component {

  static propTypes = {
    onClick: React.PropTypes.func,
    text: React.PropTypes.string,
    place: React.PropTypes.string
  }

  render () {
    const { text, onClick, place } = this.props;
    let className = place ? `btn-add-block-${place}` : 'btn-add-block';

    return (
      <div className={className}>
        <a className='btn-add' onClick={onClick}>{text}</a>
      </div>
    );
  }
}
