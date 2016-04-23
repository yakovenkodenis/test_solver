class MainContainer extends React.Component {

  static propTypes = {
    title: React.PropTypes.string.isRequired
  }

  state = {
    subjects: undefined
  }

  componentDidMount() {
    axios
      .get('/api/v1/subjects/all?deep=true')
      .then(response => this.setState({subjects: response}))
      .catch(response => console.log(response));
  }

  render () {
    return (
      <div>
        {
          this.state.subjects &&
          <SubjectContainer subjects={this.state.subjects.data} />
        }
      </div>
    );
  }
}
