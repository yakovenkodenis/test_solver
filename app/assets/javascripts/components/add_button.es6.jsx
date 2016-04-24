class AddButton extends React.Component {

  static propTypes = {
    onClick: React.PropTypes.func,
    text: React.PropTypes.string,
    place: React.PropTypes.string,
    style: React.PropTypes.object
  }

  render () {
    const { text, onClick, place, style } = this.props;
    let className = place ? `btn-add-block-${place}` : 'btn-add-block';
    let styles = style ? style : '';

    return (
      <div className={className}>
        <a
          className='btn-add'
          style={{styles}}
          onClick={onClick}>
            {text}
        </a>
      </div>
    );
  }
}
