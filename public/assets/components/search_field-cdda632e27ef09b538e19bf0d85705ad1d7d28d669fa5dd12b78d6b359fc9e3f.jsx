class SearchField extends React.Component {

  constructor(props, context) {
    super(props, context);
  }

  static propTypes = {
    searchPlaceholder: React.PropTypes.string.isRequired,
    searchAction: React.PropTypes.func,
    onChange: React.PropTypes.func
  }

  state = {
    value: ''
  }

  render () {
    const action = this.props.searchAction,
          placeholder = this.props.searchPlaceholder,
          onChange = this.props.onChange;

    return (
      <div className='search-form-block'>
        <form action={action}>
          <input
            type='search'
            placeholder={placeholder}
            onChange={onChange} />
        </form>
      </div>
    );
  }
}

SearchField.state = {
  value: ''
};

SearchField.propTypes = {
  searchPlaceholder: React.PropTypes.string,
  searchAction: React.PropTypes.func
};
