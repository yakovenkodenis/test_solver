class QuestionContainer extends React.Component {

  static propTypes = {
    questions: React.PropTypes.array.isRequired,
  }

  state = {
    searchString: '',
    showForm: false
  }

  handleTriggerShowForm() {
    this.setState({
      ...this.state,
      showForm: !this.state.showForm
    });
  }

  searchHandler(e) {
    this.setState({
      ...this.state,
      searchString: e.target.value
    });
  }

    searchStringInArray(str, strArray) {
      for (let i = 0; i < strArray.length; ++i) {
        if (strArray[i].match(str)) {
          return true;
        }
      }
      return false;
    }

  anyMatchInQuery(name, query) {
    const nameArr = name.split(/\s|\,|\.|\!|\?|\:|\;/i),
          queryArr = query.split(/\s|\,|\.|\!|\?|\:|\;/i);

    let found = false;
    for (let i = 0; i < queryArr.length; ++i) {
      if ((nameArr.indexOf(queryArr[i]) > -1) ||
        (this.searchStringInArray(queryArr[i], nameArr))) {
        found = true;
        break;
      }
    }

    return found;
  }

  render () {
    let questionsProp = this.props.questions;
    let searchString = this.state.searchString.trim().toLowerCase();

    if (questionsProp && questionsProp.length > 0) {
      if (searchString.length) {
        questionsProp = questionsProp.filter(
          q => this.anyMatchInQuery(q.question.toLowerCase(), searchString)
        );
      }
    }

    let questions = questionsProp && questionsProp.map((question, index) => {
      return (
        <Question
          key={index}
          question={question.question}
          answers={question.answers} />
      );
    });

    return (
      <div className='questions-container'>
        {
          !this.state.showForm &&
          <SearchField
            searchPlaceholder='Search...'
            onChange={this.searchHandler.bind(this)} />
        }
          {
            this.state.showForm ?
              <AddForm
                btnPlace='under-search btn-form'
                placeholder='Введите новый вопрос...'
                onCancel={this.handleTriggerShowForm.bind(this)} />
            : <AddButton
                onClick={this.handleTriggerShowForm.bind(this)}
                text='Добавить вопрос'
                place='under-search' />
          }
        {questions}
      </div>
    );
  }
}
