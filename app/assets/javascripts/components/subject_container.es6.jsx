class SubjectContainer extends React.Component {

  static propTypes = {
    subjects: React.PropTypes.array.isRequired
  }

  state = {
    activeSubject: this.props.subjects ? this.props.subjects[0].name : ''
  }

  handleClick(e) {
    this.setState({ activeSubject: e.target.value });
  }

  render () {
    let subjectsProp = this.props.subjects;

    const subjects = subjectsProp.map((subject, index) => {
      return (
        <Subject
          key={index}
          id={subject.id}
          name={subject.name}
          tests={subject.tests}
          checked={index === 0}
          onClick={this.handleClick.bind(this)}
          radioGroupName='subjects-radio-group' />
      );
    });

    let currentSubject = subjectsProp.find(
      subject => subject.name === this.state.activeSubject
    );
    let tests = currentSubject ? currentSubject.tests : undefined;

    return (
      <div>
        <div>
          {subjects}
        </div>
        {
          tests && tests.length > 0 ?
          <TestContainer tests={tests} />
          : <div>Тестов пока что нет.</div>
        }
      </div>
    );
  }
}
