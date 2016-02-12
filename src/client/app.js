var isNode = typeof module !== 'undefined' && module.exports
  , React = isNode ? require('react') : window.React
  , ReactDOM = isNode ? require('react') : window.ReactDOM

var App = React.createClass({

  render: function() {
    return (
      <div>
        <NavBar />
        <div className="container-fluid">
          <div className="row row-eq-height">
            <div className="col-xs-4 col-sm-4 col-md-3 col-lg-3 thread-list">
              <ThreadsContainer />
            </div>
            <div className="col-xs-8 col-sm-8 col-md-6 col-lg-6 separator message-container">
              <MessageContainer />
            </div>
            <div className="hidden-xs hidden-sm col-md-3 col-lg-3 separator scrollable">
              <LeadInfoContainer />
            </div>
          </div>
        </div>
      </div>
    );
  },
  componentDidMount: function() {
    $(function () {
      $('[data-toggle="tooltip"]').tooltip()
    });
  }
});

var LeadInfoContainer = React.createClass({
  render: function() {
    return (
      <div>
        <ul className="nav nav-tabs info-tabs" role="tablist">
          <li role="presentation" className="active"><a href="#home" aria-controls="home" role="tab" data-toggle="tab">Questions</a></li>
          <li role="presentation"><a href="#profile" aria-controls="profile" role="tab" data-toggle="tab">Lead Info</a></li>
        </ul>

        <div className="tab-content">
          <div role="tabpanel" className="tab-pane active" id="home">
            <QuestionsContainer />
          </div>
          <div role="tabpanel" className="tab-pane" id="profile">
            <GreetingsContainer />
          </div>
        </div>
      </div>
    );
  },
  componentDidMount: resize
});

var GreetingsContainer = React.createClass({
  render: function() {
    return (
      <div>
        <h2>Lead Info</h2>
        <hr></hr>

        <div className="form-group">
          <input type="email" className="form-control" id="exampleInputEmail1" placeholder="First Name"></input>
        </div>
        <div className="form-group">
          <input type="email" className="form-control" id="exampleInputEmail1" placeholder="Last Name"></input>
        </div>
        <div className="form-group">
          <input type="email" className="form-control" id="exampleInputEmail1" placeholder="Budget"></input>
        </div>
        <div className="form-group">
          <input type="email" className="form-control" id="exampleInputEmail1" placeholder="Moving To"></input>
        </div>
        <div className="form-group">
          <input type="email" className="form-control" id="exampleInputEmail1" placeholder="Moving On"></input>
        </div>
        <div className="form-group">
          <input type="email" className="form-control" id="exampleInputEmail1" placeholder="Beds"></input>
        </div>
      </div>
    );
  },
  componentDidMount: resize
});

var Question = React.createClass({
  render: function() {
    return (
      <div>
        <div className="form-group">
          <div className="input-group">
            <span className="input-group-btn">
              <button className="btn btn-default" type="button">Ask</button>
            </span>
            <textarea
              className="form-control"
              rows="1"
              data-toggle="tooltip"
              data-placement="top"
              title={this.props.question}
              placeholder={this.props.question}>
            </textarea>
          </div>
        </div>
      </div>
    );
  }
});

var Greeting = React.createClass({
  render: function() {
    return (
      <div className="form-group">
        <div className="input-group">
          <span className="input-group-btn">
            <button className="btn btn-default" type="button">Send</button>
          </span>
          <textarea
            type="text"
            className="form-control"
            rows="2"
            data-toggle="tooltip"
            data-placement="top"
            title={this.props.greeting}
            value={this.props.greeting}
            readOnly></textarea>
        </div>
      </div>
    )
  }
});

var QuestionsContainer = React.createClass({
  render: function() {
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
    );
  },
  componentDidMount: resize
});

var ThreadsContainer = React.createClass({
  render: function() {
    return (
      <div>
        <Thread />
        <Thread />
        <Thread />
        <Thread />
        <Thread />
      </div>
    )
  },
  componentDidMount: resize
});

