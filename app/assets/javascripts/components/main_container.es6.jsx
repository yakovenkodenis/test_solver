class MainContainer extends React.Component {

  static propTypes = {
    subjects: React.PropTypes.array,
    title: React.PropTypes.string
  }

  state = {
    subjects: []
  }

  componentDidMount() {
    axios
      .get('/api/v1/subjects/all?deep=true')
      .then(response => {this.setState({subjects: response});console.log(this.state);})
      .catch(response => console.log(response));
  }

  render () {
    return (
      <div>
        <div>Subjects: {this.props.subjects}</div>
        <div>Title: {this.props.title}</div>
        <SearchField searchPlaceholder='Search...' />
      </div>
    );
  }
}

// MainContainer.propTypes = {
//   subjects: React.PropTypes.array,
//   title: React.PropTypes.string
// };
