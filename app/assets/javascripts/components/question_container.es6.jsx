class QuestionContainer extends React.Component {

  static propTypes = {
    questions: React.PropTypes.array.isRequired,
  }

  state = {
    searchString: ''
  }

  searchHandler(e) {
    this.setState({ searchString: e.target.value });
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
        <SearchField
          searchPlaceholder='Search...'
          onChange={this.searchHandler.bind(this)} />
        {questions}
      </div>
    );
  }
}
