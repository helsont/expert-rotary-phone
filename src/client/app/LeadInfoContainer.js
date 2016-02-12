import React from 'react';

class LeadInfoContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {likesCount: 0};
        this.onLike = this.onLike.bind(this);
    }

    onLike() {
        let newLikesCount = this.state.likesCount + 1;
        this.setState({likesCount: newLikesCount});
    }

    render() {
      return (
        <div>
          <ul className="nav nav-tabs info-tabs" role="tablist">
            <li role="presentation" className="active"><a href="#home" aria-controls="home" role="tab" data-toggle="tab">Questions</a></li>
            <li role="presentation"><a href="#profile" aria-controls="profile" role="tab" data-toggle="tab">Lead Info</a></li>
          </ul>

          <div className="tab-content">
            <div role="tabpanel" className="tab-pane active" id="home">

            </div>
            <div role="tabpanel" className="tab-pane" id="profile">

            </div>
          </div>
        </div>
      );
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

export default LeadInfoContainer;
