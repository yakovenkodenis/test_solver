class TestContainer extends React.Component {

  static propTypes = {
    tests: React.PropTypes.array
  }

  render () {
    const tests = this.props.tests.map((test, index) => {
      return (
        <Test
          key={index}
          id={test.id}
          name={test.name}
          questions={test.questions}
          radioGroupName='tests-radio-group' />
      );
    });

    return (
      <div>
        {tests}
      </div>
    );
  }
}
