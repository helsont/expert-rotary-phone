
var App = React.createClass({

  render: function() {
    return (
      <div>
        <NavBar />
        <div className="row row-eq-height">
          <div className="col-xs-6 col-md-4 thread-list">
            <ThreadsContainer />
          </div>
          <div className="col-xs-12 col-md-8 separator full-height-container">
            <p className="lead">Jane Smith</p>
            <ChatContainer />
          </div>
        </div>
      </div>
    );
  }
});

var ThreadsContainer = React.createClass({
  render: function() {
    return (
      <div>
        <Thread />
      </div>
    )
  }
});

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

var ChatContainer = React.createClass({
  render: function() {
    return (
      <div>
        <Message/>
        <Message/>
        <Message/>
        <Message/>
      </div>
    )
  }
})

var Message = React.createClass({
  render: function() {
    return (
      <div>
        <div className="row">
          hello
        </div>
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
            <a href="../" className="navbar-brand">Bootswatch</a>
            <button className="navbar-toggle" type="button" data-toggle="collapse" data-target="#navbar-main">
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
          </div>
          <div className="navbar-collapse collapse" id="navbar-main">
            <ul className="nav navbar-nav">
              <li className="dropdown">
                <a className="dropdown-toggle" data-toggle="dropdown" href="#" id="themes">Themes <span className="caret"></span></a>
                <ul className="dropdown-menu" aria-labelledby="themes">
                  <li><a href="../default/">Default</a></li>
                  <li className="divider"></li>
                  <li><a href="../cerulean/">Cerulean</a></li>
                </ul>
              </li>
              <li>
                <a href="../help/">Help</a>
              </li>
              <li className="dropdown">
                <a className="dropdown-toggle" data-toggle="dropdown" href="#" id="download">Lumen <span className="caret"></span></a>
                <ul className="dropdown-menu" aria-labelledby="download">
                  <li><a href="http://jsfiddle.net/bootswatch/gqhenoox/">Open Sandbox</a></li>
                  <li className="divider"></li>
                  <li><a href="./bootstrap.min.css">bootstrap.min.css</a></li>
                  <li><a href="./bootstrap.css">bootstrap.css</a></li>
                  <li className="divider"></li>
                  <li><a href="./variables.less">variables.less</a></li>
                  <li><a href="./bootswatch.less">bootswatch.less</a></li>
                  <li className="divider"></li>
                  <li><a href="./_variables.scss">_variables.scss</a></li>
                  <li><a href="./_bootswatch.scss">_bootswatch.scss</a></li>
                </ul>
              </li>
            </ul>

            <ul className="nav navbar-nav navbar-right">
              <li><a href="http://builtwithbootstrap.com/" target="_blank">Built With Bootstrap</a></li>
              <li><a href="https://wrapbootstrap.com/?ref=bsw" target="_blank">WrapBootstrap</a></li>
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

ReactDOM.render(
  <App />,
  document.getElementById('main')
);
