class TestContainer extends React.Component {

  static propTypes = {
    tests: React.PropTypes.array.isRequired
  }

  state = {
    activeTest: this.props.tests ? this.props.tests[0].name : ''
  }

  handleClick(e) {
    this.setState({ activeTest: e.target.value });
  }

  render () {
    const testsProp = this.props.tests;
    const tests = testsProp.map((test, index) => {
      return (
        <Test
          key={index}
          id={test.id}
          name={test.name}
          questions={test.questions}
          radioGroupName='tests-radio-group'
          onClick={this.handleClick.bind(this)} />
      );
    });

    let currentTest = testsProp && testsProp.find(
      test => test.name === this.state.activeTest
    );
    let questions = currentTest ? currentTest.questions : undefined;

    return (
      <div>
        <div className='tests-container'>
          {tests}
        </div>
        {
          questions && questions.length > 0 ?
          <QuestionContainer questions={questions} />
          :
            <div className='no-questions-block'>
              Вопросов пока что нет.
              <AddButton text='Добавить новый вопрос' />
            </div>
        }
      </div>
    );
  }
}
