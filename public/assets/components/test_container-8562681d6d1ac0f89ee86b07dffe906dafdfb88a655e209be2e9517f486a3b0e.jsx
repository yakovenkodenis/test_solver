class TestContainer extends React.Component {

  static propTypes = {
    tests: React.PropTypes.array.isRequired
  }

  state = {
    activeTest: this.props.tests ? this.props.tests[0].name : '',
    showForm: false
  }

  handleClick(e) {
    this.setState({
      ...this.state,
      activeTest: e.target.value
    });
  }

  handleTriggerShowForm() {
    this.setState({
      ...this.state,
      showForm: !this.state.showForm
    });
  }

  render () {
    const testsProp = this.props.tests;
    const tests = testsProp.map((test, index) => {
      return (
        <Test
          key={index}
          id={test.id}
          name={test.name}
          checked={index === 0}
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
              {
                this.state.showForm ?
                  <AddForm
                    btnStyle={{'padding': '16px !important'}}
                    btnPlace='under-search btn-form'
                    placeholder='Введите новый вопрос...'
                    onCancel={this.handleTriggerShowForm.bind(this)} />
                : <AddButton
                    onClick={this.handleTriggerShowForm.bind(this)}
                    text='Добавить новый вопрос'
                    place='under-search no-questions' />
              }
            </div>
        }
      </div>
    );
  }
}
