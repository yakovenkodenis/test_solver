class MainContainer extends React.Component {

  static propTypes = {
    subjects: React.PropTypes.array,
    title: React.PropTypes.string
  }

  state = {
    subjects: undefined
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
        {
          this.state.subjects &&
          <div>
            <SubjectContainer subjects={this.state.subjects.data} />
            <SearchField searchPlaceholder='Search...' />
          </div>
        }
      </div>
    );
  }
}