function resize() {
  var node = ReactDOM.findDOMNode(this);
  if (!node) {
    return;
  }
  var el = node.parentElement;

  var y = $(window).height() - 70;
  $(el).css('height', y + 'px');
}

var Thread = React.createClass({
  render: function() {
    return (
      <div>
        <div className="row thread">
          <b>Jane Smith</b><small className="float-right">2/11 at 5:46pm</small>
          <br></br>
          "I'm looking for an apartment..."
        </div>
      </div>
    )
  }
})

var TextInput = React.createClass({
  render: function() {
    return (
      <div className="message-text-area-container">
        <div className="row">
          <div className="col-md-10 no-border">
            <textarea
            className="message-text-area"
            placeholder="Type a message here..."
            defaultValue="Aenean lacinia bibendum nulla sed consectetur. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Morbi leo risus, porta ac consectetur ac, vestibulum at eros."
            ></textarea>
          </div>
          <div className="col-md-2 no-border">
            <button className="btn btn-default message-text-area">Send</button>
          </div>
        </div>
      </div>
    );
  },
  componentDidMount: function() {
    return;
    // var el = ReactDOM.findDOMNode(this);
    // var parent = el.parentElement.parentElement;
    // var input = el.childNodes[0];
    // $(input).css('width', $(parent).width() - 20 + 'px');
  }
})

var ChatContainer = React.createClass({
  render: function() {
    return (
      <div className="chat-container scrollable">
        <Message/>
        <Message/>
        <Message/>
        <Message/>
      </div>
    )
  }
})

var MessageContainer = React.createClass({
  render: function() {
    return (
      <div>
        <div className="message-list">
          <LeadAttributes/>
          <div>
            <ChatContainer/>
          </div>
        </div>
        <TextInput/>
      </div>
    )
  },
  componentDidMount: resize
});

var LeadAttributes = React.createClass({
  render: function() {
    return (
      <div>
        <h2>Jane Smith</h2>
        <span className="label label-success">Active Lead</span>
        <span className="label label-danger">Primary</span>
        <hr></hr>
      </div>
    )
  }
})

var Message = React.createClass({
  render: function() {
    return (
      <div>
        <div className="chat-message-outgoing">
          hi
        </div>
        <p className="text-left">Sent at 4:56pm.</p>

        <div className="clear"></div>

        <div className="chat-message-incoming">
          incoming
        </div>
        <p className="text-right">Sent at 5:56pm.</p>
        <div className="clear"></div>
      </div>
    )
  }
})

var ListWrapper = React.createClass({
  render: function() {
    return (
      <div className="col s3">
        <h4>{this.props.listName}</h4>
        <List />
      </div>
    );
  }
})

var Comment = React.createClass({
  rawMarkup: function() {
    var rawMarkup = marked(this.props.children.toString(), {sanitize: true});
    return { __html: rawMarkup };
  },

  render: function() {
    return (
      <div className="comment">
        <h2 className="commentAuthor">
          {this.props.author}
        </h2>
        <span dangerouslySetInnerHTML={this.rawMarkup()} />
      </div>
    );
  }
});

var List = React.createClass({
  render: function() {
    return (
      <div>


      </div>
    );
  }
});

var NavBar = React.createClass({
  render: function() {
    return (
      <div className="navbar navbar-default navbar-fixed-top">
        <div className="container">
          <div className="navbar-header">
            <a href="../" className="navbar-brand">Riley</a>
            <button className="navbar-toggle" type="button" data-toggle="collapse" data-target="#navbar-main">
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
          </div>
          <div className="navbar-collapse collapse" id="navbar-main">
            <ul className="nav navbar-nav">
              <li><a href="#" target="_blank">Dashboard</a></li>
              <li><a href="#" target="_blank">Demo Users</a></li>
              <li><a href="#" target="_blank">Waiting List</a></li>
              <li><a href="#" target="_blank">Message Center</a></li>
              <li className="dropdown">
                <a className="dropdown-toggle" data-toggle="dropdown" href="#" id="download">Archives <span className="caret"></span></a>
                <ul className="dropdown-menu" aria-labelledby="download">
                  <li><a href="http://jsfiddle.net/bootswatch/gqhenoox/">Open Sandbox</a></li>
                  <li className="divider"></li>
                  <li><a href="./bootstrap.min.css">bootstrap.min.css</a></li>
                  <li><a href="./bootstrap.css">bootstrap.css</a></li>
                </ul>
              </li>
            </ul>

            <ul className="nav navbar-nav navbar-right">
              <li><a href="http://builtwithbootstrap.com/" target="_blank">Settings</a></li>
              <li><a href="https://wrapbootstrap.com/?ref=bsw" target="_blank">Daniel</a></li>
            </ul>

          </div>
        </div>
      </div>
    )
  }
});

