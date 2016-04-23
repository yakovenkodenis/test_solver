class MainContainer extends React.Component {

  state = {
  }

  render () {
    return (
      <div>
        <div>Subjects: {this.props.subjects}</div>
        <div>Title: {this.props.title}</div>
        <div>Tests: {this.props.tests}</div>
        <div>Answers: {this.props.answers}</div>
        <SearchField searchPlaceholder='Search...' />
      </div>
    );
  }
}

MainContainer.propTypes = {
  subjects: React.PropTypes.array,
  title: React.PropTypes.string,
  tests: React.PropTypes.array,
  answers: React.PropTypes.array
};
