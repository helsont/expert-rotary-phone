import React from 'react';

class QuestionsContainer extends React.Component {
  render() {
    return (
      <div>
        <h2>Questions</h2>
        <hr></hr>
        <ul className="list-group">
          <Greeting greeting="I'm Alexi from David Elliman Realty, and I run our NYC branch."/>
          <Question question="Where are you looking to move to?"/>
          <Question question="What is your budget?"/>
          <Question question="What is your budget?"/>
          <Question question="Bedrooms? Bathrooms?"/>
          <Question question="Are you interested in any other neighborhoods as well? (Find out which ones if yes)"/>
          <Greeting greeting="Fantastic. I will get to work and if I have any other questions, I will be in touch asap. Have a great rest of your day!"/>
        </ul>

        <div className="btn-group btn-group-justified" role="group" aria-label="...">
          <div className="btn-group" role="group">
            <button type="button" className="btn btn-success">Connect Lead</button>
          </div>
        </div>
      </div>
    )
  }

  componentDidMount() {
    var node = ReactDOM.findDOMNode(this);
    if (!node) {
      return;
    }
    var el = node.parentElement;

    var y = $(window).height() - 70;
    $(el).css('height', y + 'px');
  }
}

export default QuestionsContainer;
