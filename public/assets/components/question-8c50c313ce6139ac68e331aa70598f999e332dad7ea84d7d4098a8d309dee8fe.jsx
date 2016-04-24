class Question extends React.Component {

  static propTypes = {
    question: React.PropTypes.string.isRequired,
    answers: React.PropTypes.array.isRequired
  }

  state = {
    showForm: false
  }

  handleTriggerShowForm() {
    this.setState({ showForm: !this.state.showForm });
  }

  render () {
    let answersProp = this.props.answers;
    const answers = answersProp && answersProp.map((answer, index) => {
      return (
        <Answer key={index} answer={answer.answer} />
      );
    });

    return (
      <div className='question'>
        <h2>{this.props.question}</h2>
        <AnswerGroup>
          {
            answers && answers.length > 0 ?
            answers
            :
              <div>
                <li className='no-answer'>Ответа пока что нет.</li>
                {
                  this.state.showForm ?
                    <AddForm
                      btnPlace='under-search btn-form btn-answer'
                      placeholder='Введите новый ответ...'
                      onCancel={this.handleTriggerShowForm.bind(this)} />
                  : <AddButton
                      onClick={this.handleTriggerShowForm.bind(this)}
                      text='Добавить ответ'
                      place='under-search ' />
                }
              </div>
          }
        </AnswerGroup>
      </div>
    );
  }
}
