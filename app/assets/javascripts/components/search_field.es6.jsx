class SearchField extends React.Component {

  constructor(props, context) {
    super(props, context);
  }

  render () {
    const action = this.props.searchAction,
          placeholder = this.props.searchPlaceholder;

    return (
      <div className='search-form-block'>
        <form action={action}>
          <input type='search' placeholder={placeholder} />
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