var CommentBox = React.createClass({
  loadCommentsFromServer: function() {
    $.ajax({
      url: this.props.url,
      dataType: 'json',
      cache: false,
      success: function(data) {
        this.setState({data: data});
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  },
  handleCommentSubmit: function(comment) {
    var comments = this.state.data;
    // Optimistically set an id on the new comment. It will be replaced by an
    // id generated by the server. In a production application you would likely
    // not use Date.now() for this and would have a more robust system in place.
    comment.id = Date.now();
    var newComments = comments.concat([comment]);
    this.setState({data: newComments});
    $.ajax({
      url: this.props.url,
      dataType: 'json',
      type: 'POST',
      data: comment,
      success: function(data) {
        this.setState({data: data});
      }.bind(this),
      error: function(xhr, status, err) {
        this.setState({data: comments});
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  },
  getInitialState: function() {
    return {data: []};
  },
  componentDidMount: function() {
    this.loadCommentsFromServer();
    setInterval(this.loadCommentsFromServer, this.props.pollInterval);
  },
  render: function() {
    return (
      <div className="commentBox">
        <h1>Comments</h1>
        <CommentList data={this.state.data} />
        <CommentForm onCommentSubmit={this.handleCommentSubmit} />
      </div>
    );
  }
});

var Static = React.createClass({
  render: function() {
    return (
      <div>
        <h1>Yo</h1>
      </div>
    );
  }
})

var CommentList = React.createClass({
  render: function() {
    var commentNodes = this.props.data.map(function(comment) {
      return (
        <Comment author={comment.author} key={comment.id}>
          {comment.text}
        </Comment>
      );
    });
    return (
      <div className="commentList">
        {commentNodes}
      </div>
    );
  }
});

var CommentForm = React.createClass({
  getInitialState: function() {
    return {author: '', text: ''};
  },
  handleAuthorChange: function(e) {
    this.setState({author: e.target.value});
  },
  handleTextChange: function(e) {
    this.setState({text: e.target.value});
  },
  handleSubmit: function(e) {
    e.preventDefault();
    var author = this.state.author.trim();
    var text = this.state.text.trim();
    if (!text || !author) {
      return;
    }
    this.props.onCommentSubmit({author: author, text: text});
    this.setState({author: '', text: ''});
  },
  render: function() {
    return (
      <form className="commentForm" onSubmit={this.handleSubmit}>
        <input
          type="text"
          placeholder="Your name"
          value={this.state.author}
          onChange={this.handleAuthorChange}
        />
        <input
          type="text"
          placeholder="Say something..."
          value={this.state.text}
          onChange={this.handleTextChange}
        />
        <input type="submit" value="Post" />
      </form>
    );
  }
});

var LikeButton = React.createClass({
  getInitialState: function() {
    return {liked: false};
  },
  handleClick: function(event) {
    this.setState({liked: !this.state.liked});
  },
  render: function() {
    var text = this.state.liked ? 'like' : 'haven\'t liked';
    return (
      <button onClick={this.handleClick}>
        You {text} this. Click to toggle.
      </button>
    );
  }
});

if (isNode) {
  exports.App = App
} else {
  ReactDOM.render(<App name="John" />, document.getElementById('react-root'))
}
